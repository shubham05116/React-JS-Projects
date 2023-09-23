import React from 'react'
import "../Sidebar/sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="" alt="" width="250px" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, excepturi facere. Illo, aperiam eum quae atque sit pariatur delectus harum.</p>
            </div>
          
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Travel</li>
                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Folow us on</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
  )
}

export default Sidebar
