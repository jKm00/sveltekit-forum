import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params, url }) => {
  const { user, session } = await locals.auth.validateUser();

  if (!(user && session)) {
    throw redirect(302, `/login?redirectTo=${url.pathname}`)
  }

  if (user.username !== params.username) {
    throw redirect(302, '/')
  }
};