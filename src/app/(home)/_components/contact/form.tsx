'use client';

import { Button } from '-/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '-/components/ui/form';
import { Input } from '-/components/ui/input';
import { Textarea } from '-/components/ui/textarea';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

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

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
  }

  return (
    <div className='flex w-full flex-col justify-start'>
      <Form {...form}>
        <form
          className='space-y-8'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='name'>What should I call you?</FormLabel>
                <FormControl>
                  <Input
                    id='name'
                    autoComplete='name'
                    className='w-full'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email'>Your e-mail address</FormLabel>
                <FormControl>
                  <Input
                    id='email'
                    autoComplete='email'
                    className='w-full'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This will be used as a way for me to contact you for a follow
                  up.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leave me a message!</FormLabel>
                <FormControl>
                  <Textarea
                    className='w-full'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='w-full'
          >
            Send the message
          </Button>
        </form>
      </Form>

      <p className='mt-4 text-center text-sm text-muted-foreground lg:text-right'>
        or contact me via{' '}
        <Link
          className='text-foreground'
          href={'mailto:mafiefa.business@gmail.com'}
        >
          e-mail
        </Link>
      </p>
    </div>
  );
}
