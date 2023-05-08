export const load = async ({ fetch, params }) => {
  
  const id = Number(params.id)

  const fetchPost = async (id: number) => {
    const result = await fetch(`/api/posts/${id}`)
    const post = await result.json()
    return post;
  }

  return {
    post: fetchPost(id)
  }

};
