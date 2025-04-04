import type { Metadata } from "next";
import { Archivo} from 'next/font/google';
import "./globals.css";

const archivo = Archivo({
  display:'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: "aoc.ca",
  description: "Created with Frontend Tribe",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>
          {children}
        </div>
      </body>
    </html>
  );
}
