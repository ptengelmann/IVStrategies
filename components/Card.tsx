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
    default: 'bg-white/[0.03] border-white/10',
    highlight: 'bg-[#ff2d9b]/5 border-[#ff2d9b]/20',
    gradient: 'bg-gradient-to-br from-[#ff2d9b]/10 to-white/[0.03] border-[#ff2d9b]/30',
    success: 'bg-[#2dffb5]/5 border-[#2dffb5]/20'
  };

  return (
    <div className={`p-5 rounded-xl border ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
