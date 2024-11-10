import Header from "@/components/customized/Header";
import "./globals.css";

// Vercel Component
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Digital Morph",
  description: "Create. Innovate. Grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col col-span-1 max-h-screen h-screen w-full sm:px-4 sm:py-4 p-2`}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
