function Title(props) {
  return (
    <h1 className="cursor-pointer bg-slate-200 text-3xl text-cyan-950 font-bold text-center box-border p-4 rounded-xl shadow">
      {props.children}
    </h1>
  );
}

export default Title;
