function Input(props) {
  return (
    <input
      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-puprle-500 focus:border-transparent transition-all duration-200"
      {...props}
    />
  );
}

export default Input;
