import { z } from 'zod'

export const newUserSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email must be a valid email address' }),
  username: z
    .string({ required_error: 'Username is requrired' })
    .min(1, 'Username is required')
    .max(64, 'Username must be less than 64 characters')
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .regex(new RegExp("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,}$"), 'One uppercase, one lower, one special character, and a number required'),
  passwordConfirm: z
    .string({ required_error: 'Password confirm is required' })
    .regex(new RegExp("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,}$"), 'One uppercase, one lower, one special character, and a number required')
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