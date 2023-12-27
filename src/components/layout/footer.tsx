import { format } from 'date-fns';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export default function Footer() {
  const date = new Date();

  return (
    <footer className='z-[99] w-full bg-background/10 py-8 backdrop-blur-sm lg:fixed lg:bottom-0 lg:py-2'>
      <TooltipProvider>
        <div className='container flex flex-col-reverse items-center justify-center gap-y-2 lg:flex-row'>
          <Tooltip>
            <p className='w-full text-center text-sm opacity-50 lg:text-left'>
              Last updated at{' '}
              <TooltipTrigger>{format(date, 'dd/MM/yyyy')}</TooltipTrigger>
            </p>
            <TooltipContent>Formatted in 'day/month/year'</TooltipContent>
          </Tooltip>

          <div className='flex w-full flex-row items-center justify-center gap-4 lg:justify-end'>
            <Button
              variant='link'
              size='icon'
              className='text-foreground hover:text-primary'
              asChild
            >
              <Link
                target='_blank'
                href='https://github.com/mafiefa02'
              >
                <GithubIcon size={24} />
              </Link>
            </Button>

            <Button
              variant='link'
              size='icon'
              className='text-foreground hover:text-primary'
              asChild
            >
              <Link
                target='_blank'
                href='https://linkedin.com/in/mafiefa/'
              >
                <LinkedinIcon size={24} />
              </Link>
            </Button>

            <Button
              variant='link'
              size='icon'
              className='text-foreground hover:text-primary'
              asChild
            >
              <Link
                target='_blank'
                href='https://instagram.com/mafiefa/'
              >
                <InstagramIcon size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </TooltipProvider>
    </footer>
  );
}
