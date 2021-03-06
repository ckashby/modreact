import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTodo } from "./actions";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkAsCompletedPressed,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkAsCompletedPressed={onMarkAsCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletedPressed: (text) => dispatch(markAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
