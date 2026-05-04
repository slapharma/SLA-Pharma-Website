"use client";

import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";

type Quadrant = {
  id: string;
  title: string;
  indications: string[];
  /** Visual position in the 2x2 grid */
  position: "tl" | "tr" | "bl" | "br";
  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
};

/* ─────────── Icons (line style, currentColor) — match reference Mind Map 2.png ─────────── */
const iconBase = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Inflammatory — coiled small-intestine loops */
const InflammationIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}>
    <path d="M5 9c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4 4 1.8 4 4-1.8 4-4 4-4-1.8-4-4 4-1.8 4-4-1.8-4-4-4z" />
    <path d="M9 5c2 0 4 1.5 4 4" opacity="0.55" />
    <path d="M9 19c2 0 4-1.5 4-4" opacity="0.55" />
  </svg>
);

/** Colorectal & Oncological — looped awareness ribbon */
const RibbonIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}>
    {/* ribbon loop at top, tails crossing into legs at bottom */}
    <path d="M12 4c-2.5 2.5-4 5-4 7s1 3.5 2.5 5L8 21" />
    <path d="M12 4c2.5 2.5 4 5 4 7s-1 3.5-2.5 5L16 21" />
    <path d="M10.5 16h3" />
  </svg>
);

/** Proctological — perineal/anatomical opposing curves */
const ProctologicalIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}>
    {/* two leaf/petal shapes meeting at center, suggestive of perianal anatomy */}
    <path d="M12 4c-2 1.5-4 4-4 7 0 2.5 1.5 4.5 4 5" />
    <path d="M12 4c2 1.5 4 4 4 7 0 2.5-1.5 4.5-4 5" />
    <path d="M9 19c1 .8 2 1 3 1s2-.2 3-1" />
    <circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/** Functional / Motility — J-shaped stomach with intestine coil below */
const StomachBowelIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}>
    {/* esophagus stub */}
    <path d="M11 3v2" />
    {/* stomach: J-curve */}
    <path d="M11 5c-2.5 0-4 1.6-4 3.5 0 2 1.5 3.2 3.5 3.5" />
    <path d="M11 5c1.5 0 3 .5 3 2 0 1-.5 1.8-1 2.3" />
    {/* small intestine coil below */}
    <path d="M9 13c-1.5 1-1.5 2.5 0 3.5s3-.5 4.5 0 1.5 2.5 0 3.5" />
  </svg>
);

/** Central hub — full GI tract: stomach + small intestine + colon */
const GiTractIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}>
    {/* esophagus */}
    <path d="M13 3v3" />
    {/* stomach (J-curve, hook to lower-right) */}
    <path d="M13 6c-2.5 0-4.5 1.5-4.5 3.8 0 2 1.5 3.2 3.5 3.5" />
    <path d="M13 6c2 0 3.5 1 3.5 2.5 0 1.2-.8 2-1.7 2.4" />
    {/* small intestine coil center-left */}
    <path d="M10 13.5c-2 .8-2 3 0 3.8s3-1 5-.3" />
    {/* large intestine frame around the small */}
    <path d="M6 11c-1 0-1.5 1-1.5 2v6c0 1.2 1 2 2.2 2H17" opacity="0.85" />
    <path d="M17 19c1.2 0 2-.8 2-2v-2" opacity="0.85" />
  </svg>
);

const quadrants: Quadrant[] = [
  {
    id: "inflammatory",
    title: "Inflammatory Conditions",
    indications: ["Crohn's disease", "Ulcerative colitis", "Perianal Crohn's disease"],
    position: "tl",
    Icon: InflammationIcon,
  },
  {
    id: "colorectal",
    title: "Colorectal & Oncological",
    indications: [
      "Sporadic colorectal polyps",
      "Colorectal cancer",
      "Familial Adenomatous Polyposis (FAP)",
    ],
    position: "tr",
    Icon: RibbonIcon,
  },
  {
    id: "proctological",
    title: "Proctological Disorders",
    indications: ["Anal fissures", "Haemorrhoids", "Pilonidal sinus"],
    position: "bl",
    Icon: ProctologicalIcon,
  },
  {
    id: "functional",
    title: "Functional / Motility Disorders",
    indications: ["Irritable bowel syndrome (IBS)", "Chronic constipation"],
    position: "br",
    Icon: StomachBowelIcon,
  },
];

