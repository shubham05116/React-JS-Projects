import React, { useState } from 'react';


let next= 1;
const App = () => {
    const [lists, setList] = useState([]);
    const [input, setInput] = useState('');
    const [editChange, setEditChange] = useState('');
    const [editItemId, setEditItemId] = useState(null);

    //Add task logic:
    function changeHandler(e) {
        setInput(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        setList((prev) => [
            ...prev,
            { text: input, id: next++ },
        ]);
        setInput('');
    }


    //Delete Logic:
    function DeleteHandler(id) {
        const newData = lists.filter((list) => list.id !== id);
        setList(newData);
    }

    //Edit logic:
    function editChangeHandler(e) {
        setEditChange(e.target.value);

    }

    function editHandler(id) {
        setEditItemId(id);
        const data = lists.find((list) => list.id === id);
        setEditChange(data.text);
        
    }


    //save edit
    function saveHandler(id) {
        const updatedList = lists.map((list) =>
            list.id === id ? { ...list, text: editChange } : list
        );
        setList(updatedList);
        setEditItemId(null);
    }

    //Cancel logic
    function cancelEdit() {
        setEditItemId(null);
        setEditChange('');
    }


 function completeHandler(id){


 }




    return (
        <div className='flex justify-center items-center flex-col gap-10 '>

            <header className='text-xl font-bold text-white bg-slate-900 p-2 rounded m-10' >
                <h1 className='text-[40px] p-3 '>To-Do List</h1>
            </header>

            <form onSubmit={submitHandler}>
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
                            <div className='flex justify-center items-center m-3 flex-col'>

                                <input
                                    className='border-2 text-xl p-2 m-2 '
                                    type="text"
                                    name="task"
                                    value={editChange}
                                    onChange={editChangeHandler}
                                />
                                <div>
                                    <button className='bg-[#15803d] text-white text-lg font-bold px-4 py-2 mx-3 ' onClick={() => saveHandler(list.id)}>Save</button>
                                    <button className='bg-[#991b1b] text-white text-lg font-bold px-4 py-2 mx-3 ' onClick={cancelEdit}>Cancel</button>
                                </div>
                            </div>

                        ) : (

                            <div className='' >
                            <input 

                            type="checkbox" name="check" 

                            onChange={checkHandler}/>
                               {list.text}

                                    <button className='bg-[#991b1b] text-white text-lg font-bold px-4 py-2 mx-5' onClick={() => DeleteHandler(list.id)}>
                                        Delete
                                    </button>
                                    <button className='bg-[#075985] text-white text-lg font-bold px-4 py-2 m-5' onClick={() => editHandler(list.id)}>Edit</button>
                                    <button className='bg-[#075985] text-white text-lg font-bold px-4 py-2 m-5' onClick={()=>completeHandler(list.id)}>Complete</button>

                            </div>
                        )}
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default App;
