import React , {useState} from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id : "1" ,
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcbEDOj4Lt6nrxGaVFEwEArZQ3BZSPZFeVs8XRsg7CiCOh2OnmZ4MaF_&s=10',
            caption : 'AI'
        }
    ])

    return (

        <section className="feed-section">
{
  posts.length > 0 ? (
    posts.map((post) => (
      <div key={post._id} className="post-card">
        <img src={post.image} alt={post.caption} />
        <p>{post.caption}</p>
      </div>
    ))
  ) : (
    <h1>No posts available</h1>
  )
}       

        </section>
  )
}

export default Feed