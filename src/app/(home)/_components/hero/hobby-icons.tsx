import { AtomIcon, Gamepad2Icon, MapIcon, UtensilsIcon } from 'lucide-react';
import React from 'react';

export default function HobbyIcons() {
  return (
    <>
      <AtomIcon
        className='absolute left-4 top-32 opacity-60'
        size={48}
      />

      <UtensilsIcon
        className='absolute left-12 top-8 z-10 rotate-12 opacity-60'
        size={48}
      />

      <Gamepad2Icon
        className='absolute right-16 top-4 z-10 opacity-60'
        size={48}
      />

      <MapIcon
        className='absolute right-2 top-36 z-10 opacity-60'
        size={48}
      />
    </>
  );
}
