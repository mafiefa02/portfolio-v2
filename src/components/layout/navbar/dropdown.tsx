'use client';

import { useState } from 'react';
import { Button } from '-/components/ui/button';
import { ChevronDown, Newspaper, Wrench, PhoneCall } from 'lucide-react';
import { Separator } from '-/components/ui/separator';
import AnimatedDiv from '-/components/ui/animated/div';

function DropdownSheet() {
  return (
    <AnimatedDiv
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.15 }}
      className='container absolute left-0 top-[72px] z-50 flex w-full flex-col gap-2 bg-background/90 py-4 text-foreground backdrop-blur md:hidden'
    >
      <Separator className='-mt-4 mb-4' />

      <h1 className='text-xl font-black'>What are you looking for?</h1>

      <div className='flex flex-row items-center gap-12'>
        <Button
          variant='link'
          className='flex flex-row items-center gap-2 p-0 text-foreground'
        >
          <PhoneCall size={16} /> Contact
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
          } pl-1 transition-transform ease-in-out`}
          size={16}
        />
      </Button>

      {open ? <DropdownSheet /> : null}
    </>
  );
}
