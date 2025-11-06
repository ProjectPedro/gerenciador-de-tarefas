import { useEffect, useState } from "react";
import Tasks from "./Tasks.jsx";
import AddTask from "./AddTask.jsx";
import { v4 } from "uuid";

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
  return (
    <div className="w-screen h-screen bg-cyan-950  flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {" "}
          Gerenciador de Tarefas{" "}
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
