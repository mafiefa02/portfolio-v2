import TextH1 from "-/components/ui/typography/h1";
import TextH4 from "-/components/ui/typography/h4";
import React from "react";

import Education from "./about/education";
import Interests from "./about/interests";
import TechStacks from "./about/tech-stacks";

export default function About() {
  return (
    <div className="container mx-auto md:w-full">
      <TextH1 className="text-balance md:text-center">
        A little bit about me 😁
      </TextH1>

      <TextH4 className="mt-4 text-balance text-lg font-normal md:text-center md:text-xl">
        I like games and eating a lot. I also have a dream to travel all around
        the world!
      </TextH4>

      <div className="mt-12 flex flex-col items-start justify-center gap-12 md:flex-row md:gap-48">
        <Education />

        <Interests />
      </div>

      <div className="mt-12 flex w-full flex-col gap-2">
        <TechStacks />
      </div>
    </div>
  );
}
