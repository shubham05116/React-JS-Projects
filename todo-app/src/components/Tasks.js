import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Task from './Task'

const Tasks = () => {
    const{tasks , setTasks} = useContext(AppContext)
  return (
    <div>
    {
        tasks.map((task)=>(
            <Task task={task}/>
        ))
    }
      
    </div>
  )
}

export default Tasks
