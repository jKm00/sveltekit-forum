import { dummyPosts } from '@/lib/server/dummyPosts.js'

export const GET = async ({ params }) => {

  const id = Number(params.id)

  return new Response(JSON.stringify(dummyPosts.find(p => p.id === id)), { status: 200 })
}