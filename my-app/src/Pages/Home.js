import React from 'react'
import "../Pages/Home.css"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Posts from "../components/Post/Posts"
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
