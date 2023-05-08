import { prisma } from '@/lib/server/prisma.js'

export const GET = async ({ params }) => {

  const id = Number(params.id)

  try {
    const post = await prisma.post.findFirst({
      where: { id: id }
    })

    return new Response(JSON.stringify(post), { status: 200 })

  }  catch (err) {
    console.error(err)
    return new Response(JSON.stringify(`Could not find post with id: ${id}`), { status: 404 })
  }
}