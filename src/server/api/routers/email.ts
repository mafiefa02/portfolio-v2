import { createTRPCRouter, publicProcedure } from "-/server/api/trpc";
import { contactSchema } from "-/components/forms/contact/schema";
import { Resend } from "resend";
import EmailTemplate from "-/components/email-template";
import { TRPCError } from "@trpc/server";

export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "portfolio@resend.dev",
      to: ["mafiefa.business@gmail.com"],
      subject: `[Personal Portfolio] ${input.name}`,
      react: EmailTemplate(input),
    });

    if (error)
      throw new TRPCError({
        message: error.message,
        code: "INTERNAL_SERVER_ERROR",
        cause: error.name,
      });

    return data;
  }),
});
