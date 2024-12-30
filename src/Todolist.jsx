import React, { useState } from 'react';

function Todolist({ item, index, deleteListItem, editListItem, toggleDone, isEditing, setEditingIndex }) {
  const [editText, setEditText] = useState(item.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      editListItem(index, editText);
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <li className={`list-item ${item.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleEdit} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleDone(index)}>{item.text}</span>
          <span className="icons">
            <i
              className="fa-solid fa-pen icon-edit"
              onClick={() => setEditingIndex(index)}
              title="Edit Task"
            ></i>
            <i
              className="fa-solid fa-trash icon-delete"
              onClick={() => deleteListItem(index)}
              title="Delete Task"
            ></i>
          </span>
        </>
      )}
    </li>
  );
}

export default Todolist;
