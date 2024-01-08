import "-/styles/globals.css";

import { TRPCReactProvider } from "-/trpc/react";
import { DM_Sans } from "next/font/google";
import { cookies } from "next/headers";

import { Toaster } from "-/components/ui/toaster";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Afief Abdurrahman",
  description: "A personal website made with love by Afief Abdurrahman",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm.className} dark`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
