import type { Metadata } from "next";
import { VT323, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

// Fuente local personalizada
const bauhausPixel = localFont({
  src: "./fonts/bauhaus-93-pixel.otf",
  variable: "--font-bauhaus-pixel",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Duvet05 | Software Developer",
  description: "Building the future one commit at a time. From blockchain wizardry to healthcare interoperability. Award-winning developer and certified problem-solver extraordinaire.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Duvet05 | Software Developer",
    description: "Building the future one commit at a time.",
    url: "https://duvet05-dev.vercel.app",
    siteName: "Duvet05 Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Duvet05 - Gonzalo Galvez Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duvet05 | Software Developer",
    description: "Building the future one commit at a time. From blockchain wizardry to healthcare interoperability. Award-winning developer and certified problem-solver extraordinaire.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${bebasNeue.variable} ${bauhausPixel.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
