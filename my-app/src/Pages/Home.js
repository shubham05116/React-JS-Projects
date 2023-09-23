import React from 'react'
import "../Pages/Home.css"
import Header from '../Header/Header'
import Posts from '../Post/Posts'
import Sidebar from '../Sidebar/Sidebar'
const Home = () => {
  return (
    <>
  <Header/>
        <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  
  )
}

export default Home
