'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  titleColor?: string;
}

export function HeroSection({
  videoSrc,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  titleColor = '#e74c3c',
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <h1
          className="text-4xl font-bold uppercase leading-tight tracking-wide text-balance md:text-5xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-oswald), sans-serif', color: titleColor }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
          {subtitle}
        </p>

        {/* Buttons Container */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ backgroundColor: titleColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Secondary Button */}
          <Link
            href={secondaryButtonLink}
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              borderColor: titleColor,
              backgroundColor: 'transparent',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${titleColor}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
