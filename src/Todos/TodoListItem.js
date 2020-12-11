import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletedPressed }) => (
  <div className="todo-item-container">
    <h2>{todo.text}</h2>
    <div className="button-container">
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
      {todo.isCompleted ? null : (
        <button
          className="completed-button"
          onClick={() => onMarkAsCompletedPressed(todo.text)}
        >
          Mark as completed
        </button>
      )}
    </div>
  </div>
);

export default TodoListItem;
