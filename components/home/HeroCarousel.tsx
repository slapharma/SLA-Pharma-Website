"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/hero-1.jpg",
    title: "Trusted by Global Healthcare Professionals",
    subtitle:
      "Over 30 years of clinical expertise delivering specialist gastrointestinal therapies to patients worldwide.",
    cta: { label: "Learn More", href: "/about-us" },
  },
  {
    image: "/hero-2.jpg",
    title: "Proven Expertise in Gastrointestinal Health",
    subtitle:
      "Pioneering research, development and delivery of specialty pharmaceuticals since 1997.",
    cta: { label: "Learn More", href: "/about-us" },
  },
];

export function HeroCarousel() {
  return (
    <section className="relative h-[72vh] min-h-[520px] max-h-[800px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full [--swiper-pagination-color:#fe5200] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:.6]"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            <div className="relative h-full flex items-center">
              <div className="container-page">
                <div className="max-w-2xl text-white animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow">
                    {s.title}
                  </h1>
                  <p className="mt-5 text-base md:text-lg text-white/90 drop-shadow">
                    {s.subtitle}
                  </p>
                  <div className="mt-7">
                    <Link href={s.cta.href} className="btn-primary shadow-lg">
                      {s.cta.label}
                      <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
