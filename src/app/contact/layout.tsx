import Footer from "-/components/layout/footer";
import Navbar from "-/components/layout/navbar";
import React, { type PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="py-12">{children}</main>
      <Footer />
    </>
  );
}
