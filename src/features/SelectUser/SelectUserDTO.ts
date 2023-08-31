import { z } from 'zod';

export const SelectUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SelectUserDTO = z.infer<typeof SelectUserSchema>;
