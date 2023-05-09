import { fail, type Actions, redirect, error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const getPost = async () => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(params.id)
      },
      include: {
        user: true
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