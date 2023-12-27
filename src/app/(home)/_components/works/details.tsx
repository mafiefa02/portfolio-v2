import { Badge } from '-/components/ui/badge';
import { Button } from '-/components/ui/button';
import TextH2 from '-/components/ui/typography/h2';
import TextP from '-/components/ui/typography/p';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function WorkDetails({
  workTitle,
  workType,
  workTime,
  stacks,
  description,
  previewLink,
}: {
  workTitle: string;
  workType: string;
  workTime: string;
  stacks: string[];
  description: string;
  previewLink?: string;
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left'>
      <TextH2 className='-mb-2 text-balance border-none pb-0 text-foreground md:text-4xl'>
        {workTitle}
      </TextH2>

      <TextP className='text-md text-balance font-light [&:not(:first-child)]:mt-0'>
        {workType} · {workTime}
      </TextP>

      <div className='text-md flex flex-row flex-wrap items-center justify-center gap-2'>
        {stacks.map((stack) => (
          <Badge variant='secondary'>{stack}</Badge>
        ))}
      </div>

      <TextP className='hidden max-w-[36rem] lg:inline [&:not(:first-child)]:mt-0'>
        {description}
      </TextP>

      <div className='flex w-full flex-row flex-wrap items-center gap-4 xs:flex-nowrap'>
        {previewLink ? (
          <Button
            variant='secondary'
            className='flex w-full flex-row items-center gap-2'
            asChild
          >
            <Link
              href={previewLink}
              target='_blank'
            >
              Preview <ExternalLinkIcon size={16} />
            </Link>
          </Button>
        ) : null}

        <Button className='w-full'>More details</Button>
      </div>
    </div>
  );
}
