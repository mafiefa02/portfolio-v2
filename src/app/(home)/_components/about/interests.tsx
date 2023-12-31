import { Separator } from "-/components/ui/separator";
import TextH2 from "-/components/ui/typography/h2";
import TextUl from "-/components/ui/typography/ul";
import React from "react";

export default function Interests() {
  return (
    <div className="flex w-full flex-col gap-2 md:justify-start">
      <TextH2 className="mb-0 border-none pb-0">Interests 💡</TextH2>

      <Separator className="my-2 bg-primary text-primary" />

      <TextUl className="my-0 text-xl">
        <li>Software engineering</li>
        <li>Machine learning</li>
        <li>Games, foods, and travelling!</li>
      </TextUl>
    </div>
  );
}
