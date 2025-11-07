function TaskSlotButton({task, ...props}) {
  return (
    <button
      {...props}
      className={`bg-stone-400 text-left text-white p-2 rounded-md w-full ${
        task.isCompleted && "line-through"
      } `}
    >
        {task.title}
    </button>
          
  );
}

export default TaskSlotButton;
