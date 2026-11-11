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
  titleClass = "text-3xl sm:text-4xl md:text-5xl",
  children,
}: {
  image?: string; // omit for a plain, image-free hero
  alt?: string;
  title: ReactNode; // allow coloured spans
  subtitle?: string;
  overlayFrom?: string;
  overlayTo?: string;
  heightClass?: string;
  titleClass?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden mt-20 ${heightClass} ${image ? "" : "bg-primary-soft"}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayFrom} via-black/30 ${overlayTo}`} />
        </>
      )}
      <div className="relative h-full flex items-center justify-center">
        <div className={`container-page text-center animate-fade-in ${image ? "text-white" : "text-gray-800"}`}>
          <h1 className={`${titleClass} font-extrabold uppercase tracking-tight text-primary ${image ? "drop-shadow" : ""}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-base md:text-lg max-w-3xl mx-auto ${image ? "text-white/95" : "text-gray-700"}`}>
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
