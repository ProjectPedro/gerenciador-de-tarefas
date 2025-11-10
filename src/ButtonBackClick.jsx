function ButtonBackClick(props) {
  return (
    <button
      {...props}
      className="bg-slate-200 text-cyan-900 rounded-md absolute left-0 top-0 -bottom-0 hover:bg-slate-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
    />
  );
}

export default ButtonBackClick;
