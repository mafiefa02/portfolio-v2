import selfPhoto from '-/../public/images/P1010153.png';
import Image from 'next/image';
import React from 'react';

export default function ProfileImage() {
  return (
    <>
      <Image
        className='contrast-95 relative top-8 z-50 brightness-125 grayscale'
        src={selfPhoto}
        alt='self photo'
        priority
      />
      <Image
        className='absolute left-4 top-16 opacity-80 blur-sm grayscale'
        src={selfPhoto}
        alt='self photo'
        quality={1}
      />
      <Image
        className='absolute right-8 top-8 opacity-80 blur-sm grayscale'
        src={selfPhoto}
        alt='self photo'
        quality={1}
      />
    </>
  );
}
