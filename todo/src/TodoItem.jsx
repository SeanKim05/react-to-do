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
          onChange={(e) => toggleTodo(id, e.target.check)}
        />
        {title}
      </label>
      <button onClick={() => deleteToDo(id)} className="btn btn-dangerddsa">
        Delete
      </button>
    </li>
  );
}
