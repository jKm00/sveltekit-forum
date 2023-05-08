import { fail, type Actions, redirect } from "@sveltejs/kit";
import { prisma } from "@/lib/server/prisma";
import type { Post } from "@prisma/client";

export const actions: Actions = {
  createPost: async ({ request }) => {
    const { title, content } = Object.fromEntries(await request.formData()) as { title: string, content: string }

    let post: Post
    try {
      post = await prisma.post.create({
        data: {
          title,
          content,
          published: true
        }
      })
    } catch (err) {
      console.error(err)
      return fail(500, { message: 'Could not create the post' })
    }

    if (post) {
      throw redirect(303, `/posts/${post.id}`)
    } else {
      return fail(500, { message: 'Failed to create post'} )
    }
  }
};