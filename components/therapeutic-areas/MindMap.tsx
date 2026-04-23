"use client";

import { useState, useId } from "react";
import type { SVGProps } from "react";

type Satellite = {
  id: string;
  title: string;
  indications: string[];
  /** 0 = top, 72 = upper-right, 144 = lower-right, 216 = lower-left, 288 = upper-left */
  angle: number;
  Icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const iconBase = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const FlameIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><path d="M8.5 14.5A3.5 3.5 0 0 0 12 18a3.5 3.5 0 0 0 3.5-3.5c0-1.5-.5-2-1.5-3.5S13 9 13 7c0 0-3.5 2-3.5 5.5 0 1-.5 1.5-1 2z"/><path d="M12 2c-.5 3 1 5 2 6 2 2 3 4 3 6 0 3-2 5-5 5s-5-2-5-5c0-2 1-4 3-6 1-1 2-3 2-6z"/></svg>
);
const DnaIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><path d="M4 4c4 0 4 4 8 4s4-4 8-4"/><path d="M4 20c4 0 4-4 8-4s4 4 8 4"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="16" x2="18" y2="16"/></svg>
);
const ActivityIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><polyline points="3 12 7 12 10 6 14 18 17 12 21 12"/></svg>
);
const PuzzleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><path d="M14 4h5a1 1 0 0 1 1 1v5h-1a2 2 0 1 0 0 4h1v5a1 1 0 0 1-1 1h-5v-1a2 2 0 1 0-4 0v1H5a1 1 0 0 1-1-1v-5h1a2 2 0 1 0 0-4H4V5a1 1 0 0 1 1-1h5v1a2 2 0 1 0 4 0V4z"/></svg>
);
const TargetIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
);
const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><polyline points="20 6 9 17 4 12"/></svg>
);
const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...iconBase} {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

const satellites: Satellite[] = [
  {
    id: "inflammatory",
    title: "Inflammatory Conditions",
    indications: ["Crohn's disease", "Ulcerative colitis", "Perianal Crohn's disease"],
    angle: 0,
    Icon: FlameIcon,
  },
  {
    id: "colorectal",
    title: "Colorectal & Oncological",
    indications: [
      "Sporadic colorectal polyps",
      "Colorectal cancer",
      "Familial Adenomatous Polyposis (FAP)",
    ],
    angle: 72,
    Icon: DnaIcon,
  },
  {
    id: "functional",
    title: "Functional / Motility Disorders",
    indications: ["Irritable bowel syndrome (IBS)", "Chronic constipation"],
    angle: 144,
    Icon: ActivityIcon,
  },
  {
    id: "rare",
    title: "Rare GI Disorders",
    indications: ["Short bowel syndrome", "Eosinophilic Gastro diseases"],
    angle: 216,
    Icon: PuzzleIcon,
  },
  {
    id: "proctological",
    title: "Proctological Disorders",
    indications: ["Anal fissures", "Haemorrhoids", "Pilonidal sinus"],
    angle: 288,
    Icon: TargetIcon,
  },
];

export function MindMap() {
  const [selectedId, setSelectedId] = useState<string>(satellites[0].id);
  const selected = satellites.find((s) => s.id === selectedId) ?? satellites[0];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <DesktopMap selectedId={selectedId} onSelect={setSelectedId} />
      <MobileMap selectedId={selectedId} onSelect={setSelectedId} />
      <DetailsPanel selected={selected} />
    </div>
  );
}

