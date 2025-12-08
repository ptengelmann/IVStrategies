import React from 'react';

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ kicker, title, subtitle }) => {
  return (
    <div className="py-10">
      {kicker && (
        <div className="text-[#ff2d9b] text-xs font-medium uppercase tracking-wider mb-3">
          {kicker}
        </div>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[#888] text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
