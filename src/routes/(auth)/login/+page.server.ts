import { auth } from '@/lib/server/lucia.js';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(1, 'Username is required')
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .trim()
})

export const load = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (session) {
    throw redirect(302, '/')
  }
};

export const actions = {
  default: async ({ request, locals, url }) => {
    const formData = Object.fromEntries(await request.formData())

    // Validate form
    const result = loginSchema.safeParse(formData)

    if (!result.success) {
      const { fieldErrors: errors } = result.error.flatten()
      const { password, ...rest } = formData

      return {
        data: rest,
        errors
      }
    }

    // Try to login user
    try {
      const { username, password } = formData as Record<string, string>

      const key = await auth.useKey("username", username, password)
      const session = await auth.createSession(key.userId);
      locals.auth.setSession(session)
    } catch (err) {
      console.error(err)
      return fail(400, { message: 'Fail to authenticate user' })
    }

    // If user was redirected to login, redirect back to the previous page
    const redirectTo = url.searchParams.get('redirectTo')
    if (redirectTo) {
      throw redirect(302, redirectTo)
    }

    // Otherwise redirect to home page
    throw redirect(302, '/')
  }
};