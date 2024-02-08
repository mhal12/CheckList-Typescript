import { useState } from "react";
import "./App.css";
import { Todo } from "./components/model";
import InputField from "./components/InputField";
function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo }]);
  };
  return (
    <div className="App">
      <span className="heading">Task</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
