import axios from "axios";

const postsAPI = axios.create({
  baseURL: 'http://localhost:3000/posts'
})

export const getPosts = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const res = await postsAPI.get('/')
  return res
}