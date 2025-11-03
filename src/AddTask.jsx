function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o Titulo da Tarefa."
        className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"
      ></input>

      <input
        type="text"
        placeholder="Digite a Descrição da Tarefa.."
        className="border border-slate-500 outline-slate-400 px-4 py-2 rounded-md"
      ></input>

      <button className="bg-cyan-950 p-2 rounded-md flex-initial text-white w-full">
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;
