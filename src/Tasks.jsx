import { ChevronRightIcon, Trash2 } from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDetails from "./ButtonDetails.jsx";
import ButtonDelete from "./ButtonDelete.jsx";
import TaskSlotButton from "./TaskSlotButton.jsx";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <TaskSlotButton
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task.id)}
          ></TaskSlotButton>

          <ButtonDetails onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </ButtonDetails>

          <ButtonDelete
            onClick={() =>
              window.confirm("Você tem Certeza que Quer Deletar essa Tarefa ?") &&
              onDeleteTaskClick(task.id)
            }
          >
            <Trash2 />
          </ButtonDelete>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
