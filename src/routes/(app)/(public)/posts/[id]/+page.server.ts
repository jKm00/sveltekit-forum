import { fail, type Actions, redirect } from "@sveltejs/kit";

export const actions: Actions = {
  deletePost: async ({ url }) => {
    const id = url.searchParams.get('id')
    if (!id) {
      return fail(400, { message: 'Invalid request' })
    }

    try {
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