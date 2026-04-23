import Image from "next/image";
import type { ReactNode } from "react";

export function FullBleedHero({
  image,
  alt = "",
  title,
  subtitle,
  overlayFrom = "from-black/40",
  overlayTo = "to-black/30",
  heightClass = "h-[48vh] min-h-[360px] max-h-[540px]",
  children,
}: {
  image: string;
  alt?: string;
  title: ReactNode; // allow coloured spans
  subtitle?: string;
  overlayFrom?: string;
  overlayTo?: string;
  heightClass?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayFrom} via-black/30 ${overlayTo}`} />
      <div className="relative h-full flex items-center justify-center">
        <div className="container-page text-center text-white animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-primary drop-shadow">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
