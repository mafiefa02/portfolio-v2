import { Button } from "-/components/ui/button";
import TextH1 from "-/components/ui/typography/h1";
import TextP from "-/components/ui/typography/p";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import ContactField from "./contact/field";

export default function Contact() {
  return (
    <div className="container flex flex-col items-start gap-16 lg:flex-row lg:gap-24">
      <div className="flex w-full flex-col gap-4 text-balance text-center lg:gap-2 lg:text-left">
        <TextH1>Let&apos;s talk! 🤩</TextH1>

        <TextP>
          Other than whatever listed above, I have many other experiences either
          related or not related to SWE-ing and/or MLE-ing. Yes, I really like
          to explore things.
        </TextP>

        <div className="mt-2 flex w-full flex-row flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:mt-4 lg:justify-start">
          <Button
            variant="secondary"
            className="flex flex-row items-center gap-2 lg:w-full"
            asChild
          >
            <Link
              prefetch={false}
              href={
                "https://file-afief.toscamedia.net/CV_ATS_SoftwareEngineering-Websites.pdf"
              }
            >
              <DownloadIcon size={16} /> Maybe download my CV?
            </Link>
          </Button>

          <Button className="lg:w-full" asChild>
            <Link href={"/about"}>More about me</Link>
          </Button>
        </div>
      </div>

      <ContactField />
    </div>
  );
}
