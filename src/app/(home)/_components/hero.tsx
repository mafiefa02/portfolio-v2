import { Button } from '-/components/ui/button';
import TextH1 from '-/components/ui/typography/h1';
import TextH4 from '-/components/ui/typography/h4';
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

import Greetings from './hero/greetings';
import HobbyIcons from './hero/hobby-icons';
import ProfileColor from './hero/profile-color';
import ProfileImage from './hero/profile-image';

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-x-16 md:flex-row'>
      <div className='pointer-events-none relative w-full max-w-72 overflow-clip md:rounded-b-full lg:h-96 lg:max-w-96'>
        <HobbyIcons />

        <ProfileImage />

        <ProfileColor />
      </div>

      <div className='z-50 -mt-8 flex w-full flex-col gap-2 bg-background py-4 text-center md:mt-0 md:w-max md:text-left'>
        <Greetings />

        <TextH1 className='bg-gradient-to-r from-indigo-600 to-primary bg-clip-text text-transparent'>
          Afief Abdurrahman
        </TextH1>

        <TextH4 className='hidden text-balance font-light lg:inline-block'>
          a software engineer / machine learning engineer
        </TextH4>

        <TextH4 className='text-balance font-light lg:hidden'>
          a physics stud and an swe / mle
        </TextH4>

        <div className='mt-4 flex w-full items-center justify-center gap-4'>
          <Button
            className='hidden w-full items-center gap-2 md:flex'
            variant='secondary'
            asChild
          >
            <Link
              prefetch={false}
              href={'/CV_ATS_SoftwareEngineering-Websites.pdf'}
            >
              <DownloadIcon size={16} /> Download CV
            </Link>
          </Button>

          <Button
            className='w-full xs:max-w-96'
            asChild
          >
            <Link href={'/contact'}>Contact me!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
