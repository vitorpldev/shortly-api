import { z } from 'zod';

export const UpdateUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
});

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;
