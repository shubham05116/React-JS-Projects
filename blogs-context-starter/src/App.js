import React, { useContext, useEffect } from 'react'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import Header from './components/Header'
import { AppContext } from './Context/AppContext'

const App = () => {

  const {fetchData} = useContext(AppContext);

  useEffect(()=>{
fetchData();
  },[])

  return (
    <div>
    
      <Header />
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
