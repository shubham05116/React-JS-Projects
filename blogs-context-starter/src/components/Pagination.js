import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const{page ,handleChange ,totalPages} = useContext(AppContext);
  return (
    <div>
    {
      page>1 && <button onClick={() => handleChange(page-1)}>
        Previous
      </button>
      
    }
    {
      page<totalPages && <button onClick={()=>handleChange(page+1)}>Next</button>
    }
      
      <p>{page} of {totalPages}</p>
    </div>
  )
}

export default Pagination