/** Hook: fire the entrance animation only once the component is on screen. */
function useInView<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.25 }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, opts);
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, opts]);

  return { ref, inView };
}

export function MindMap() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto">
      {/* Outer "frame" — soft shadow, primary-tinted border, dotted bg flourishes */}
      <div className="relative rounded-3xl border border-primary/15 bg-white shadow-[0_25px_60px_-25px_rgba(254,82,0,0.25)] overflow-hidden">
        {/* Decorative dot grid bottom-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-24 w-24 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        {/* Decorative dot grid top-left (smaller, lighter) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-3 left-3 h-16 w-16 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-primary) 1px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        {/* Faint orange radial wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary-soft)_0%,transparent_70%)] opacity-60"
        />

        <DesktopMap inView={inView} />
        <MobileList />
      </div>
    </div>
  );
}

/* ─────────── Desktop: 2×2 grid w/ SVG connectors + central GI hub ─────────── */
function DesktopMap({ inView }: { inView: boolean }) {
  return (
    <div className="hidden md:block relative p-10 lg:p-14">
      {/* SVG connectors layer (between center hub and each card corner) */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {/* The lines run from center (50,50) to inner corner of each quadrant */}
        {[
          { x2: 30, y2: 30, delay: 0.1 },
          { x2: 70, y2: 30, delay: 0.2 },
          { x2: 30, y2: 70, delay: 0.3 },
          { x2: 70, y2: 70, delay: 0.4 },
        ].map((line, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={line.x2}
            y2={line.y2}
            stroke="var(--color-primary)"
            strokeOpacity="0.45"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="60"
            style={
              inView
                ? {
                    animation: `drawLine 0.9s ease-out ${line.delay}s both`,
                    // @ts-expect-error -- CSS custom property
                    "--line-length": "60",
                  }
                : { strokeDashoffset: 60, opacity: 0 }
            }
          />
        ))}
      </svg>

      {/* 2x2 grid of quadrant cards */}
      <div className="relative grid grid-cols-2 gap-x-32 gap-y-10">
        {quadrants.map((q, i) => (
          <QuadrantCard key={q.id} q={q} delay={0.35 + i * 0.12} inView={inView} />
        ))}
      </div>

      {/* Central hub (absolutely centered over the grid) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={inView ? { animation: "popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.15s both" } : { opacity: 0 }}
      >
        <CentralHub />
      </div>
    </div>
  );
}

function CentralHub() {
  return (
    <div className="relative">
      {/* Pulsing soft halo */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/15"
        style={{ animation: "pulseSoft 2.6s ease-in-out infinite" }}
      />
      <span
        aria-hidden
        className="absolute -inset-2 rounded-full bg-primary/8"
        style={{ animation: "pulseSoft 2.6s ease-in-out 0.4s infinite" }}
      />
      <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-white border-2 border-primary/40 shadow-md">
        <GiTractIcon className="h-10 w-10 text-primary" />
      </div>
    </div>
  );
}

function QuadrantCard({ q, delay, inView }: { q: Quadrant; delay: number; inView: boolean }) {
  const Icon = q.Icon;
  return (
    <div
      className="group relative rounded-2xl bg-white border border-gray-200 px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
      style={inView ? { animation: `popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}s both` } : { opacity: 0 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-base font-bold text-primary leading-tight">{q.title}</h3>
      </div>
      <ul className="space-y-1.5 pl-1">
        {q.indications.map((ind) => (
          <li key={ind} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
            <span aria-hidden className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary" />
            <span>{ind}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────── Mobile: stacked list (no SVG, no animations on cards) ─────────── */
function MobileList() {
  return (
    <div className="md:hidden p-5 space-y-4">
      <div className="flex flex-col items-center text-center pb-2">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-primary/40 shadow-md mb-2">
          <GiTractIcon className="h-7 w-7 text-primary" />
        </div>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Gastroenterology</p>
      </div>
      {quadrants.map((q) => {
        const Icon = q.Icon;
        return (
          <div
            key={q.id}
            className="rounded-2xl bg-white border border-gray-200 px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-bold text-primary">{q.title}</h3>
            </div>
            <ul className="space-y-1 pl-1">
              {q.indications.map((ind) => (
                <li key={ind} className="flex items-start gap-2 text-sm text-gray-600">
                  <span aria-hidden className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
