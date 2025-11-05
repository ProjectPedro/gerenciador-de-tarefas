import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();
  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-cyan-950 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="bg-slate-200 text-cyan-900 rounded-md absolute left-0 top-0 -bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl bg-slate-200 text-cyan-900 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold  text-cyan-900">{title}</h2>
          <p className=" text-cyan-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
