import { auth } from "@/lib/server/lucia";
import { redirect, type Actions, fail } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms/server';
import { newUserSchema } from "@/lib/validations/newUserSchema.js";

export const load = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (session) {
    throw redirect(302, '/')
  }

  const form = await superValidate(newUserSchema)
  return {
    form
  }
};

export const actions: Actions = {
  register: async ({ request }) => {
    const form = await superValidate(request, newUserSchema)

    if (!form.valid) {
       return fail(400, {
        form
       })
    }

    // Try to create user
    try {
      const { email, username, password } = form.data as Record<string, string>

      await auth.createUser({
        primaryKey: {
          providerId: 'username',
          providerUserId: username,
          password
        },
        attributes: {
          email,
          username
        }
      })
    } catch (err) {
      console.error(err)
      return fail(400, { message: 'Could not register user' })
    }

    throw redirect(302, '/login')
  }
};