function DesktopMap({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const size = 620;
  const cx = size / 2;
  const cy = size / 2;
  const orbit = 230;
  const hubR = 84;
  const satR = 68;
  const gradId = useId();

  return (
    <div
      className="hidden md:block relative mx-auto mb-10"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary-soft)_0%,transparent_60%)]" />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gradId}-line`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fe5200" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fe5200" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id={`${gradId}-hub`} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#ff7a33" />
            <stop offset="100%" stopColor="#e9550e" />
          </radialGradient>
        </defs>

        {satellites.map((s) => {
          const rad = ((s.angle - 90) * Math.PI) / 180;
          const x = cx + orbit * Math.cos(rad);
          const y = cy + orbit * Math.sin(rad);
          const hubEdgeX = cx + hubR * Math.cos(rad);
          const hubEdgeY = cy + hubR * Math.sin(rad);
          const satEdgeX = x - satR * Math.cos(rad);
          const satEdgeY = y - satR * Math.sin(rad);
          const active = s.id === selectedId;
          return (
            <line
              key={s.id}
              x1={hubEdgeX}
              y1={hubEdgeY}
              x2={satEdgeX}
              y2={satEdgeY}
              stroke={active ? "#fe5200" : `url(#${gradId}-line)`}
              strokeWidth={active ? 3 : 1.5}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r={hubR + 8}
          fill="#fe5200"
          opacity="0.08"
          className="animate-pulse"
        />
        <circle cx={cx} cy={cy} r={hubR} fill={`url(#${gradId}-hub)`} />
      </svg>

      <div
        className="absolute flex items-center justify-center text-white text-center font-bold text-base leading-tight px-3 pointer-events-none select-none"
        style={{ left: cx - hubR, top: cy - hubR, width: hubR * 2, height: hubR * 2 }}
      >
        Gastroenterology
      </div>

      {satellites.map((s) => {
        const rad = ((s.angle - 90) * Math.PI) / 180;
        const x = cx + orbit * Math.cos(rad);
        const y = cy + orbit * Math.sin(rad);
        const active = s.id === selectedId;
        const Icon = s.Icon;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.id)}
            aria-pressed={active}
            aria-label={`${s.title} (${s.indications.length} conditions)`}
            className={`absolute group flex flex-col items-center justify-center rounded-full text-center transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 ${
              active
                ? "bg-primary text-white shadow-xl scale-110 z-10"
                : "bg-white text-gray-700 shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-primary/20"
            }`}
            style={{
              left: x - satR,
              top: y - satR,
              width: satR * 2,
              height: satR * 2,
            }}
          >
            <Icon className={`h-6 w-6 mb-1 ${active ? "text-white" : "text-primary"}`} />
            <span className={`text-[11px] font-semibold leading-tight px-2 ${active ? "text-white" : "text-gray-800"}`}>
              {s.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function MobileMap({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="md:hidden space-y-3 mb-8">
      <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white p-5 text-center shadow-md">
        <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Central focus</p>
        <p className="font-bold text-lg">Gastroenterology</p>
      </div>
      <div className="grid gap-2">
        {satellites.map((s) => {
          const active = s.id === selectedId;
          const Icon = s.Icon;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(s.id)}
              aria-pressed={active}
              className={`w-full flex items-center gap-3 rounded-lg p-4 text-left transition-all ${
                active
                  ? "bg-primary text-white shadow-md"
                  : "bg-white border border-primary/20 text-gray-800 hover:bg-primary-soft"
              }`}
            >
              <span
                className={`flex-none inline-flex h-10 w-10 items-center justify-center rounded-full ${
                  active ? "bg-white/20 text-white" : "bg-primary-soft text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 min-w-0">
                <span className={`block font-semibold text-sm ${active ? "text-white" : "text-gray-900"}`}>{s.title}</span>
                <span className={`block text-xs ${active ? "text-white/80" : "text-gray-500"}`}>
                  {s.indications.length} condition{s.indications.length === 1 ? "" : "s"}
                </span>
              </span>
              <span className={`flex-none ${active ? "text-white" : "text-primary"}`}>
                {active ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="6 9 12 15 18 9"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="9 6 15 12 9 18"/></svg>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DetailsPanel({ selected }: { selected: Satellite }) {
  const Icon = selected.Icon;
  return (
    <div
      key={selected.id}
      className="relative max-w-3xl mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg p-6 md:p-8 animate-fade-in"
      aria-live="polite"
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Focus Area</p>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{selected.title}</h3>
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-3">
        {selected.indications.map((ind) => (
          <li
            key={ind}
            className="flex items-start gap-3 rounded-lg bg-primary-soft/60 px-4 py-3 border border-primary/10"
          >
            <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-primary" />
            <span className="text-sm text-gray-800 leading-relaxed">{ind}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-gray-500 flex items-center gap-1.5">
        <PlusIcon className="h-3.5 w-3.5" />
        Select another focus area to explore its indications
      </p>
    </div>
  );
}
