import React, { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New em</label>
        <input
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
          id="item"
        />
        <button className="btn">Ad</button>
      </div>
    </form>
  );
}
