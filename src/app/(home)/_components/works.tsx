import cinemaMockup from "-/../public/images/mockups/mockup-cinema-desktop.png";
import isMockup from "-/../public/images/mockups/mockup-is-desktop.png";
import santribMockup from "-/../public/images/mockups/mockup-santrib-desktop.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "-/components/ui/carousel";
import TextH1 from "-/components/ui/typography/h1";
import TextH4 from "-/components/ui/typography/h4";
import { cn } from "-/lib/utils";
import Link from "next/link";
import React from "react";

import WorkDetails from "./works/details";
import WorkThumbnail from "./works/thumbnail";

const works = [
  {
    title: "IS HIMAFI ITB",
    stacks: ["Next.js", "tRPC", "Tailwind", "Prisma", "MySQL"],
    time: "Sept 2023",
    type: "Fullstack Web Application",
    description: `A learning management system website used by more than 200 people. Built for the event Intellektuelle Schule HIMAFI ITB. Participants can track and submit their works (including assignments, grades, etc.), and the organizing committee can manage the materials needed for the participant's learning activity.`,
    link: "https://ishimafiitb.com/",
    image: isMockup,
  },
  {
    title: "Aplikasi Santri Tertib",
    stacks: ["Next.js", "tRPC", "Tailwind", "Prisma", "MySQL"],
    time: "July 2023",
    type: "Fullstack Web Application",
    description: `A website for managing student's achievements and violation of school rules' history. The school staff (or school admin) is able to create, edit, and delete records of a student's achievement or penalty using the website, with the support to upload image as a proof. Every school staff member, students, and student's parents can see the records on the website.`,
    link: undefined,
    image: santribMockup,
  },
  {
    title: "XVI Cinema",
    stacks: ["Next.js", "tRPC", "Tailwind", "Prisma", "PostgreSQL"],
    time: "July 2023",
    type: "Fullstack Web Application",
    description: `A website used to book movie tickets in a cinema. Built as a requirement to participate in COMPFEST Universitas Indonesia's Software Engineering Academy 2023.`,
    link: "https://movie-ticket-self-eta.vercel.app/",
    image: cinemaMockup,
  },
];

export default function Works() {
  return (
    <div className="container">
      <TextH1 className="text-balance text-center">Some of my works 🧑🏻‍🍳</TextH1>

      <TextH4 className="mt-4 text-balance text-center text-lg font-normal md:text-xl">
        If you would like to see my academic projects,{" "}
        <Link
          href="/academics"
          className="cursor-pointer font-bold hover:underline"
        >
          click here
        </Link>
        !
      </TextH4>

      <Carousel className="flex flex-row gap-8 lg:hidden">
        <CarouselContent>
          {works.map((work, i) => (
            <CarouselItem
              key={i}
              className="relative mt-16 flex flex-col items-center justify-center gap-8 overflow-visible"
            >
              <WorkThumbnail
                itemNumber={i + 1}
                totalItem={works.length}
                imageAlt={work.title}
                image={work.image}
              />

              <WorkDetails
                previewLink={work.link}
                stacks={work.stacks}
                workTime={work.time}
                workTitle={work.title}
                workType={work.type}
                description={work.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <div className="hidden flex-row gap-8 lg:flex lg:flex-col lg:gap-16">
        {works.map((work, i) => (
          <div
            key={i}
            className={cn(
              "relative mt-16 flex flex-col items-center justify-center gap-8 lg:gap-12",
              (i + 1) % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row",
            )}
          >
            <WorkThumbnail
              itemNumber={i + 1}
              totalItem={works.length}
              imageAlt={work.title}
              image={work.image}
            />

            <WorkDetails
              previewLink={work.link}
              stacks={work.stacks}
              workTime={work.time}
              workTitle={work.title}
              workType={work.type}
              description={work.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
