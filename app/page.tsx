'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';

type TagType = 'All' | 'Merchandise' | 'Proposal' | 'Internal' | 'Briefing';

interface Project {
  title: string;
  description: string;
  href: string;
  tag: TagType;
  date: string;
  client: string;
  allowedClients: string[];
}

const projects: Project[] = [
  {
    title: 'Timeless Treatments Digital Marketing Strategy',
    description: 'SEO & Social Media strategy for pre-launch buzz and growth to £30k/month revenue',
    href: '/timeless-treatments',
    tag: 'Proposal',
    date: 'Nov 2025',
    client: 'Timeless Treatments',
    allowedClients: ['timeless-treatments', 'admin']
  },
  {
    title: 'Restaurant Tycoon 3 Merchandise Strategy',
    description: 'Roblox-Shopify integration strategy for automated merch store with in-game purchasing',
    href: '/restaurant-tycoon-3',
    tag: 'Merchandise',
    date: 'Nov 2025',
    client: 'Restaurant Tycoon',
    allowedClients: ['restaurant-tycoon', 'admin']
  },
  {
    title: 'AU Vodka Personalisation Strategy',
    description: 'Global travel retail opportunity with personalised gold bottles for international travellers',
    href: '/au-vodka',
    tag: 'Proposal',
    date: 'Nov 2025',
    client: 'AU Vodka',
    allowedClients: ['au-vodka', 'admin']
  },
  {
    title: 'Candelabra Concerts Digital Marketing Strategy',
    description: 'Candlelit concerts marketing strategy - website foundations, social media, and competitive positioning',
    href: '/candelabra-concerts',
    tag: 'Proposal',
    date: 'Dec 2025',
    client: 'Candelabra Concerts',
    allowedClients: ['candelabra-concerts', 'admin']
  },
];

const tags: TagType[] = ['All', 'Proposal', 'Merchandise', 'Internal', 'Briefing'];

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<TagType>('All');
  const [clientFilter, setClientFilter] = useState<string>('All');

  const clientId = session?.user?.id || '';
  const isAdmin = clientId === 'admin';

  // Get projects user can see
  const clientProjects = useMemo(() => {
    return projects.filter(project =>
      project.allowedClients.includes(clientId)
    );
  }, [clientId]);

  // Get unique clients for admin filter
  const uniqueClients = useMemo(() => {
    const clients = [...new Set(clientProjects.map(p => p.client))];
    return ['All', ...clients.sort()];
  }, [clientProjects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return clientProjects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filter
      const matchesTag = activeFilter === 'All' || project.tag === activeFilter;

      // Client filter (admin only)
      const matchesClient = clientFilter === 'All' || project.client === clientFilter;

      return matchesSearch && matchesTag && matchesClient;
    });
  }, [clientProjects, searchQuery, activeFilter, clientFilter]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-[#666]">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const getTagStyle = (tag: TagType) => {
    switch(tag) {
      case 'Merchandise': return 'text-[#ff2d9b]';
      case 'Proposal': return 'text-[#2dffb5]';
      default: return 'text-[#666]';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <Header
        title="Research Hub"
        tag="IV Strategies"
        logoPath="/assets/ivlogo.png"
      />

      {/* Hero + Search */}
      <div className="py-10 border-b border-[#222]">
        <h1 className="text-3xl font-bold text-white mb-6">
          Projects
        </h1>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex items-center justify-between py-4 border-b border-[#222] gap-4">
        {/* Tag filters */}
        <div className="flex gap-1 overflow-x-auto flex-shrink-0">
          {tags.map((tag) => {
            const count = tag === 'All'
              ? clientProjects.length
              : clientProjects.filter(p => p.tag === tag).length;

            if (count === 0 && tag !== 'All') return null;

            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`
                  px-3 py-1.5 text-sm transition-colors rounded whitespace-nowrap
                  ${activeFilter === tag
                    ? 'text-white bg-[#222]'
                    : 'text-[#666] hover:text-[#999]'
                  }
                `}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Client filter - only for admin */}
        {isAdmin && uniqueClients.length > 2 && (
          <select
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
            className="bg-[#111] border border-[#222] rounded-lg px-3 py-1.5 text-sm text-[#999] focus:outline-none focus:border-[#333] cursor-pointer"
          >
            {uniqueClients.map(client => (
              <option key={client} value={client}>
                {client === 'All' ? 'All clients' : client}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Results count */}
      {(searchQuery || activeFilter !== 'All' || clientFilter !== 'All') && (
        <div className="py-3 text-xs text-[#666]">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'result' : 'results'}
          {searchQuery && <span> for "{searchQuery}"</span>}
        </div>
      )}

      {/* Projects List */}
      <div className="divide-y divide-[#222]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <Link href={project.href} key={idx} className="block group">
              <div className="py-5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-white group-hover:text-[#ff2d9b] transition-colors truncate mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#666] line-clamp-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  {isAdmin && (
                    <span className="text-xs text-[#444]">
                      {project.client}
                    </span>
                  )}
                  <span className={`text-xs font-medium ${getTagStyle(project.tag)}`}>
                    {project.tag}
                  </span>
                  <span className="text-xs text-[#444]">
                    {project.date}
                  </span>
                  <span className="text-[#444] group-hover:text-[#ff2d9b] transition-colors">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-[#666] mb-2">No projects found</p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-[#ff2d9b] hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-xs text-[#444]">
        IV Strategies · 2025
      </div>
    </div>
  );
}
