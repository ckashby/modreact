import React, { useState, useEffect } from "react";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h2>{todo.text}</h2>
    <div className="button-container">
      <button className="completed-button">Mark as completed</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
