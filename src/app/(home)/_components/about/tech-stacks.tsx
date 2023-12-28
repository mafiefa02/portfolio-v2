import reactIcon from '-/../public/images/1174949_js_react js_logo_react_react native_icon.png';
import figma from '-/../public/images/figma-logo.png';
import goIcon from '-/../public/images/Go-Logo_Blue.png';
import nextIcon from '-/../public/images/next-js.svg';
import pythonIcon from '-/../public/images/python-logo-only.svg';
import redisIcon from '-/../public/images/redis-cube-red_white-rgb.png';
import reduxIcon from '-/../public/images/redux.svg';
import tailwindcss from '-/../public/images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';
import tensorflow from '-/../public/images/Tensorflow_logo.svg';
import trpcIcon from '-/../public/images/trpc-logo.svg';
import typescript from '-/../public/images/ts-logo-512.png';
import { Separator } from '-/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '-/components/ui/tooltip';
import TextH2 from '-/components/ui/typography/h2';
import Image, { type StaticImageData } from 'next/image';
import React from 'react';

export default function TechStacks() {
  return (
    <>
      <TextH2 className='mb-0 mt-12 border-none pb-0'>Tech Stacksss 🛠️</TextH2>

      <Separator className='my-2 bg-primary text-primary' />

      <TooltipProvider>
        <div className='flex w-full flex-wrap items-center gap-4'>
          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={figma}
                  width={24}
                  height={24}
                  alt='figma'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Figma</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={typescript}
                  width={32}
                  height={32}
                  alt='typescript'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Typescript</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={reactIcon}
                  width={36}
                  height={36}
                  alt='react'
                />
              </div>
              <TooltipContent>React.js</TooltipContent>
            </TooltipTrigger>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={tailwindcss as StaticImageData}
                  width={32}
                  height={32}
                  alt='tailwindcss'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Tailwind CSS</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='group flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={nextIcon as StaticImageData}
                  width={32}
                  height={32}
                  alt='nextjs'
                  className='dark:invert dark:group-hover:invert-0'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Next.js</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='group flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={reduxIcon as StaticImageData}
                  width={32}
                  height={32}
                  alt='redux'
                  className='dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Redux</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={trpcIcon as StaticImageData}
                  width={32}
                  height={32}
                  alt='trpc'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>tRPC</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={redisIcon}
                  width={32}
                  height={32}
                  alt='redis'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Redis</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={goIcon}
                  width={48}
                  height={48}
                  alt='go'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Golang</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={pythonIcon as StaticImageData}
                  width={32}
                  height={32}
                  alt='python'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Python</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center overflow-clip rounded-[1rem] border border-primary bg-secondary transition-colors ease-out hover:bg-white'>
                <Image
                  src={tensorflow as StaticImageData}
                  width={32}
                  height={32}
                  alt='tensorflow'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>Tensor Flow</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </>
  );
}
