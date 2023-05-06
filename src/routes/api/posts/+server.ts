import { dummyPosts } from "@/lib/server/dummyPosts";
import type { Post } from "@/models/Post";

export const GET = async () => {
    return new Response(JSON.stringify(dummyPosts),  { status: 200 })
}