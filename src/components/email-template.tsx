import React from 'react';
import { z } from 'zod';
import { contactSchema } from './forms/contact/schema';

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
