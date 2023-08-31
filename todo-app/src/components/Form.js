import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'

const Form = () => {
    const { setformData, formData  } = useContext(AppContext);

    function submitHandler(e) {
        e.preventDefault();
        //   console.log(formData)

        setformData(formData);

    }

    function changeHandler(e){
        setformData(e.target.value)
             
      }
  

    return (

        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" name="task" onChange={changeHandler} />
                <button >Add Task</button>
                <br /><br />
            </form>

        </div>
    )
}

export default Form
