import React from "react";

const TodoListItem = ({ todo, onRemovePressed }) => (
  <div className="todo-item-container">
    <h2>{todo.text}</h2>
    <div className="button-container">
      <button className="completed-button">Mark as completed</button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
