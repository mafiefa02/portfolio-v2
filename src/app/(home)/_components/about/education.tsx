import itb from '-/../public/images/logo_itb_1024.png';
import { Separator } from '-/components/ui/separator';
import TextH2 from '-/components/ui/typography/h2';
import TextH3 from '-/components/ui/typography/h3';
import TextH4 from '-/components/ui/typography/h4';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Education() {
  return (
    <div className='flex w-full flex-col gap-2 md:justify-start'>
      <TextH2 className='mb-0 border-none pb-0'>Education 🎓</TextH2>

      <Separator className='my-2 bg-primary text-primary' />

      <div className='flex w-full items-center gap-8'>
        <div className='hidden h-auto w-[108px] overflow-clip rounded-full bg-white xs:inline-block md:hidden xl:inline-block'>
          <Image
            width={108}
            height={108}
            src={itb}
            alt='logo itb'
          />
        </div>

        <div className='flex w-full flex-col gap-2 md:justify-start'>
          <Link
            href={'https://itb.ac.id/'}
            target='_blank'
            className='underline-offset-2 hover:underline'
          >
            <TextH3
              className={`border-none after:text-xs after:content-['_↗']`}
            >
              Bandung Institute of Technology
            </TextH3>
          </Link>

          <TextH4 className='font-normal md:text-lg lg:text-xl'>
            Bachelor of Science (Physics)
          </TextH4>

          <p className='font-light'>July 2023 - 2025 (expected)</p>
        </div>
      </div>
    </div>
  );
}
