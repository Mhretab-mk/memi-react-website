import axios from 'axios'

export interface Post {
  id: number
  userId: number
  title: string
  description: string
  imageUrl: string
}

// newPost has title, description, userId, and image file
export const addPost = async (newPost: {
  userId: number
  title: string
  description: string
  image: File
}): Promise<Post> => {
  const formData = new FormData()
  formData.append('userId', newPost.userId.toString())
  formData.append('title', newPost.title)
  formData.append('description', newPost.description)
  formData.append('image', newPost.image)

  const response = await axios.post('/posts', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}
