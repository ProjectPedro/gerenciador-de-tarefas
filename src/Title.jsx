function Title(props) {
  return (
    <h1 className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 text-3xl text-white font-bold text-center box-border p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {props.children}
    </h1>
  );
}

export default Title;
