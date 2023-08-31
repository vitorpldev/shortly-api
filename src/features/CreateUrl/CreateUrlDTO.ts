import { z } from 'zod';

export const CreateUrlSchema = z.object({
  id: z.string().uuid(),
  origin: z.string().url(),
});

export type CreateUrlDTO = z.infer<typeof CreateUrlSchema>;
