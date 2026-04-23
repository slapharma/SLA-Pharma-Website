"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/shared/icons";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

type Slide = {
  image: string;
  orangePart: string;
  whitePart: string;
  subtitle: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: "/hero-1.jpg",
    orangePart: "Trusted by Global",
    whitePart: "Healthcare Professionals",
    subtitle:
      "Our partnerships with renowned researchers, clinicians, and pharmaceutical organisations ensure our treatments are backed by rigorous scientific validation.",
    cta: { label: "Learn More", href: "/about-us" },
  },
  {
    image: "/hero-2.jpg",
    orangePart: "Proven Expertise in",
    whitePart: "Gastrointestinal Health",
    subtitle:
      "Our commitment to developing solutions for GI disorders has made SLA Pharma a world leader in the field with unequalled development, medical, regulatory and commercial expertise.",
    cta: { label: "Learn More", href: "/about-us" },
  },
];

export function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative h-[80vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSwiper={(s) => { swiperRef.current = s; }}
        className="h-full w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="relative">
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40" />
            <div className="relative h-full flex items-center">
              <div className="container-page animate-fade-in">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    <span className="text-primary block sm:inline">{s.orangePart}</span>{" "}
                    <span className="text-white block sm:inline">{s.whitePart}</span>
                  </h1>
                  <p className="mt-5 text-base md:text-lg text-white max-w-xl drop-shadow">
                    {s.subtitle}
                  </p>
                  <div className="mt-7">
                    <Link href={s.cta.href} className="btn-light-pill">
                      {s.cta.label}
                      <ArrowRightIcon className="ml-2 h-4 w-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition"
      >
        <ChevronLeftIcon className="h-8 w-8 md:h-10 md:w-10" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition"
      >
        <ChevronRightIcon className="h-8 w-8 md:h-10 md:w-10" />
      </button>
    </section>
  );
}
