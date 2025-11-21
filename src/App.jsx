import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tasks from "./Tasks.jsx";
import AddTask from "./AddTask.jsx";
import { v4 } from "uuid";
import Title from "./Title.jsx";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
    //Teste , caso queira consumir uma API externa para popular as tarefas iniciais
    //fetchInitialData();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onUpdateTask(taskId, newDescription) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, description: newDescription };
      }
      return tasks;
    });
    setTasks(newTasks);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 1,
      }}
    >
      <div className="w-screen h-screen gradient-bg flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title> Gerenciador de Tarefas </Title>

          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
            onUpdateTask={onUpdateTask}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
