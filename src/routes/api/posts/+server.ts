import { prisma } from "@/lib/server/prisma";

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany({
            where: { published: true }
        });
        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify('Faild to load posts'), { status: 500 })
    }
}