import { easeInOut, motion } from "framer-motion";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Title";
import ButtonBackClick from "../ButtonBackClick";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();
  function onBackClick() {
    navigate(-1);
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1, ease: easeInOut }}
    >
      <div className="h-screen w-screen bg-cyan-950 p-6 flex justify-center items-center">
        <div className="w-[500px] space-y-4 bg-slate-50 bordex-box p-6 rounded-xl shadow-lg">
          <div className="flex justify-center relative mb-6">
            <ButtonBackClick onClick={onBackClick}>
              <ChevronLeftIcon />
            </ButtonBackClick>
            <Title>Detalhes da Tarefa</Title>
          </div>

          <div className=" cursor-pointer bg-slate-200 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-100">
            <h2 className="text-2xl font-bold text-cyan-900 mb-2 text-center tracking-wide">
              {title}
            </h2>
            <p className=" text-cyan-900/80 text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskPage;
