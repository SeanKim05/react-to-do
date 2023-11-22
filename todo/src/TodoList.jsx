import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteToDo }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          toggleTodo={toggleTodo}
          deleteToDo={deleteToDo}
          key={todo.id}
          //   id={todo.id}
          //   completed={todo.completed}
          //   title={todo.title}
        />
      ))}
    </ul>
  );
}
