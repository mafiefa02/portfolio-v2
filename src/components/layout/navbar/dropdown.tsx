'use client';

import AnimatedDiv from '-/components/ui/animated/div';
import { Button } from '-/components/ui/button';
import { Separator } from '-/components/ui/separator';
import {
  ChevronDown,
  HelpCircle,
  Newspaper,
  PhoneCall,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function DropdownSheet({ open }: { open: boolean }) {
  const animationVariants = {
    show: {
      opacity: 1,
      y: 0,
      display: 'block',
    },
    hide: {
      opacity: 0,
      y: -10,
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <AnimatedDiv
      initial={'hide'}
      variants={animationVariants}
      animate={open ? 'show' : 'hide'}
      transition={{ duration: 0.15 }}
      className='container absolute left-0 top-[72px] z-50 flex w-full flex-col gap-2 bg-background/90 py-4 text-foreground backdrop-blur md:hidden'
    >
      <Separator className='-mt-4 mb-4' />

      <h1 className='font-black xs:text-xl'>What are you looking for?</h1>

      <div className='flex w-full flex-row flex-wrap items-center gap-x-12'>
        <Button
          variant='link'
          className='flex flex-row items-center gap-2 p-0 text-foreground'
          asChild
        >
          <Link href={'/contact'}>
            <PhoneCall size={16} /> Contact
          </Link>
        </Button>

        <Button
          variant='link'
          className='flex flex-row items-center gap-2 p-0 text-foreground'
        >
          <Newspaper size={16} /> Blog
        </Button>

        <Button
          variant='link'
          className='flex flex-row items-center gap-2 p-0 text-foreground'
        >
          <Wrench size={16} /> Tools
        </Button>

        <Button
          variant='link'
          className='flex flex-row items-center gap-2 p-0 text-foreground'
        >
          <HelpCircle size={16} /> About
        </Button>
      </div>
    </AnimatedDiv>
  );
}

export default function NavbarDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant='ghost'
        className='gap-2 pl-6 pr-5 md:hidden'
      >
        Menu{' '}
        <ChevronDown
          className={`${
            open ? 'rotate-180' : 'rotate-0'
          } transition-transform ease-in-out`}
          size={16}
        />
      </Button>

      <DropdownSheet open={open} />
    </>
  );
}
