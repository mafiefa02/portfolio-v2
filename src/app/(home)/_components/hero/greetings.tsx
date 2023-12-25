'use client';

import TextH4 from '-/components/ui/typography/h4';
import React from 'react';

function GetTimeOfDay(): string {
  const date = new Date();
  const hour = date.getHours();

  if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 6)) {
    return 'evening';
  } else if (hour > 6 && hour <= 12) {
    return 'morning';
  } else {
    return 'afternoon';
  }
}

export default function Greetings() {
  return <TextH4 className='font-light'>Good {GetTimeOfDay()}! 👋🏻 I am</TextH4>;
}
