import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();
  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-cyan-950 p-6 flex justify-center items-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="bg-slate-200 text-cyan-900 rounded-md absolute left-0 top-0 -bottom-0 hover:bg-slate-300 transition"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-100">
          <h2 className="text-xl font-bold  text-cyan-900">{title}</h2>
          <p className=" text-cyan-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
