import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
  const session = await locals.auth.validate()
  if (!session) throw redirect(302, `/login?redirectTo=${url.pathname}`)
};