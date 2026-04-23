type Satellite = {
  title: string;
  indications: string[];
  /** clock position in degrees, 0 = top, 90 = right */
  angle: number;
};

const satellites: Satellite[] = [
  {
    title: "Inflammatory Conditions",
    indications: ["Crohn's disease", "Ulcerative colitis", "Perianal Crohn's disease"],
    angle: 0,
  },
  {
    title: "Colorectal & Oncological",
    indications: [
      "Sporadic colorectal polyps",
      "Colorectal cancer",
      "Familial Adenomatous Polyposis (FAP)",
    ],
    angle: 72,
  },
  {
    title: "Functional / Motility Disorders",
    indications: ["Irritable bowel syndrome (IBS)", "Chronic constipation"],
    angle: 144,
  },
  {
    title: "Rare GI Disorders",
    indications: ["Short bowel syndrome", "Eosinophilic Gastro diseases"],
    angle: 216,
  },
  {
    title: "Proctological Disorders",
    indications: ["Anal fissures", "Haemorrhoids", "Pilonidal sinus"],
    angle: 288,
  },
];

export function MindMap() {
  return (
    <div className="w-full">
      <DesktopMap />
      <MobileList />
    </div>
  );
}

function DesktopMap() {
  const size = 640;
  const hubR = 100;
  const satR = 130;
  const orbit = 240;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="hidden md:block relative mx-auto" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {satellites.map((s, i) => {
          const rad = ((s.angle - 90) * Math.PI) / 180;
          const x = cx + orbit * Math.cos(rad);
          const y = cy + orbit * Math.sin(rad);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#fe5200"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>

      <div
        className="absolute rounded-full bg-primary text-white flex items-center justify-center text-center font-bold shadow-lg"
        style={{
          left: cx - hubR,
          top: cy - hubR,
          width: hubR * 2,
          height: hubR * 2,
        }}
      >
        <span className="px-3 text-lg">Gastroenterology</span>
      </div>

      {satellites.map((s, i) => {
        const rad = ((s.angle - 90) * Math.PI) / 180;
        const x = cx + orbit * Math.cos(rad);
        const y = cy + orbit * Math.sin(rad);
        return (
          <div
            key={i}
            className="absolute rounded-full bg-primary-soft border border-primary/40 flex flex-col items-center justify-center text-center px-3 shadow"
            style={{
              left: x - satR,
              top: y - satR,
              width: satR * 2,
              height: satR * 2,
            }}
          >
            <h3 className="text-primary font-semibold text-sm leading-tight mb-1.5">
              {s.title}
            </h3>
            <ul className="text-gray-700 text-xs leading-snug space-y-0.5">
              {s.indications.map((ind) => (
                <li key={ind}>&bull; {ind}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function MobileList() {
  return (
    <div className="md:hidden space-y-4">
      <div className="rounded-xl bg-primary text-white p-5 text-center font-bold shadow-md">
        Gastroenterology
      </div>
      {satellites.map((s) => (
        <div
          key={s.title}
          className="rounded-xl bg-primary-soft border border-primary/40 p-5 shadow-sm"
        >
          <h3 className="text-primary font-semibold text-base mb-2">{s.title}</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            {s.indications.map((ind) => (
              <li key={ind}>{ind}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
