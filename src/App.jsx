import { useState } from 'react';
import './App.css';
import Todoinput from './Todoinput';
import Todolist from './Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the item being edited

  let addList = (inputText) => {
    if (inputText.trim() !== '' && !listTodo.includes(inputText.trim())) {
      setListTodo([...listTodo, { text: inputText.trim(), isDone: false }]); // Add `isDone` for "Mark as Done"
    } else if (listTodo.some(item => item.text === inputText.trim())) {
      alert('Task already exists in the list!');
    }
  };

  const deleteListItem = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1);
    setListTodo([...newlistTodo]);
  };

  const editListItem = (index, newText) => {
    const updatedList = [...listTodo];
    updatedList[index].text = newText.trim(); // Update the text
    setListTodo(updatedList);
    setEditingIndex(null); // Reset editing state
  };

  const toggleDone = (index) => {
    const updatedList = [...listTodo];
    updatedList[index].isDone = !updatedList[index].isDone; // Toggle the `isDone` flag
    setListTodo(updatedList);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <h1>ToDo List</h1>
          <Todoinput addList={addList} />
          <ul>
            {listTodo.map((listItem, i) => (
              <Todolist
                item={listItem}
                index={i}
                key={i}
                deleteListItem={deleteListItem}
                editListItem={editListItem}
                toggleDone={toggleDone}
                isEditing={editingIndex === i}
                setEditingIndex={setEditingIndex}
              />
            ))}
          </ul>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 | Designed by Vaishnavi Nalawade</p>
      </footer>
    </>
  );
}

export default App;
