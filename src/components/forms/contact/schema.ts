import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please write a minimum of 2 characters.' }),
  email: z
    .string({
      required_error:
        'Please fill in this field, so I can provide a follow up.',
    })
    .email(),
  message: z
    .string({ required_error: 'Please leave a message.' })
    .min(1, { message: 'Please leave a message.' }),
});

export { contactSchema };
