import React from 'react';

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ kicker, title, subtitle }) => {
  return (
    <div className="mt-6 mb-8">
      {kicker && (
        <div className="text-[#ff2d9b] text-sm font-semibold mb-2">
          {kicker}
        </div>
      )}
      <h2 className="text-[32px] font-bold mb-3 bg-gradient-to-r from-white to-[#aaa] bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8a8a8a] text-base leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
