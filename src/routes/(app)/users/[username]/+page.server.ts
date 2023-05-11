export const load = async ({ params }) => {

  const username = params.username

  const fetchUser = async () => {
    try {
      return await prisma.authUser.findFirst({
        where: {
          username
        }
      })
    } catch (err) {
      return null
    }
  }

  const fetchUserPosts = async () => {
    try {
      return await prisma.post.findMany({
        where: {
          user: {
            username
          }
        },
        include: {
          likes: true
        }
      })
    } catch (err) {
      return []
    }
  }

  return {
    author: fetchUser(),
    userPosts: fetchUserPosts()
  }

};