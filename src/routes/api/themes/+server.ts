import { themeOptions } from "@/lib/server/themeOptions"

export const GET = async () => {
  return new Response(JSON.stringify(themeOptions), { status: 200 })
}