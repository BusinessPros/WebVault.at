import type { CSSProperties } from "react";

import { workTechnologies } from "@/data/site-content";
import { cn } from "@/lib/utils";

type TechLogo = (typeof workTechnologies)[number];

function TechMark({ tech }: { tech: TechLogo }) {
  const style = {
    "--mark-bg": tech.bg,
    "--mark-fg": tech.fg,
  } as CSSProperties;

  if (tech.kind === "github") {
    return (
      <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <svg aria-hidden viewBox="0 0 24 24" className="size-5 fill-current">
          <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 5.91c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
        </svg>
      </span>
    );
  }

  if (tech.kind === "atom") {
    return (
      <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <span className="absolute h-2 w-8 rounded-full border border-current" />
        <span className="absolute h-2 w-8 rotate-60 rounded-full border border-current" />
        <span className="absolute h-2 w-8 -rotate-60 rounded-full border border-current" />
        <span className="size-1.5 rounded-full bg-current" />
      </span>
    );
  }

  if (tech.kind === "waves") {
    return (
      <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <span className="h-2 w-7 rounded-full border-2 border-current border-b-transparent border-l-transparent" />
        <span className="-ml-3 mt-2 h-2 w-7 rounded-full border-2 border-current border-b-transparent border-l-transparent" />
      </span>
    );
  }

  if (tech.kind === "hex") {
    return (
      <span style={style} className="tech-mark bg-transparent text-[var(--mark-fg)]">
        <span className="grid size-9 place-items-center bg-[var(--mark-bg)] text-sm font-black [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]">
          {tech.short}
        </span>
      </span>
    );
  }

  if (tech.kind === "shield") {
    return (
      <span style={style} className="tech-mark bg-transparent text-[var(--mark-fg)]">
        <span className="grid size-9 place-items-center bg-[var(--mark-bg)] text-lg font-black [clip-path:polygon(10%_0,90%_0,82%_82%,50%_100%,18%_82%)]">
          {tech.short}
        </span>
      </span>
    );
  }

  if (tech.kind === "triad") {
    return (
      <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <span className="size-6 rotate-45 border border-current" />
        <span className="absolute size-3 translate-x-1 translate-y-1 rotate-45 border border-current" />
      </span>
    );
  }

  if (tech.kind === "motion") {
    return (
      <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <span className="h-7 w-6 [clip-path:polygon(0_0,100%_0,55%_50%,100%_50%,0_100%,45%_50%,0_50%)] bg-current" />
      </span>
    );
  }

  if (tech.kind === "antigravity") {
    return (
      <span style={style} className="tech-mark border border-black/10 bg-[var(--mark-bg)] text-[var(--mark-fg)]">
        <span className="grid size-7 place-items-center rounded-full text-[0.62rem] font-black">
          <span className="absolute h-1 w-6 -translate-y-2 rounded-full bg-[#4285f4]" />
          <span className="absolute h-1 w-6 translate-y-2 rounded-full bg-[#34a853]" />
          <span className="absolute h-6 w-1 -translate-x-2 rounded-full bg-[#fbbc05]" />
          <span className="absolute h-6 w-1 translate-x-2 rounded-full bg-[#ea4335]" />
          {tech.short}
        </span>
      </span>
    );
  }

  return (
    <span style={style} className="tech-mark bg-[var(--mark-bg)] text-[var(--mark-fg)]">
      <span className="font-black">{tech.short}</span>
    </span>
  );
}

export function InfiniteTextMarquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} aria-hidden={group === 1} className="marquee-group gap-10 pr-10">
            {items.map((item, index) => (
              <span key={`${item}-${group}-${index}`} className="flex items-center gap-10">
                {item}
                <span className="size-1 rounded-full bg-vault-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechLogoMarquee({ className }: { className?: string }) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="marquee-track marquee-track-slow">
        {[0, 1].map((group) => (
          <div key={group} aria-hidden={group === 1} className="marquee-group gap-3 pr-3">
            {workTechnologies.map((tech) => (
              <div key={`${tech.name}-${group}`} className="tech-pill">
                <TechMark tech={tech} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
