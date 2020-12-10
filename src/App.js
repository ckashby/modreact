import "./App.css";
import TodoList from "./Todos/TodoList";

function App() {
  const title = "Todo List";
  // const todos = [{ text: "One" }, { text: "Two" }];
  return (
    <div className="App">
      <h1>{title}</h1>
      <TodoList />
    </div>
  );
}

export default App;
