import ContactForm from '-/components/forms/contact-form';
import { Button } from '-/components/ui/button';
import { Separator } from '-/components/ui/separator';
import { MailIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import TextH1 from '-/components/ui/typography/h1';
import Link from 'next/link';
import React from 'react';

const contacts = [
  {
    name: 'E-mail',
    link: 'mailto:mafiefa.business@gmail.com',
    icon: <MailIcon size={16} />,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/mafiefa',
    icon: <InstagramIcon size={16} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/mafiefa',
    icon: <LinkedinIcon size={16} />,
  },
];

export default function ContactPage() {
  return (
    <div className='container flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <TextH1>
          Let&apos;s have a talk! <span className='hidden sm:inline'>😁👋🏻</span>
        </TextH1>

        <p className='text-xl font-light'>
          Interested in working together? Please do let me know about it!
        </p>
      </div>

      <Separator />

      <div className='flex w-full gap-16'>
        <div className='relative flex w-full flex-col gap-8 lg:w-4/5'>
          <ContactForm />

          <div className='mt-4 flex flex-col items-center justify-center gap-4 lg:hidden'>
            <p>or contact me in</p>

            <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
              {contacts.map((contact) => (
                <Button
                  variant='link'
                  className='flex flex-row items-center gap-2 p-0 text-foreground'
                  asChild
                >
                  <Link
                    href={contact.link}
                    target='_blank'
                  >
                    {contact.icon} {contact.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className='hidden w-1/5 flex-col gap-4 lg:flex'>
          <p className='text-lg'>Also find me on</p>

          {contacts.map((contact) => (
            <Button
              variant='secondary'
              className='flex flex-row items-center gap-2'
              asChild
            >
              <Link
                href={contact.link}
                target='_blank'
              >
                {contact.icon} {contact.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
