import { ChevronRightIcon, Trash2 } from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDetails from "./ButtonDetails.jsx";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-stone-400 text-left text-white p-2 rounded-md w-full 
                 ${task.isCompleted && "line-through"} `}
          >
            {task.title}
          </button>

          <ButtonDetails onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </ButtonDetails>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-red-600 p-2 rounded-md text-white"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
