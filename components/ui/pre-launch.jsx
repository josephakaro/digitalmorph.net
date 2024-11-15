import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function PreLaunch() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-red-900 to-red-700 dark:from-red-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        CREATE. INNOVATE. GROW.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Join us on our journey to redefine software development. 
        Be the first to access cutting-edge solutions tailored for your business growth. 
        Subscribe now and stay ahead!
      </p>
    </BackgroundLines>)
  );
}