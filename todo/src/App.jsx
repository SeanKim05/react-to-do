import React, { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  //state 값은 배열 객체 뿐만 아니라 함수도 사용가능
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Item");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    //setState의  param 값은 이전에 저장된 state 값
    setTodos((currentTodos) => {
      console.log(currentTodos);
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: true },
      ];
    });
  }

  function toggleTodo(id, completed) {
    //completed = e.target.checked
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id) {
    //삭제된 데이터의 아이디 값 외 데이터를 필터
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
    </>
  );
}
