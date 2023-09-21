import React, { useContext } from 'react'
import { MdSave } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { AppContext } from '../Context/AppContext';

const Task = ({ list }) => {
  const { deleteHandler, editItemId, editingItemId, editChange, setEditChange, editHandler, saveHandler, completeHandler, cancelEditHandler } = useContext(AppContext);
  // Edit logic:
  function editChangeHandler(e) {
   setEditChange(e.target.value);
  }

  return (
    <div className='w-[600px] m-3 p-5'>
      <li key={list.id} className={list.complete ? 'completed ' : 'list-none'}>
        {editItemId === list.id ? (
          <div className='flex justify-center items-center'>
            <input
              className='border-2 text-xl w-[40vw] h-[10vh] m-2 '
              type='text'
              name='task'
              value={editChange}
              onChange={editChangeHandler}
            />
            <div className='flex'>
              <button
                className='  bg-[#27d667] rounded text-white text-lg font-bold px-4 py-2 mx-3 lg: p-4 m-3 '
                onClick={() => saveHandler(list.id)}
              >
                <MdSave />
              </button>
              <button
                className='bg-[#f42c2c] rounded text-white text-lg font-bold px-4 py-2 mx-3 lg: p-4 m-3 '
                onClick={cancelEditHandler}
              >
                <ImCancelCircle />
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-wrap justify-center min-w-[400px] m-5'>
            <div className='flex flex-wrap  text-center rounded pl-2 text-2xl '>
              {list.text}
            </div>
            <div>
              <button
                className='bg-[#ea2a2a] text-white text-lg font-bold rounded px-4 py-2 ml-5 '
                onClick={() => deleteHandler(list.id)}
              >
                <AiOutlineDelete />
              </button>
              <button
                className={`bg-[#075985] text-white text-lg rounded font-bold px-4 py-2 ml-5 ${editingItemId === list.id ? 'pointer-events-none' : ''}`}
                onClick={() => editHandler(list.id)}
              >
                <FiEdit />
              </button>
              <button
                className='bg-[#e31baa] text-white rounded text-lg font-bold px-4 py-2 ml-5'
                onClick={() => completeHandler(list.id)}
              >
                <AiOutlineCheckSquare />
              </button>
            </div>
          </div>
        )}
      </li>

    </div>
  )
}

export default Task
