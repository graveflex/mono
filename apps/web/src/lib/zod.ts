import { object, string } from 'zod';

// Types
const email = string({ required_error: 'Email is required' })
  .min(1, 'Email is required')
  .email('Invalid email');

const password = string({ required_error: 'Password is required' })
  .min(1, 'Password is required')
  .min(8, 'Password must be more than 8 characters');

// Schemas
export const signInSchema = object({
  email,
  password
});

export const passwordSchema = object({
  password
});
