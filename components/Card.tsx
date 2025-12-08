import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'gradient' | 'success';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'bg-[#111] border-[#222]',
    highlight: 'bg-[#111] border-l-2 border-l-[#ff2d9b] border-t-[#222] border-r-[#222] border-b-[#222]',
    gradient: 'bg-[#111] border-[#222]',
    success: 'bg-[#111] border-l-2 border-l-[#2dffb5] border-t-[#222] border-r-[#222] border-b-[#222]'
  };

  return (
    <div className={`p-6 rounded-lg border ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
