import { ChevronRightIcon, Trash2, Sparkles } from "lucide-react";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateSuggestedDescription } from "./services/groqService.js";
import ButtonDetails from "./ButtonDetails.jsx";
import ButtonDelete from "./ButtonDelete.jsx";
import TaskSlotButton from "./TaskSlotButton.jsx";
import DescriptionModal from "./DescriptionModal.jsx";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick, onUpdateTask }) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [suggestedDescription, setSuggestedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  async function handleGenerateDescription(task) {
    setSelectedTask(task);
    setIsModalOpen(true);
    setSuggestedDescription("");
    setError("");
    setIsLoading(true);

    try {
      const suggestion = await generateSuggestedDescription(
        task.title,
        task.description
      );
      setSuggestedDescription(suggestion);
    } catch (err) {
      setError(err.message || "Erro ao gerar descrição sugerida.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAcceptSuggestion() {
    if (selectedTask && suggestedDescription) {
      onUpdateTask(selectedTask.id, suggestedDescription);
      setIsModalOpen(false);
    }
  }

  function handleRejectSuggestion() {
    setIsModalOpen(false);
    setSelectedTask(null);
    setSuggestedDescription("");
    setError("");
  }

  return (
    <>
      <ul className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <TaskSlotButton
              key={task.id}
              task={task}
              onClick={() => onTaskClick(task.id)}
            ></TaskSlotButton>

            <button
              onClick={() => handleGenerateDescription(task)}
              className="p-2 rounded-lg bg-gradient-to-r from-purple-500/30 to-cyan-500/30 hover:from-purple-500/50 hover:to-cyan-500/50 text-purple-300 hover:text-purple-200 transition-all duration-200 border border-purple-500/50 hover:border-purple-500"
              title="Gerar sugestão com IA"
            >
              <Sparkles size={18} />
            </button>

            <ButtonDetails onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </ButtonDetails>

            <ButtonDelete
              onClick={() =>
                window.confirm(
                  "Você tem Certeza que Quer Deletar essa Tarefa ?"
                ) && onDeleteTaskClick(task.id)
              }
            >
              <Trash2 />
            </ButtonDelete>
          </li>
        ))}
      </ul>

      <DescriptionModal
        isOpen={isModalOpen}
        taskTitle={selectedTask?.title}
        currentDescription={selectedTask?.description}
        suggestedDescription={suggestedDescription}
        isLoading={isLoading}
        error={error}
        onAccept={handleAcceptSuggestion}
        onReject={handleRejectSuggestion}
      />
    </>
  );
}

export default Tasks;
