import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Blogs = () => {

  const { posts, page, loading } = useContext(AppContext);
  return (
    <div>
      {
        loading ? (<div>loading......</div>) : (
          posts.length === 0 ? (<div>Page not found </div>) : (
            posts.map((post) => {
              return (
                <div>
                  <p>{post.title}</p>
                  <p>{post.author}</p>
                  <p>{post.content}</p>
                  {
                    post.tags.map((tag) => {
                      return <p>{tag}</p>
                    })
                  }
                </div>)
            })
          )
        )
      }

    </div>
  )
}

export default Blogs
