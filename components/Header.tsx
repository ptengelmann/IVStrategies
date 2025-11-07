'use client';

import React from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  tag?: string;
  logoPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, tag, logoPath }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

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
      <div className="flex items-center gap-3">
        {session?.user && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 hidden md:block">
              {session.user.name}
            </span>
            <button
              onClick={handleLogout}
              className="bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              Logout
            </button>
          </div>
        )}
        {tag && (
          <div className="bg-[#ff2d9b]/10 text-[#ff2d9b] px-3 py-1.5 rounded-2xl text-xs font-semibold">
            {tag}
          </div>
        )}
      </div>
    </div>
  );
};
