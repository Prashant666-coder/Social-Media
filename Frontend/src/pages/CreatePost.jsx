import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return

    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('image', image)

    try {
      await axios.post('http://localhost:3000/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/feed')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <section className="create-post-section">
        <h1>Create Post</h1>
        
        <form onSubmit={handleSubmit}>
            <input 
              type="file" 
              name='image' 
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <input 
              type="text" 
              name='caption' 
              placeholder='Enter Caption' 
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost