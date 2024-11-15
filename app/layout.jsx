import "./globals.css";
import { PreLaunch } from "@/components/ui/pre-launch";


const Status = process.env.NEXT_PUBLIC_LOCAL

export const metadata = {
  title: "Digital Morph",
  description: "Our Philosophy, 'Create. Innovate. Grow.', embodies that mission to shape digital transformations and deliver solutions that blend creativity and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {Status === "true" ? (<PreLaunch />) : (
        {children}
        )}
      </body>
    </html>
  );
}
