import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o Titulo da Tarefa."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a Descrição da Tarefa.."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title || !description.trim())
            return alert(
              "Por favor, preencha o título e a descrição da tarefa."
            );
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:from purple-600 hover:to-cyan-600 transition-all duration-200 active:scale-95"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;
