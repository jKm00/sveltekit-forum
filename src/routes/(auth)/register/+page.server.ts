import type { Actions } from "@sveltejs/kit";
import { z } from 'zod'

const passwordSchema = z.string()
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character required")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character required")
  .regex(new RegExp(".*\\d.*"), "One number required")
  .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character required"
    ) 
  .min(8, "Must be at least 8 characters in length")

const registerSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is requried")
    .email({ message: "Email must be a valid email address" }),
  username: z
    .string({ required_error: "Username is requrired" })
    .min(1, "Username is required")
    .max(64, "Username must be less than 64 characters")
    .trim(),
  password: passwordSchema,
  passwordConfirm: passwordSchema
}).superRefine(({ passwordConfirm, password }, ctx) => {
  if (passwordConfirm !== password) {
    ctx.addIssue({
      code: 'custom',
      message: 'Password and confirm password must macth',
      path: ['password']
    })
    ctx.addIssue({
      code: 'custom',
      message: 'Password and confirm password must macth',
      path: ['passwordConfirm']
    })
  }
})

export const actions: Actions = {
  register: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData())

    const result = registerSchema.safeParse(formData)

    if (!result.success) {
      const { fieldErrors: errors } = result.error.flatten()
      const { password, passwordConfirm, ...rest } = formData

      return {
        data: rest,
        errors
      }
    } else {
      // TODO: Register user
      console.log(result)
    }
  }
};