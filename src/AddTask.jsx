import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
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
        className="bg-cyan-950 px-4 py-2 rounded-md text-white font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;
