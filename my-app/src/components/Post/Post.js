import React from 'react'
import "../Post/Post.css"

const Post = () => {
  return (
    <div className='post'>
    
      <img className='postImg' src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1h7e84.img?w=768&h=432&m=6&x=836&y=129&s=109&d=109" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className='postDate'>! hour ago</span>
        <p className="postDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dicta fuga quibusdam sequi voluptate sit recusandae, omnis repellat, enim nihil illo possimus accusantium obcaecati praesentium eum sed exercitationem provident quisquam! Ab recusandae ducimus, autem itaque cumque laborum asperiores temporibus dolores?
        </p>
      </div>
    

    </div>
  )
}

export default Post