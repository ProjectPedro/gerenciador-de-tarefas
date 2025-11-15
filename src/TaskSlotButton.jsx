import { CheckIcon } from "lucide-react";
function TaskSlotButton({task, ...props}) {
  return (
    <button
      {...props}
      className={`text-left text-white p-2 rounded-md w-full ${
        task.isCompleted ? "bg-green-500" : "bg-stone-400"
      }`}
    >
      {task.isCompleted && <CheckIcon className="inline mr-2" />}
        {task.title}
    </button>
          
  );
}

export default TaskSlotButton;