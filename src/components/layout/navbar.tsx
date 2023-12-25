import React from 'react';
import { Button } from '-/components/ui/button';
import Link from 'next/link';
import NavbarDropdown from './navbar/dropdown';

const menus = [
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Tools',
    url: '/tools',
  },
];

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 h-full w-full bg-background/90 py-4 backdrop-blur'>
      <div className='container flex w-full items-center justify-between'>
        <Button
          variant='link'
          className='pl-0 text-lg font-black text-foreground'
        >
          Afief<span className='md:hidden'>&apos;s</span>
          <span className='hidden pl-1 md:inline-block'>Abdurrahman</span>
        </Button>

        <div className='flex items-center gap-4'>
          {menus.map((menu) => (
            <Button
              variant='link'
              className='hidden text-foreground md:flex'
              asChild
            >
              <Link href={menu.url}>{menu.name}</Link>
            </Button>
          ))}

          <Button
            variant='secondary'
            asChild
          >
            <Link
              href='/contact'
              className='hidden md:flex'
            >
              Contact me!
            </Link>
          </Button>

          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
}