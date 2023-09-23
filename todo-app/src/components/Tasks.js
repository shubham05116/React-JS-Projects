import React, { useContext } from 'react'
import Task from './Task'
import { AppContext } from '../Context/AppContext';

const Cards = () => {
  
  const {lists} = useContext(AppContext);

  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-10'>
                {lists.map((list) => (
                    <Task key={list.id} list={list}/>
                ))}
            </div>
    </div>
  )
}

export default Cards
