import axios from "axios";

const postsAPI = axios.create({
  baseURL: 'http://localhost:3000/posts'
})

export const getPosts = async () => {
  const res = await postsAPI.get('/')
  return res
}
export const likeOrDislike = async (data:any) => {
  const {id, like} = data
  return await postsAPI.patch(`/${id}`, {
    like
  })
}
export const getFavorites = async () => {
  return await postsAPI.get('?like=true')
}

export const getDislikes = async () => {
  return await postsAPI.get('?like=false')
}