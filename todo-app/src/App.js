import React, { useState } from 'react';

const App = () => {
  const [lists, setList] = useState([]);
  const [input, setInput] = useState('');
  const [editChange, setEditChange] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  function changeHandler(e) {
    setInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setList((prev) => [
      ...prev,
      { text: input, id: Math.random().toString() },
    ]);
    setInput('');
  }

  function DeleteHandler(id) {
    const newData = lists.filter((list) => list.id !== id);
    setList(newData);
  }

  function editHandler(id) {
    setEditItemId(id);
    const data = lists.find((list) => list.id === id);
    setEditChange(data.text);
  }

  function editchangeHandler(e) {
    setEditChange(e.target.value);
  }

  function saveHandler(id) {
    const updatedList = lists.map((item) =>
      item.id === id ? { ...item, text: editChange } : item
    );
    setList(updatedList);
    setEditItemId(null);
  }
  

  return (
    <div className='bg-black'>
      <header className='bg-black'>
        <h1>To-Do List</h1>
      </header>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          value={input}
          onChange={changeHandler}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {editItemId === list.id ? (
              <div>
                <input
                  type="text"
                  name="task"
                  value={editChange}
                  onChange={editchangeHandler}
                />
                <button onClick={() => saveHandler(list.id)}>Save</button>
              </div>
            ) : (
              <div>
                {list.text}
                <button onClick={() => DeleteHandler(list.id)}>
                  Delete
                </button>
                <button onClick={() => editHandler(list.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
