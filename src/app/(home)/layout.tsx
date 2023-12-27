import Footer from '-/components/layout/footer';
import Navbar from '-/components/layout/navbar';
import React, { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
