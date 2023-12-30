'use client';

import { z } from 'zod';
import React, { useState } from 'react';
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
import { api } from '-/trpc/react';
import { useToast } from '-/components/ui/use-toast';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const mutation = api.email.send.useMutation();

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);

    mutation.mutate(values, {
      onSettled: () => setLoading(false),
      onError: () =>
        toast({
          title: 'Failed to send message!',
          description: 'Please try again after a while.',
          variant: 'destructive',
        }),
      onSuccess: () => {
        form.reset();
        return toast({
          title: 'Message sent!',
          description: 'Thanks a lot! Please wait for a follow up from me 😁',
        });
      },
    });

    return;
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
          disabled={loading}
        >
          {loading ? (
            'Sending message, please wait.'
          ) : (
            <>
              Send the message <SendHorizonalIcon size={16} />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
