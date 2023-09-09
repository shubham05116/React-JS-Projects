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
        <div className='flex justify-center items-center flex-col gap-10 '>
            <header className='text-xl font-bold text-white bg-slate-900 p-2 rounded m-10' >
                <h1 className='text-[40px] p-3 '>To-Do List</h1>
            </header>
            <form action="" onSubmit={submitHandler}>
                <input
                    className=' border-2 text-xl p-2 m-2'
                    type="text"
                    name="task"
                    value={input}
                    onChange={changeHandler}
                />
                <button className='bg-[#15803d] text-white text-lg font-bold px-4 py-2' type="submit">Add Task</button>
            </form>
            <ul >
                {lists.map((list) => (
                    <li key={list.id} >
                        {editItemId === list.id ? (
                            <div>
                                <input
                                    className='border-2 text-xl p-2 m-2 '
                                    type="text"
                                    name="task"
                                    value={editChange}
                                    onChange={editchangeHandler}
                                />

                                <button className='bg-[#15803d] text-white text-lg font-bold px-4 py-2 mx-3 ' onClick={() => saveHandler(list.id)}>Save</button>
                            </div>
                        ) : (
                            <div className='flex flex-col flex-wrap ' >
                                <div className='text-center text-white text-lg p-2 bg-[#171717]'> {list.text}</div>
                                <div>
                                    <button className='bg-[#991b1b] text-white text-lg font-bold px-4 py-2 mx-5' onClick={() => DeleteHandler(list.id)}>
                                        Delete
                                    </button>
                                    <button className='bg-[#075985] text-white text-lg font-bold px-4 py-2 m-5' onClick={() => editHandler(list.id)}>Edit</button>

                                </div>

                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
