import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  tag?: string;
  logoPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, tag, logoPath }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-white/10">
      <div className="flex items-center gap-2.5">
        {logoPath && (
          <Image
            src={logoPath}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        )}
        <span className="font-bold text-lg">{title}</span>
      </div>
      {tag && (
        <div className="bg-[#ff2d9b]/10 text-[#ff2d9b] px-3 py-1.5 rounded-2xl text-xs font-semibold">
          {tag}
        </div>
      )}
    </div>
  );
};
