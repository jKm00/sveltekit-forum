import { fail } from "@sveltejs/kit";

export const load = async () => {
  return {
    posts: await prisma.post.findMany({
      where: {
        published: true
      },
      include: {
        user: true
      }
    })
  }
};