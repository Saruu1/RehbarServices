"use client";

import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center px-4 sm:px-0">
      {/* Glow background */}
      <div className="absolute -z-10 hidden h-56 w-56 rounded-full bg-orange-400/30 blur-3xl transition-all duration-500 group-hover:bg-orange-400/50 sm:block md:h-72 md:w-72" />

      <div className="group relative mt-10 w-full max-w-sm sm:mt-8 sm:max-w-md">
        {/* Glow layer */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-orange-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Main card */}
        <div className="relative w-full rounded-2xl border bg-white p-3 shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-2xl sm:p-4 sm:group-hover:rotate-1">
          {/* Fake browser header */}
          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <Image
            src="/services/hero-visual.jpg"
            alt="Software dashboard preview"
            width={500}
            height={300}
            className="h-auto w-full rounded-lg"
            priority
          />
        </div>

        {/* Left info card */}
        <div className="absolute -left-6 top-14 scale-90 transition-all duration-300 hover:translate-x-1 sm:-left-10 sm:top-16 sm:scale-95 md:-left-16 md:top-20 md:scale-100">
          <div className="rounded-xl border bg-white px-3 py-2 text-xs shadow-lg sm:px-4 sm:py-3 sm:text-sm">
            <p className="text-muted-foreground">Project Success</p>
            <p className="text-base font-semibold text-slate-900 sm:text-lg">
              98%
            </p>
          </div>
        </div>

        {/* Right info card */}
        <div className="absolute -right-6 bottom-14 scale-90 transition-all duration-300 hover:translate-y-1 sm:-right-10 sm:bottom-16 sm:scale-95 md:-right-16 md:bottom-20 md:scale-100">
          <div className="rounded-xl border bg-white px-3 py-2 text-xs shadow-lg sm:px-4 sm:py-3 sm:text-sm">
            <p className="text-muted-foreground">Architecture</p>
            <p className="text-sm font-medium text-slate-900 sm:text-base">
              Built for Scale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}