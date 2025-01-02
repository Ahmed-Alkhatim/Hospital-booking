import localFont from "next/font/local";

import "./globals.css";
import { LanguageProvider } from "./LangContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "مستشفى أطباء بورتسودان",
  description: "نظام الحجز الإلكتروني",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      {/* <head>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
  </head> */}

      <body
      // ${geistSans.variable} ${geistMono.variable}
        className={` antialiased bg-[#E5E5E5]`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
