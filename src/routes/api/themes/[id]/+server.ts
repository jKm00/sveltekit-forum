import { themeOptions } from '@/lib/server/themeOptions.js'

export const GET = async ({ params }) => {
  const id = parseInt(params.id);

  return new Response(JSON.stringify(themeOptions[id]))  
}