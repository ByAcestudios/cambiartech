import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const studioFeixen = localFont({
  src: [
    {
      path: '../../public/fonts/StudioFeixen-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/StudioFeixen-Headline.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-studio-feixen'
})

export const metadata = {
  title: "Cambiar Technologies",
  description: "transforming your creators with technology",
  icons: {
    icon: '/favicon.ico', // or '/icon.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${studioFeixen.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
