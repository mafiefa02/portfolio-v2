import React from "react";
import { type z } from "zod";
import { type contactSchema } from "./forms/contact/schema";

export default function EmailTemplate(props: z.infer<typeof contactSchema>) {
  return (
    <div>
      <p>{props.message}</p>
      <br />
      <p>
        Name: <strong>{props.name}</strong>
      </p>
      <p>
        Sender email: <strong>{props.email}</strong>
      </p>
    </div>
  );
}
