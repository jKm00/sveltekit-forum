export const load = async ({ fetch }) => {
  
  const fetchPosts = async () => {
    const result = await fetch('/api/posts')
    const posts = await result.json()
    return posts
  }

  return {
    posts: fetchPosts()
  }

};