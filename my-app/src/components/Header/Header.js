import React from 'react'
import "../Header/header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitle'>
                    <span  className='headerTitleSm'>React & Node</span>
                    <span className='headerTitleLg'>Blog</span>
            </div>


            <img className='headerImg' src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/how_to_start_a_travel_blog_-_article_image.jpg" alt="" />

        </div>
    )
}

export default Header
