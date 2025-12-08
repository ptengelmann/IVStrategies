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
    <div className="flex justify-between items-center py-5 border-b border-[#222]">
      <div className="flex items-center gap-3">
        {logoPath && (
          <Image
            src={logoPath}
            alt="Logo"
            width={36}
            height={36}
            className="object-contain"
          />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-base text-white">{title}</span>
          {tag && (
            <span className="text-xs text-[#666]">{tag}</span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {session?.user && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#666] hidden md:block">
              {session.user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-[#666] hover:text-white text-sm transition-colors"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
