import React, { useState } from 'react';
import './App.css';
import { MdSave } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';

let next = 1;
const App = () => {
    const [lists, setList] = useState([]);
    const [input, setInput] = useState('');
    const [editChange, setEditChange] = useState('');
    const [editItemId, setEditItemId] = useState(null);
    const [editingItemId, setEditingItemId] = useState(null); // New state for tracking editing item ID

    // Add task logic:
    function changeHandler(e) {
        if (input.length !== 20) setInput(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        setList((prev) => [
            ...prev,
            { text: input, id: next++, complete: false },
        ]);
        setInput('');
    }

    // Delete Logic:
    function DeleteHandler(id) {
        const newData = lists.filter((list) => list.id !== id);
        setList(newData);
    }

    // Edit logic:
    function editChangeHandler(e) {
        if (editChange.length !== 20) setEditChange(e.target.value);
    }

    function editHandler(id) {
        if (editingItemId !== null) {
            // If there is already an item being edited, return without doing anything
            return;
        }
        setEditingItemId(id);
        setEditItemId(id);
        const data = lists.find((list) => list.id === id);
        setEditChange(data.text);
    }

    // Save edit
    function saveHandler(id) {
        const updatedList = lists.map((list) =>
            list.id === id ? { ...list, text: editChange} : list
        );
        setList(updatedList);
        setEditItemId(null);
        setEditingItemId(null); // Reset editing item ID
    }

    // Cancel logic
    function cancelEdit() {
        setEditItemId(null);
        setEditChange('');
        setEditingItemId(null); // Reset editing item ID
    }

    // Complete logic
    function completeHandler(id) {
        const updated = lists.map((list) =>
            list.id === id ? { ...list, complete: !list.complete } : list
        );
        setList(updated);
    }

    return (
        <div className='flex items-center flex-col gap-10 w-[11/12] h-screen '>
            <header className='text-xl font-bold text-white bg-slate-900 p-2 rounded m-10'>
                <h1 className='text-[40px] p-3 '>To-Do List</h1>
            </header>

            <form onSubmit={submitHandler}>
                <input
                    className='border-2 text-xl p-2 m-2'
                    type='text'
                    name='task'
                    value={input}
                    onChange={changeHandler}
                />
                <button className='bg-[#2bd550] text-lg rounded font-bold px-6 py-4' type='submit'>
                    <GrAdd className='text-white' />
                </button>
            </form>

            <div className='flex flex-col justify-center items-center gap-10'>
                {lists.map((list) => (
                    <li key={list.id} className={list.complete ? 'completed ' : 'list-none'}>
                        {editItemId === list.id ? (
                            <div className='flex justify-center items-center m-3 '>
                                <input
                                    className='border-2 text-xl w-[40vw] h-[10vh] m-2 '
                                    type='text'
                                    name='task'
                                    value={editChange}
                                    onChange={editChangeHandler}
                                />
                                <div>
                                    <button
                                        className='bg-[#27d667] rounded text-white text-lg font-bold px-4 py-2 mx-3'
                                        onClick={() => saveHandler(list.id)}
                                    >
                                        <MdSave />
                                    </button>
                                    <button
                                        className='bg-[#f42c2c] rounded text-white text-lg font-bold px-4 py-2 mx-3'
                                        onClick={cancelEdit}
                                    >
                                        <ImCancelCircle />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-wrap min-w-[400px]'>
                                <div className='flex flex-wrap border-2 m-2 text-center rounded pl-2 w-[50vw] h-[10vh] text-2xl '>
                                    {list.text}
                                </div>
                                <div>
                                    <button
                                        className='bg-[#ea2a2a] text-white text-lg font-bold rounded px-4 py-2 mx-5'
                                        onClick={() => DeleteHandler(list.id)}
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                    <button
                                        className={`bg-[#075985] text-white text-lg rounded font-bold px-4 py-2 m-5 ${editingItemId === list.id ? 'pointer-events-none' : ''}`}
                                        onClick={() => editHandler(list.id)}
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        className='bg-[#e31baa] text-white rounded text-lg font-bold px-4 py-2 m-5'
                                        onClick={() => completeHandler(list.id)}
                                    >
                                        <AiOutlineCheckSquare />
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default App;
