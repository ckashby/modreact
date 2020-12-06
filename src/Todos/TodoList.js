import React from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos = [] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem key={todo.text} todo={todo} />
    ))}
  </div>
);

export default TodoList;
