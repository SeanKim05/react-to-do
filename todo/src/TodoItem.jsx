import React from "react";

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteToDo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteToDo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}