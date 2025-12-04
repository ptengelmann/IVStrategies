'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import {
  GlobeIcon,
  TrendingUpIcon,
  SparklesIcon,
  ShoppingBagIcon,
  FileTextIcon,
  BriefcaseIcon,
  FilterIcon,
  ClipboardListIcon
} from '@/components/icons';

type TagType = 'All' | 'Merchandise' | 'Proposal' | 'Internal' | 'Briefing';

interface Project {
  title: string;
  description: string;
  href: string;
  tag: TagType;
  icon: React.ReactNode;
  date: string;
  allowedClients: string[]; // Client IDs who can access this project
}

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<TagType>('All');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render content if not authenticated
  if (!session) {
    return null;
  }

  const clientId = session.user?.id || '';

  const projects: Project[] = [
    {
      title: 'Timeless Treatments Digital Marketing Strategy',
      description: 'SEO & Social Media strategy for pre-launch buzz and growth to £30k/month revenue',
      href: '/timeless-treatments',
      tag: 'Proposal',
      icon: <SparklesIcon size={24} />,
      date: '2025-11-25',
      allowedClients: ['timeless-treatments', 'admin'] // Only Timeless Treatments client and admin can see this
    },
    {
      title: 'Restaurant Tycoon 3 Merchandise Strategy',
      description: 'Roblox-Shopify integration strategy for automated merch store with in-game purchasing',
      href: '/restaurant-tycoon-3',
      tag: 'Merchandise',
      icon: <ShoppingBagIcon size={24} />,
      date: '2025-11-04',
      allowedClients: ['restaurant-tycoon', 'admin'] // Only Restaurant Tycoon client and admin can see this
    },
    {
      title: 'AU Vodka Personalisation Strategy',
      description: 'Global travel retail opportunity with personalised gold bottles for international travellers',
      href: '/au-vodka',
      tag: 'Proposal',
      icon: <GlobeIcon size={24} />,
      date: '2025-11-03',
      allowedClients: ['au-vodka', 'admin'] // Only AU Vodka client and admin can see this
    },
    {
      title: 'Candelabra Concerts Digital Marketing Strategy',
      description: 'Candlelit concerts marketing strategy - website foundations, social media, and competitive positioning against Fever',
      href: '/candelabra-concerts',
      tag: 'Proposal',
      icon: <SparklesIcon size={24} />,
      date: '2025-12-04',
      allowedClients: ['candelabra-concerts', 'admin'] // Only Candelabra Concerts client and admin can see this
    },
    // Add more projects here as you create them
  ];

  // Filter projects based on client permissions
  const clientProjects = projects.filter(project =>
    project.allowedClients.includes(clientId)
  );

  const tags: { name: TagType; icon: React.ReactNode; color: string; count: number }[] = [
    {
      name: 'All',
      icon: <FilterIcon size={16} />,
      color: 'text-white',
      count: clientProjects.length
    },
    {
      name: 'Merchandise',
      icon: <ShoppingBagIcon size={16} />,
      color: 'text-[#ff2d9b]',
      count: clientProjects.filter(p => p.tag === 'Merchandise').length
    },
    {
      name: 'Proposal',
      icon: <FileTextIcon size={16} />,
      color: 'text-[#2dffb5]',
      count: clientProjects.filter(p => p.tag === 'Proposal').length
    },
    {
      name: 'Internal',
      icon: <BriefcaseIcon size={16} />,
      color: 'text-[#8a8a8a]',
      count: clientProjects.filter(p => p.tag === 'Internal').length
    },
    {
      name: 'Briefing',
      icon: <ClipboardListIcon size={16} />,
      color: 'text-[#ff2d9b]',
      count: clientProjects.filter(p => p.tag === 'Briefing').length
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? clientProjects
    : clientProjects.filter(project => project.tag === activeFilter);

  const getTagColor = (tag: TagType) => {
    switch(tag) {
      case 'Merchandise': return 'bg-[#ff2d9b]/10 text-[#ff2d9b] border-[#ff2d9b]/20';
      case 'Proposal': return 'bg-[#2dffb5]/10 text-[#2dffb5] border-[#2dffb5]/20';
      case 'Internal': return 'bg-[#8a8a8a]/10 text-[#8a8a8a] border-[#8a8a8a]/20';
      case 'Briefing': return 'bg-[#ff2d9b]/10 text-[#ff2d9b] border-[#ff2d9b]/20';
      default: return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <Header
        title="Research & Strategy Hub"
        tag="IV Strategies"
        logoPath="/assets/ivlogo.png"
      />

      {/* Hero Section */}
      <div className="mt-8 mb-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-white via-[#ff2d9b] to-[#2dffb5] bg-clip-text text-transparent">
          Research Hub
        </h1>
        <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed max-w-3xl">
          Strategic research, market analyses, and innovative concepts. Browse by category to explore opportunities and actionable insights.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 -mx-5 px-5">
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 pt-1 scrollbar-hide">
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => setActiveFilter(tag.name)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
                transition-all duration-200 whitespace-nowrap border flex-shrink-0
                ${activeFilter === tag.name
                  ? 'bg-white/10 border-white/30 shadow-lg'
                  : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                }
              `}
            >
              <span className={activeFilter === tag.name ? tag.color : 'text-[#8a8a8a]'}>
                {tag.icon}
              </span>
              <span className={activeFilter === tag.name ? 'text-white' : 'text-[#8a8a8a]'}>
                {tag.name}
              </span>
              <span className={`
                text-[10px] px-2 py-0.5 rounded-full font-bold
                ${activeFilter === tag.name
                  ? 'bg-[#ff2d9b] text-white'
                  : 'bg-white/5 text-[#8a8a8a]'
                }
              `}>
                {tag.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.length > 0 ? (
            <>
              {filteredProjects.map((project, idx) => (
                <Link href={project.href} key={idx}>
                  <Card className="h-full hover:border-[#ff2d9b]/50 hover:shadow-xl hover:shadow-[#ff2d9b]/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-[#ff2d9b] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <span className={`text-[10px] px-3 py-1.5 rounded-full font-bold border ${getTagColor(project.tag)}`}>
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#ff2d9b] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#8a8a8a] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                      <span className="text-[10px] text-[#8a8a8a]">{project.date}</span>
                      <span className="text-[10px] text-[#ff2d9b] group-hover:translate-x-1 transition-transform">
                        View Strategy →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}

              {/* Add New Project Card */}
              <Card className="h-full border-dashed border-white/20 flex items-center justify-center min-h-[240px] hover:border-[#2dffb5]/30 hover:bg-white/[0.02] transition-all duration-300">
                <div className="text-center">
                  <div className="text-[#8a8a8a] mb-3">
                    <SparklesIcon size={40} className="mx-auto opacity-40" />
                  </div>
                  <p className="text-sm text-[#8a8a8a] font-medium">More projects coming soon...</p>
                  <p className="text-[10px] text-[#8a8a8a]/60 mt-1">Check back for updates</p>
                </div>
              </Card>
            </>
          ) : (
            <div className="col-span-full">
              <Card className="text-center py-12">
                <div className="text-[#8a8a8a] mb-3">
                  <FilterIcon size={40} className="mx-auto opacity-40" />
                </div>
                <p className="text-sm text-[#8a8a8a]">No projects found in this category</p>
                <p className="text-xs text-[#8a8a8a]/60 mt-1">Try selecting a different filter</p>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-[#ff2d9b]/10 to-transparent border-[#ff2d9b]/20">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#ff2d9b]/20 rounded-lg">
              <TrendingUpIcon className="text-[#ff2d9b]" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{clientProjects.length}</div>
              <div className="text-xs text-[#8a8a8a]">Active Projects</div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#2dffb5]/10 to-transparent border-[#2dffb5]/20">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#2dffb5]/20 rounded-lg">
              <SparklesIcon className="text-[#2dffb5]" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{tags.filter(t => t.count > 0).length - 1}</div>
              <div className="text-xs text-[#8a8a8a]">Categories</div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-white/10 to-transparent border-white/20">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-lg">
              <FileTextIcon className="text-white" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2025</div>
              <div className="text-xs text-[#8a8a8a]">Latest Research</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Info Card */}
      <Card variant="highlight" className="border-l-4 border-[#2dffb5]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#2dffb5]/20 rounded-lg">
            <BriefcaseIcon className="text-[#2dffb5]" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              About This Hub
            </h3>
            <div className="text-sm leading-relaxed space-y-2 text-[#8a8a8a]">
              <p>
                This research hub showcases strategic insights and innovative concepts with interactive visualisations.
                Each project includes comprehensive analysis, market data, and actionable recommendations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-[#ff2d9b] font-bold mb-1">Merchandise</div>
                  <div>Product strategies & e-commerce solutions</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-[#2dffb5] font-bold mb-1">Proposal</div>
                  <div>Client-ready strategic presentations</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-[#8a8a8a] font-bold mb-1">Internal</div>
                  <div>Research & development projects</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-[#ff2d9b] font-bold mb-1">Briefing</div>
                  <div>Project briefing questionnaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="text-center mt-10 text-[#8a8a8a] text-xs">
        Research & Strategy Hub | IV Strategies | 2025
      </div>
    </div>
  );
}
