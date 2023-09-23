import React from 'react'
import "../topbar/topbar.css"

const Topbar = () => {
    return (
        <div className='top'>
            <div className="topLeft">

                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>    
                
                 </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        Home
                    </li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWfM5_SRZjIzbbwXqHOveHPBbknrIo0ASjoXS2pM4Mwn4flbSh80XYJmgBsn-QXrDqR4&usqp=CAU" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar
