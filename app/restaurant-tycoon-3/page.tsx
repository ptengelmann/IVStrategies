'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Tabs, Tab } from '@/components/Tabs';
import { Card } from '@/components/Card';
import { DownloadPDF } from '@/components/DownloadPDF';
import { SparklesIcon, GlobeIcon, TrendingUpIcon, GiftIcon, DiscordIcon, XIcon, InstagramIcon, YouTubeIcon, TikTokIcon, PackageIcon, ShoppingBagIcon, PrinterIcon } from '@/components/icons';

export default function RestaurantTycoon3Strategy() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check if user has access to this project
  useEffect(() => {
    if (status === 'authenticated') {
      const clientId = session?.user?.id || '';
      const allowedClients = ['restaurant-tycoon', 'admin'];

      if (!allowedClients.includes(clientId)) {
        // Redirect to home if client doesn't have access
        router.push('/');
      }
    }
  }, [status, session, router]);

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!session) {
    return null;
  }
  // Technical Integration Data
  const technicalSolutions = [
    {
      phase: "Phase 1: Shopify Store Foundation (RECOMMENDED)",
      status: "Ready to Launch",
      solution: "IV Creative End-to-End Solution",
      details: "IV Creative handles all personalisation, print-on-demand production, and fulfilment. Full-service solution covering design, printing, packaging, warehousing, and global distribution. Zero inventory required. Standard e-commerce marketing to RT3 community via social media.",
      timeline: "2-4 weeks setup",
      requirements: "None - IV Creative has all capabilities in-house"
    },
    {
      phase: "Phase 2: Roblox In-Game Integration (Future Possibility)",
      status: "Requires Partnerships",
      solution: "Roblox Commerce API + Shopify",
      details: "Official Roblox-Shopify integration enabling in-game purchases. Proven successful (Twin Atlas: six-figure revenue). However, this requires approval from both Roblox and Restaurant Tycoon 3 developer (Ultraw Games).",
      timeline: "3-6 months if approved",
      requirements: "Partnership with Ultraw Games + Roblox AMP approval + Custom development + Revenue share agreements"
    },
    {
      phase: "Phase 3: 3D Restaurant Model Exports (Long-Term Possibility)",
      status: "Requires Developer Cooperation",
      solution: "Custom 3D Model Export System",
      details: "Physical 3D-printed replicas of players' in-game restaurants. Requires deep integration with game code to export player data. High production cost and complexity.",
      timeline: "6-12+ months if feasible",
      requirements: "Full partnership with Ultraw Games + Access to game data/APIs + 3D printing partner + Complex pricing system + Extended production timelines"
    }
  ];

  // Roblox-Shopify Integration Details
  const integrationDetails = {
    officialSupport: [
      "Roblox Commerce API officially launched May 2025",
      "Shopify is first official integration partner",
      "In-game purchases of physical items without leaving Roblox",
      "Twin Atlas studio achieved six-figure revenue in first weeks"
    ],
    requirements: [
      "Apply to Roblox Approved Merchandiser Programme (AMP)",
      "Shopify store subscription (from £25/month)",
      "Meet Roblox creator eligibility requirements",
      "Custom development for in-game commerce interface"
    ],
    customerJourney: [
      "Player browses products within Restaurant Tycoon 3",
      "Selects personalised product and customises options",
      "Clicks purchase - redirected to secure Shopify checkout",
      "Enters/confirms delivery address in Shopify",
      "Payment processed - order automatically sent to IV Creative",
      "Physical product manufactured and shipped to player's address"
    ]
  };

  // Personalised Product Ideas
  const productIdeas = [
    {
      product: "Personalised Chef Apron",
      description: "Premium apron featuring player's restaurant branding and in-game chef character",
      personalisation: "Restaurant logo, player username, custom text ('Head Chef of [Restaurant Name]'), character artwork",
      appeal: "Wearable merch, practical item, great for cooking content creators",
      supplier: "IV Creative",
      priceRange: "£22-£32"
    },
    {
      product: "Custom Restaurant Menu Board",
      description: "Framed replica of player's in-game menu with bestselling dishes",
      personalisation: "Player's menu items, restaurant name, custom design matching in-game aesthetic",
      appeal: "Kitchen/dining room decor, nostalgic keepsake, conversation starter",
      supplier: "IV Creative (posters and custom framing)",
      priceRange: "£18-£40"
    },
    {
      product: "Personalised Mug Collection",
      description: "'Executive Chef' mug featuring player stats, restaurant milestones, or character art",
      personalisation: "Player username, restaurant name, achievement badges, total customers served stat",
      appeal: "Daily use item, affordable entry point, collectible series potential",
      supplier: "IV Creative",
      priceRange: "£12-£18"
    },
    {
      product: "Personalised Cutting Board",
      description: "Bamboo cutting board laser-engraved with restaurant branding",
      personalisation: "Restaurant logo, 'From the kitchen of [Player Name]', custom recipe engraving",
      appeal: "Practical kitchen item, premium feel, gift-worthy",
      supplier: "IV Creative",
      priceRange: "£25-£38"
    }
  ];

  // Game Statistics & Audience
  const gameStats = {
    launch: "January 2025 (Paid Beta: May 2025, Free Launch: August 2025)",
    totalPlays: "112+ million visits",
    developer: "Ultraw Games",
    community: "Active Discord, X (Twitter), Instagram, YouTube presence",
    engagement: "Regular updates, Halloween events, community game nights"
  };

  // Social Media Strategy
  const socialStrategy = [
    {
      platform: "Discord",
      icon: <DiscordIcon size={20} className="text-[#5865F2]" />,
      currentState: "Official server with active community, bug reports, game nights",
      opportunity: "Exclusive merch drops, community design competitions, early access to products",
      tactics: "Merch-specific channel, polls for product ideas, Discord-exclusive discount codes"
    },
    {
      platform: "X (Twitter)",
      icon: <XIcon size={20} className="text-white" />,
      currentState: "Developer Ultraw actively polls players, showcases fan builds",
      opportunity: "Product reveal campaigns, user-generated content featuring merch, influencer partnerships",
      tactics: "Unboxing content, photo contests with merch prizes, #RT3Merch hashtag campaign"
    },
    {
      platform: "Instagram",
      icon: <InstagramIcon size={20} className="text-[#E4405F]" />,
      currentState: "Active presence with visual content and community engagement",
      opportunity: "Product showcase posts, influencer collaborations, Instagram Shopping integration",
      tactics: "Reels featuring product unboxing, Stories polls for new designs, tagged product photos"
    },
    {
      platform: "YouTube",
      icon: <YouTubeIcon size={20} className="text-[#FF0000]" />,
      currentState: "Official channel + content creators covering the game",
      opportunity: "Merch showcase videos, behind-the-scenes production content, creator sponsorships",
      tactics: "Send free merch to top RT3 YouTubers, sponsored integration in gameplay videos"
    },
    {
      platform: "TikTok",
      icon: <TikTokIcon size={20} className="text-white" />,
      currentState: "Growing presence with Restaurant Tycoon 3 content",
      opportunity: "Merch unboxing trends, design reveal videos, 'show your RT3 merch' challenges",
      tactics: "Partner with Roblox TikTok creators, short-form product showcase content"
    }
  ];

  // Digital Strategy
  const digitalStrategy = [
    {
      initiative: "In-Game Advertising",
      description: "Billboards, posters, NPC dialogue promoting the merch store within Restaurant Tycoon 3",
      impact: "Direct reach to 100% of active playerbase"
    },
    {
      initiative: "Digital Rewards Programme",
      description: "Purchase physical merch, receive exclusive in-game items (special chef hat, restaurant decoration, VIP badge)",
      impact: "Drives physical sales through digital incentives, increases perceived value"
    },
    {
      initiative: "Limited Edition Drops",
      description: "Quarterly limited-run products tied to game updates, events, or seasons",
      impact: "Creates urgency, FOMO-driven purchases, collectible value"
    },
    {
      initiative: "Community Co-Creation",
      description: "Fan design contests where winners' designs become official products",
      impact: "Massive community engagement, user-generated marketing, built-in customer base"
    },
    {
      initiative: "Email Marketing Automation",
      description: "Shopify email flows for abandoned carts, new product launches, restock notifications",
      impact: "Recovers lost sales, keeps community informed, builds anticipation"
    }
  ];

  // Phase Roadmap
  const phaseRoadmap = [
    {
      phase: "Phase 1A: Foundation (Weeks 1-4)",
      actions: [
        "Set up Shopify store with professional branding",
        "Integrate IV Creative for automated fulfilment",
        "Launch with 4 core products (apron, menu board, mugs, cutting board)",
        "Create social media accounts and announce merch store",
        "Set up email marketing automation"
      ],
      outcome: "Operational merch store with automated fulfilment, initial product line available"
    },
    {
      phase: "Phase 1B: Community Launch (Weeks 5-8)",
      actions: [
        "Major announcement on Discord, X, Instagram",
        "Partner with 3-5 Restaurant Tycoon 3 content creators for sponsored content",
        "Run launch promotion (15% off first week)",
        "Implement in-game advertising (if permitted by Ultraw)",
        "Gather customer feedback and iterate"
      ],
      outcome: "Community awareness, initial sales, customer testimonials and product photography"
    },
    {
      phase: "Phase 2: Roblox Integration (Months 3-6)",
      actions: [
        "Apply to Roblox Approved Merchandiser Programme",
        "Develop in-game commerce interface using Roblox Commerce APIs",
        "Implement Shopify-Roblox integration",
        "Beta test with select community members",
        "Full launch of in-game purchasing"
      ],
      outcome: "Seamless in-game to physical product purchasing, significant revenue increase"
    },
    {
      phase: "Phase 3: 3D Model Integration (Months 6-12)",
      actions: [
        "Develop 3D model export system from Restaurant Tycoon 3",
        "Partner with 3D printing service for on-demand manufacturing",
        "Create pricing calculator based on model complexity",
        "Launch 'Your Restaurant in Real Life' campaign",
        "Implement order management for custom 3D prints"
      ],
      outcome: "Unique, high-value personalised product offering unavailable elsewhere"
    }
  ];

  const tabs: Tab[] = [
    {
      id: 'overview',
      label: 'Technical Solution',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Phased Approach: Immediate Launch to Future Possibilities</h3>
            <div className="text-sm leading-relaxed mb-4">
              <strong className="text-[#2dffb5]">Recommended Strategy:</strong> Launch immediately with Phase 1 (IV Creative's proven e-commerce solution) to establish revenue and community engagement. Phases 2-3 are technically possible but require partnerships with game developer and Roblox approval.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg border-l-[3px] border-[#2dffb5]">
                <div className="text-xs font-bold text-[#2dffb5] mb-1">✓ PHASE 1: READY NOW</div>
                <div className="text-xs">IV Creative end-to-end solution. Launch in 2-4 weeks with zero dependencies.</div>
              </div>
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg border-l-[3px] border-[#ff2d9b]">
                <div className="text-xs font-bold text-[#ff2d9b] mb-1">⚠ PHASE 2: NEEDS APPROVAL</div>
                <div className="text-xs">Roblox integration possible but requires Ultraw Games partnership + Roblox AMP approval</div>
              </div>
              <div className="bg-[#8a8a8a]/10 p-3 rounded-lg border-l-[3px] border-[#8a8a8a]">
                <div className="text-xs font-bold text-[#8a8a8a] mb-1">? PHASE 3: LONG-TERM</div>
                <div className="text-xs">3D models require deep developer cooperation. Complex and high-cost.</div>
              </div>
            </div>

            {technicalSolutions.map((solution, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0 ? 'bg-[#2dffb5]/5 border-[#2dffb5]' : 'bg-white/[0.02] border-[#ff2d9b]'
                } p-4 rounded-lg mb-3 border-l-[3px]`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`text-sm font-bold ${idx === 0 ? 'text-[#2dffb5]' : 'text-[#ff2d9b]'}`}>
                    {solution.phase}
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    idx === 0
                      ? 'bg-[#2dffb5]/20 text-[#2dffb5]'
                      : 'bg-[#ff2d9b]/10 text-[#ff2d9b]'
                  }`}>
                    {solution.status}
                  </span>
                </div>
                <div className="text-xs mb-2">
                  <strong>Solution:</strong> {solution.solution}
                </div>
                <div className="text-xs leading-relaxed mb-2 text-[#8a8a8a]">
                  {solution.details}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  <div className="text-[11px] bg-white/[0.02] p-2 rounded">
                    <strong className="text-[#2dffb5]">Timeline:</strong> {solution.timeline}
                  </div>
                  <div className="text-[11px] bg-white/[0.02] p-2 rounded">
                    <strong className={idx === 0 ? 'text-[#2dffb5]' : 'text-[#ff2d9b]'}>Requirements:</strong> {solution.requirements}
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">How It Works: Customer Journey</h4>
            <ol className="text-xs pl-5 leading-loose list-decimal">
              {integrationDetails.customerJourney.map((step, idx) => (
                <li key={idx} className="mb-1">{step}</li>
              ))}
            </ol>
          </Card>

          <Card className="mt-4">
            <div className="flex items-start gap-3 mb-3">
              <PrinterIcon className="text-[#ff2d9b]" size={24} />
              <div>
                <h4 className="text-sm font-bold mb-2">IV Creative: Full-Service Print-on-Demand Agency</h4>
                <div className="text-xs text-[#8a8a8a] leading-relaxed">
                  End-to-end ecommerce partner with 7,500+ projects delivered for major brands
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <PackageIcon size={16} className="text-[#ff2d9b]" />
                  <strong className="text-[#ff2d9b]">Design & Production</strong>
                </div>
                <div className="text-[11px] leading-relaxed">
                  Bespoke packaging design, digital & commercial printing, personalisation technology, merch development
                </div>
              </div>

              <div className="bg-[#2dffb5]/10 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingBagIcon size={16} className="text-[#2dffb5]" />
                  <strong className="text-[#2dffb5]">Fulfilment & Distribution</strong>
                </div>
                <div className="text-[11px] leading-relaxed">
                  Warehousing, picking & packing, global distribution (B2B & DTC), returns management
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs leading-relaxed bg-white/[0.02] p-3 rounded-lg">
              <strong>Proven Track Record:</strong> Trusted by Coca-Cola, Marmite, Who Gives A Crap, Jura, Branston.
              A+ customer service rating. Complete Shopify integration capabilities for seamless order management.
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'products',
      label: 'Product Ideas',
      content: (
        <>
          <Card className="mt-4 mb-4">
            <h3 className="text-base font-bold mb-3">4 Personalised Product Concepts</h3>
            <div className="text-sm leading-relaxed text-[#8a8a8a] mb-3">
              Each product designed for maximum personalisation, leveraging Restaurant Tycoon 3's unique in-game elements
              and player identity. Prices shown in GBP for UK market.
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productIdeas.map((product, idx) => (
              <Card key={idx} variant={idx === 0 ? 'gradient' : 'default'}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GiftIcon className={idx === 0 ? 'text-[#2dffb5]' : 'text-[#ff2d9b]'} />
                    <h3 className="text-sm font-bold">{product.product}</h3>
                  </div>
                  {idx === 0 && (
                    <span className="text-[9px] bg-[#2dffb5]/20 text-[#2dffb5] px-2 py-1 rounded-full font-bold">
                      CLIENT FAVOURITE
                    </span>
                  )}
                </div>

                <div className="text-xs leading-relaxed mt-3 space-y-2">
                  <p>{product.description}</p>

                  <div className="bg-[#ff2d9b]/10 p-2 rounded-md">
                    <strong className="text-[#ff2d9b]">Personalisation:</strong> {product.personalisation}
                  </div>

                  <div className="text-[11px] text-[#8a8a8a]">
                    <strong>Appeal:</strong> {product.appeal}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="text-[11px]">
                      <strong>Supplier:</strong> {product.supplier}
                    </div>
                    <div className="text-xs font-bold text-[#2dffb5]">
                      {product.priceRange}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'audience',
      label: 'Audience & Social',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Restaurant Tycoon 3: Game Statistics</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-[#ff2d9b]">112M+</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Total Plays</div>
              </div>
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#2dffb5]">Jan 2025</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Launch Date</div>
              </div>
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#ff2d9b]">Active</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Community</div>
              </div>
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#2dffb5]">Ultraw</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Developer</div>
              </div>
            </div>

            <div className="text-xs leading-relaxed mb-3">
              <p className="mb-2">
                <strong>Community Presence:</strong> Official Discord server, X (Twitter), Instagram, and YouTube channels.
                Developer actively polls community for features and showcases fan builds.
              </p>
              <p>
                <strong>Engagement Level:</strong> Regular game updates, seasonal events (Halloween 2025), community game nights,
                active Discord discussions, and extensive wiki with 394 pages and 9,519 edits.
              </p>
            </div>
          </Card>

          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Social Media Strategy by Platform</h3>

            {socialStrategy.map((platform, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#2dffb5]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    {platform.icon}
                  </div>
                  <div className="text-sm font-bold text-[#2dffb5]">{platform.platform}</div>
                </div>

                <div className="text-xs leading-relaxed space-y-2">
                  <div>
                    <strong>Current State:</strong> {platform.currentState}
                  </div>
                  <div className="bg-[#ff2d9b]/10 p-2 rounded-md">
                    <strong className="text-[#ff2d9b]">Opportunity:</strong> {platform.opportunity}
                  </div>
                  <div className="text-[11px] text-[#8a8a8a]">
                    <strong>Tactics:</strong> {platform.tactics}
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </>
      )
    },
    {
      id: 'digital-strategy',
      label: 'Digital Strategy',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Comprehensive Digital Marketing Strategy</h3>

            {digitalStrategy.map((initiative, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                } p-3 rounded-lg mb-3`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUpIcon className="text-[#ff2d9b]" size={16} />
                  <div className="text-sm font-bold">{initiative.initiative}</div>
                </div>
                <div className="text-xs leading-relaxed mb-2">
                  {initiative.description}
                </div>
                <div className="text-[11px] bg-[#2dffb5]/10 text-[#2dffb5] p-2 rounded-md">
                  <strong>Impact:</strong> {initiative.impact}
                </div>
              </div>
            ))}
          </Card>

          <Card variant="gradient" className="mt-4">
            <h4 className="text-sm font-bold mb-3 text-[#ff2d9b]">
              Integration with Roblox Approved Merchandiser Programme
            </h4>
            <div className="text-xs leading-relaxed space-y-2">
              <p>
                <strong>Digital Rewards Tie-In:</strong> When players purchase physical merchandise, they automatically
                receive exclusive in-game items through Roblox's AMP. This creates a powerful incentive loop where
                physical purchases unlock digital rewards.
              </p>
              <p>
                <strong>Example:</strong> Purchase personalised lightbox → Receive exclusive "Golden Chef Hat" in
                Restaurant Tycoon 3 + "Verified Restaurateur" badge visible to all players.
              </p>
              <p className="text-[11px] text-[#2dffb5] italic">
                This digital-physical hybrid approach significantly increases perceived value and conversion rates,
                as evidenced by Twin Atlas's six-figure early revenue.
              </p>
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'roadmap',
      label: 'Implementation Roadmap',
      content: (
        <>
          <Card className="mt-4 mb-4">
            <h3 className="text-base font-bold mb-3">Phased Implementation Strategy</h3>
            <div className="text-sm leading-relaxed text-[#8a8a8a]">
              Strategic rollout minimising risk whilst building towards full Roblox-Shopify integration.
              Each phase builds on previous success and community feedback.
            </div>
          </Card>

          {phaseRoadmap.map((phase, idx) => (
            <Card key={idx} variant={idx === 0 ? 'default' : 'default'} className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-sm font-bold text-[#ff2d9b]">{phase.phase}</h4>
                <span className="text-[9px] bg-[#ff2d9b]/20 text-[#ff2d9b] px-2 py-1 rounded-full font-bold">
                  PHASE {idx + 1}
                </span>
              </div>

              <div className="mb-3">
                <div className="text-xs font-bold mb-2">Key Actions:</div>
                <ul className="text-xs pl-5 list-disc leading-loose space-y-1">
                  {phase.actions.map((action, actionIdx) => (
                    <li key={actionIdx}>{action}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2dffb5]/10 p-3 rounded-lg border-l-[3px] border-[#2dffb5]">
                <div className="text-[11px] font-bold text-[#2dffb5] mb-1">OUTCOME</div>
                <div className="text-xs">{phase.outcome}</div>
              </div>
            </Card>
          ))}

          <Card variant="success" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Technical Requirements Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-bold mb-2 text-[#2dffb5]">Immediate (Phase 1):</div>
                <ul className="pl-4 list-disc leading-loose">
                  <li>Shopify store (£25/month minimum)</li>
                  <li>IV Creative fulfilment setup</li>
                  <li>Domain name (£10/year)</li>
                  <li>Initial product mockup designs</li>
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2 text-[#2dffb5]">Advanced (Phase 2-3):</div>
                <ul className="pl-4 list-disc leading-loose">
                  <li>Roblox AMP approval</li>
                  <li>Developer for Commerce API integration</li>
                  <li>3D model export system development</li>
                  <li>Custom 3D printing partnership</li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <div className="flex items-center justify-between mb-4">
        <Header
          title="Restaurant Tycoon 3 Merchandise Strategy"
          tag="Roblox E-Commerce Integration Proposal"
          logoPath="/assets/ivlogo.png"
        />
        <DownloadPDF />
      </div>

      <Hero
        kicker="Restaurant Tycoon 3 - Roblox to Reality"
        title="Automated Merchandise Store with In-Game Integration"
        subtitle="Comprehensive strategy for launching a Shopify-powered merchandise store for Restaurant Tycoon 3, leveraging Roblox's official Commerce API integration (launched May 2025) to enable seamless in-game purchases of personalised physical products delivered directly to players worldwide."
      />

      <Tabs tabs={tabs} defaultTab="overview" />

      {/* Bottom Summary */}
      <Card variant="success" className="mt-6">
        <div className="text-[13px] leading-relaxed space-y-3">
          <div>
            <strong>Strategic Recommendation:</strong> Launch immediately with <strong>Phase 1</strong> – IV Creative's full-service print-on-demand solution. This requires zero partnerships, has no approval barriers, and can generate revenue within 2-4 weeks. Marketing to Restaurant Tycoon 3's 112M+ player community via social media (Discord, X, Instagram, TikTok) provides immediate reach.
          </div>
          <div>
            <strong>Phase 2 (Roblox Integration):</strong> Whilst technically possible (Roblox Commerce API launched May 2025), this requires partnership with Ultraw Games (RT3 developer) + Roblox Approved Merchandiser Programme approval. <span className="text-[#ff2d9b]">Recommend pursuing only after Phase 1 demonstrates market demand.</span> Use early sales data to approach Ultraw with partnership proposal.
          </div>
          <div>
            <strong>Phase 3 (3D Models):</strong> Long-term possibility requiring deep developer cooperation and complex technical integration. <span className="text-[#8a8a8a]">Consider only if Phases 1-2 prove highly successful.</span>
          </div>
          <div className="text-xs italic text-[#8a8a8a] pt-2 border-t border-white/10">
            <strong>Honest Assessment:</strong> IV Creative can deliver Phase 1 immediately with proven capabilities (7,500+ projects, major brand clients). Phases 2-3 are aspirational opportunities requiring external partnerships beyond IV Creative's direct control.
          </div>
        </div>
      </Card>

      <div className="text-center mt-6 text-[#8a8a8a] text-xs">
        Restaurant Tycoon 3 Merchandise Strategy | Prepared by IV Creative | November 2025 | iv-creative.co.uk
      </div>
    </div>
  );
}
