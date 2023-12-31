import { z } from "zod";

const loginSchema = z.object({
  username: z.string({ required_error: "Please enter your username." }),
  password: z.string({ required_error: "Please enter your password." }),
});

export { loginSchema };
