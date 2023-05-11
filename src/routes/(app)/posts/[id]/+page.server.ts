import { fail, type Actions, redirect, error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const getPost = async () => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(params.id)
      },
      include: {
        user: true,
        likes: true,
        comment: true
      }
    })
    if (!post) {
      throw error(404, 'Post not found')
    }
    return post
  }

  return {
    post: getPost()
  }
};

export const actions: Actions = {
  likePost: async ({ url, locals }) => {
    const postId = url.searchParams.get('id')
    if (!postId) {
      fail(404, { message: 'Post not found' })
    }

    // Make sure user is authenticated
    const { user, session } = await locals.auth.validateUser()
    if (!(user && session)) {
      throw redirect(302, `/login?redirectTo=/posts/${postId}`)
    }

    try {
      // Check if user has liked post
      const likedPost = await prisma.likes.findFirst({
        where: {
          userId: user.userId,
          postId: Number(postId)
        }
      })

      if (!likedPost) {
        // Like post
        await prisma.likes.create({
          data: {
            userId: user.userId,
            postId: Number(postId)
          }
        })
      } else {
        // Unlike post
        await prisma.likes.delete({
          where: {
            id: likedPost.id
          }
        })
      }
    } catch(err) {
      fail(500, { message: 'Could not like post' })
    }

    throw redirect(302, `/posts/${postId}`)
  },
  deletePost: async ({ url, locals }) => {
    // Check if any user is authrozied
    const { user, session } = await locals.auth.validateUser()
    if (!(user && session)) {
      throw redirect(302, '/')
    }

    // Get the id from the search params
    const id = url.searchParams.get('id')
    if (!id) {
      return fail(400, { message: 'Invalid request' })
    }

    try {
      // Try and find the post with the id
      const post = await prisma.post.findUniqueOrThrow({
        where: {
          id: Number(id)
        }
      })

      // Make sure the authenticated user owns this post
      if (post.authUserId !== user.userId) {
        throw error(403, 'Not authorized')
      }

      // Delete the post
      await prisma.post.delete({
        where: { 
          id: Number(id) 
        }
      })
    } catch(error) {
      console.error(error)
      return fail(500, { message: 'Something went wrong deleting the article' })
    }

    throw redirect(303, '/')
  }
};