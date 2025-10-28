import { useState } from "react";
import Tasks from "./Tasks.jsx";
import AddTask from "./AddTask.jsx";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}


export default App;