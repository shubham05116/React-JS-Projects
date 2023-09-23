import React, { useContext } from 'react'
import { GrAdd } from 'react-icons/gr';
import { AppContext } from '../Context/AppContext';

let next =1;
const AddTask = () => {
  const{input , setInput ,setList } = useContext(AppContext);
  // Add task logic:
  function changeHandler(e) {
  
   setInput(e.target.value);
}

 //submit task:
 function submitHandler(e) {
  e.preventDefault();
  setList((prev) => [
    { text: input, id: next++, complete: false },
      ...prev,
  ]);
  setInput('');
}

  return (
    <div>
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
      
    </div>
  )
}

export default AddTask
