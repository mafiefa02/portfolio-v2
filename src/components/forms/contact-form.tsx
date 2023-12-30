'use client';

import { z } from 'zod';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from './contact/schema';

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
import { Button } from '-/components/ui/button';
import { useForm } from 'react-hook-form';
import { SendHorizonalIcon } from 'lucide-react';

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
  }

  return (
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
                  autoFocus
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
          className='flex w-full items-center gap-2'
        >
          Send the message <SendHorizonalIcon size={16} />
        </Button>
      </form>
    </Form>
  );
}
