import Link from 'next/link';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import { GlobeIcon, TrendingUpIcon, SparklesIcon } from '@/components/icons';

export default function Home() {
  const projects = [
    {
      title: 'Restaurant Tycoon 3 Merchandise Strategy',
      description: 'Roblox-Shopify integration strategy for automated merch store with in-game purchasing',
      href: '/restaurant-tycoon-3',
      tag: 'Roblox E-Commerce',
      icon: <TrendingUpIcon size={24} />
    },
    {
      title: 'AU Vodka Personalization Strategy',
      description: 'Global travel retail opportunity with personalized gold bottles for international travelers',
      href: '/au-vodka',
      tag: 'Client Proposal',
      icon: <GlobeIcon size={24} />
    },
    // Add more projects here as you create them
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        title="Research & Strategy Hub"
        tag="IV Strategies"
        logoPath="/assets/ivlogo.png"
      />

      <div className="mt-8 mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#aaa] bg-clip-text text-transparent">
          Welcome to the Research Hub
        </h1>
        <p className="text-[#8a8a8a] text-lg leading-relaxed max-w-3xl">
          Explore our collection of strategic research, market analyses, and innovative concepts.
          Each project is a deep dive into opportunities, strategies, and actionable insights.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <SparklesIcon className="text-[#ff2d9b]" size={24} />
          Active Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <Link href={project.href} key={idx}>
              <Card className="h-full hover:border-[#ff2d9b]/50 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-[#ff2d9b] group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-[10px] bg-[#ff2d9b]/10 text-[#ff2d9b] px-2 py-1 rounded-full font-semibold">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-2 group-hover:text-[#ff2d9b] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#8a8a8a] leading-relaxed">
                  {project.description}
                </p>
              </Card>
            </Link>
          ))}

          {/* Add New Project Card */}
          <Card className="h-full border-dashed border-white/20 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <div className="text-[#8a8a8a] mb-2">
                <SparklesIcon size={32} className="mx-auto opacity-50" />
              </div>
              <p className="text-sm text-[#8a8a8a]">More projects coming soon...</p>
            </div>
          </Card>
        </div>
      </div>

      <Card variant="highlight" className="mt-8">
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <TrendingUpIcon className="text-[#ff2d9b]" />
          How to Use This Hub
        </h3>
        <div className="text-sm leading-relaxed space-y-2">
          <p>
            This research hub is designed to showcase strategic insights and innovative concepts
            in a clean, interactive format. Each project page includes:
          </p>
          <ul className="pl-5 text-xs leading-loose list-disc mt-2">
            <li>Comprehensive market analysis and data visualization</li>
            <li>Interactive tabs for exploring different aspects of each strategy</li>
            <li>Visual concepts and actionable recommendations</li>
            <li>Professional presentation suitable for client proposals</li>
          </ul>
        </div>
      </Card>

      <div className="text-center mt-8 text-[#8a8a8a] text-xs">
        Research & Strategy Hub | IV Strategies | 2025
      </div>
    </div>
  );
}
