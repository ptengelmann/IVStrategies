'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Tabs, Tab } from '@/components/Tabs';
import { Card } from '@/components/Card';
import { SparklesIcon, TrendingUpIcon, MapPinIcon } from '@/components/icons';

export default function CandelabraConcertsStrategy() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      const clientId = session?.user?.id || '';
      const allowedClients = ['candelabra-concerts', 'admin'];

      if (!allowedClients.includes(clientId)) {
        router.push('/');
      }
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  // Business Overview
  const businessOverview = {
    name: "Candelabra Concerts",
    type: "Candlelit chamber concerts in historic churches",
    format: "String quartet performances - film themes & seasonal classics",
    currentLocations: "Chipping Norton, Bicester (with expansion potential)",
    contact: "+44 7379 309978 | hello@candelabraconcerts.com",
    socialProof: "£1 from every ticket donated to local arts organisations",
    currentSocial: "Instagram (@candelabra_concerts), Facebook presence"
  };

  // Critical Issues Identified
  const criticalIssues = [
    {
      issue: "Website Trust Problem",
      severity: "CRITICAL",
      detail: "Current website does not inspire confidence for purchasing £30+ concert tickets. In experiential entertainment, your website IS your shop window. Poor design = lost ticket sales.",
      impact: "Estimated 40-60% of potential customers bounce before considering purchase"
    },
    {
      issue: "Checkout Experience is Poor",
      severity: "HIGH",
      detail: "While cards are accepted (Visa, Amex), the checkout page itself is dated and unprofessional - duplicated content, basic design, no Apple Pay or Google Pay. For a £30 'premium experience', the checkout screams amateur.",
      impact: "Poor checkout UX causes 20-30% cart abandonment - people lose confidence at the final step"
    },
    {
      issue: "Competing Against a Giant",
      severity: "HIGH",
      detail: "Fever's Candlelight Concerts has 1.3M Instagram followers, operates in 100+ cities, and dominates search results. They've essentially defined this category.",
      impact: "Direct competition for the same keywords and audience attention"
    },
    {
      issue: "Minimal Social Presence",
      severity: "HIGH",
      detail: "This industry is 100% visual and experiential. Fever built their empire on Instagram/TikTok content. Without strong social, you're invisible to the target demographic.",
      impact: "Missing primary discovery channel for 25-45 year old target audience"
    }
  ];

  // Competitive Analysis
  const competitors = [
    {
      name: "Fever Candlelight Concerts",
      scale: "Global - 100+ cities, 1.3M Instagram followers",
      strengths: "Massive brand recognition, premium venues, slick booking, heavy social media marketing, £20-50 ticket range",
      weaknesses: "Corporate feel, less intimate, often larger venues, LED candles not real",
      threat: "DOMINANT"
    },
    {
      name: "Sofar Sounds",
      scale: "Global - 400+ cities since 2009",
      strengths: "Secret/surprise element, strong community, unique venues",
      weaknesses: "Different format (various genres), less visual consistency",
      threat: "MODERATE"
    },
    {
      name: "London Concertante",
      scale: "UK - 30+ years established",
      strengths: "Strong reputation, professional musicians, established audience",
      weaknesses: "Traditional marketing, older demographic",
      threat: "LOW"
    }
  ];

  // Unique Positioning Opportunities
  const positioningOpportunities = [
    {
      angle: "Authentic Historic Churches",
      detail: "Unlike Fever who use various venues (hotels, galleries, event spaces), Candelabra focuses on historic churches. This is heritage + music combined.",
      messaging: "'Real candlelight in centuries-old churches' vs 'LED candles in a hotel ballroom'"
    },
    {
      angle: "Intimate & Authentic",
      detail: "Fever shows can have 200+ people. Church settings naturally limit capacity. This is intimate, not industrial. Quality over quantity.",
      messaging: "'An intimate evening, not a mass event'"
    },
    {
      angle: "Film Score Specialism",
      detail: "Double down on film music niche. Hans Zimmer, John Williams, movie classics. This has broader appeal than pure classical.",
      messaging: "'Your favourite film moments, live by candlelight'"
    }
  ];

  // Phase 0: Foundation (Must-Do First)
  const phase0 = {
    name: "Phase 0: Fix the Foundations",
    budget: "£2,500-4,000 one-off",
    duration: "2-4 weeks",
    priority: "DO THIS BEFORE ANY MARKETING",
    items: [
      {
        item: "Website Rebuild",
        detail: "Professional, atmospheric website that matches the experience you're selling. Dark theme, beautiful imagery, seamless booking flow. Mobile-first. This is non-negotiable.",
        specifics: [
          "Hero video/imagery of candlelit performances",
          "Clear event calendar with easy booking",
          "Social proof: reviews, photos, testimonials",
          "About section building trust (who are the musicians?)",
          "Mobile-responsive (70%+ traffic will be mobile)"
        ]
      },
      {
        item: "Checkout Experience Overhaul",
        detail: "Current checkout is dated and clunky. Needs modern, seamless checkout flow that matches a premium experience. Add Apple Pay / Google Pay for frictionless mobile purchases.",
        specifics: [
          "Clean, single-column checkout flow",
          "Apple Pay / Google Pay integration",
          "Mobile-optimised design (most ticket purchases are impulse/mobile)",
          "Clear order summary and pricing",
          "Branded confirmation emails with calendar integration"
        ]
      },
      {
        item: "Professional Photography",
        detail: "One proper shoot at a candlelit performance. This content will fuel everything - website, social, ads. Cannot market an atmospheric experience with poor imagery.",
        specifics: [
          "Wide shots capturing venue + candles + audience",
          "Close-ups of musicians performing",
          "Audience reactions (with consent)",
          "Venue exterior at dusk/evening"
        ]
      },
      {
        item: "Review Collection System",
        detail: "Post-event email sequence asking for Google reviews. You need 50+ reviews to compete. Currently likely have minimal.",
        specifics: [
          "Automated email 24hr post-event",
          "Direct link to Google review",
          "Optional: incentive for photo reviews"
        ]
      }
    ],
    honestAssessment: "Spending money on marketing with the current website is like putting premium fuel in a car with flat tyres. Fix foundations first. Every pound spent on ads driving to a poor website is wasted."
  };

  // Package Option 1: £3,500
  const package3500 = {
    name: "Growth Package",
    price: "£3,500/month",
    description: "Social media presence, local SEO, and foundational paid advertising to drive ticket sales.",
    includes: [
      "Instagram & Facebook content management (12-16 posts/month)",
      "Reels and video content production",
      "Google Business Profile optimisation",
      "Local SEO and event listing management",
      "Meta (Facebook/Instagram) advertising campaigns",
      "Geo-targeted ads to surrounding areas",
      "Event-specific promotional campaigns",
      "Retargeting website visitors",
      "Monthly performance reporting",
      "Strategy calls and ongoing optimisation"
    ],
    expectedResults: {
      month3: "Events at 70-80% capacity, growing social following, appearing in local searches",
      month6: "Events selling out regularly, 1,500+ social followers, waitlists for popular dates",
      month12: "Consistent sellouts, strong brand recognition, expansion-ready"
    },
    suitableFor: "Operators ready to grow but wanting measured investment"
  };

  // Package Option 2: £5,000
  const package5000 = {
    name: "Scale Package",
    price: "£5,000/month",
    description: "Full-scale marketing operation with aggressive paid acquisition and brand building for maximum ticket sales.",
    includes: [
      "Instagram, Facebook & TikTok content management (20-24 posts/month)",
      "Professional Reels and TikTok production",
      "Influencer identification and partnership management",
      "Full SEO strategy with content marketing",
      "Blog content targeting experience-seekers",
      "Google Ads for high-intent searches",
      "Meta advertising with advanced targeting",
      "Lookalike audiences from ticket buyers",
      "A/B testing across all campaigns",
      "Partnership development (hotels, restaurants, tourism)",
      "Email marketing setup and automation",
      "Weekly performance reviews",
      "Dedicated strategy support"
    ],
    expectedResults: {
      month3: "Events selling out, 2,500+ social followers, strong ad performance, partnership pipeline",
      month6: "Consistent sellouts with waitlists, 5,000+ followers, multiple revenue streams",
      month12: "Regional brand recognition, expansion to new venues, premium pricing potential"
    },
    suitableFor: "Operators serious about building a significant entertainment brand"
  };

  // Social Media Essentials
  const socialEssentials = {
    whyEssential: [
      "Fever built a £100M+ business primarily through social content",
      "Candlelight concerts are VISUAL - the aesthetic IS the product",
      "Target demographic (25-45, couples, culture-seekers) live on Instagram",
      "TikTok/Reels are discovery engines - this is how new audiences find you",
      "No social presence = 'Is this even real?' in potential customers' minds"
    ],
    platforms: [
      {
        platform: "Instagram",
        priority: "PRIMARY",
        reason: "Core discovery platform for experiences. Reels algorithm favours atmospheric content."
      },
      {
        platform: "TikTok",
        priority: "HIGH",
        reason: "Younger audience, viral potential. Film score content performs exceptionally well here."
      },
      {
        platform: "Facebook",
        priority: "MEDIUM",
        reason: "Event discovery, older demographic (35-55), essential for ads platform."
      }
    ]
  };

  // Next Steps
  const nextSteps = [
    {
      step: 1,
      action: "Acknowledge the foundations problem",
      detail: "Website and payment must be fixed first. No marketing spend until this is done - it would be wasted money."
    },
    {
      step: 2,
      action: "Invest in professional photography",
      detail: "Book a shoot at your next event. This content is essential for everything that follows - website, social, ads."
    },
    {
      step: 3,
      action: "Website rebuild",
      detail: "Professional, atmospheric website with proper payment integration. This is the foundation all marketing builds upon."
    },
    {
      step: 4,
      action: "Choose your marketing package",
      detail: "£3,500/month for measured growth, £5,000/month for aggressive scaling. Both focused on the goal: selling more tickets."
    },
    {
      step: 5,
      action: "Launch social presence",
      detail: "Establish consistent posting before any paid advertising. Build credibility that validates ad spend."
    },
    {
      step: 6,
      action: "Activate paid campaigns",
      detail: "Once foundations are solid, paid advertising accelerates ticket sales with targeted reach to your ideal audience."
    }
  ];

  const tabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview & Issues',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPinIcon className="text-[#ff2d9b]" size={24} />
              <h3 className="text-base font-bold">Candelabra Concerts - Business Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Format</div>
                <div className="text-sm font-semibold">{businessOverview.type}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Performance Style</div>
                <div className="text-sm font-semibold">{businessOverview.format}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Current Locations</div>
                <div className="text-sm font-semibold">{businessOverview.currentLocations}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Social Impact</div>
                <div className="text-sm font-semibold text-[#2dffb5]">{businessOverview.socialProof}</div>
              </div>
            </div>
          </Card>

          <Card variant="gradient" className="mt-4">
            <h3 className="text-base font-bold mb-4 text-[#ff2d9b]">Critical Issues Identified</h3>
            <p className="text-xs text-[#8a8a8a] mb-4">These foundational problems are currently blocking ticket sales. Marketing cannot fix a broken shop window.</p>

            {criticalIssues.map((issue, idx) => (
              <div key={idx} className={`p-4 rounded-lg mb-3 border-l-[3px] ${
                issue.severity === 'CRITICAL' ? 'bg-red-500/10 border-red-500' : 'bg-[#ff2d9b]/10 border-[#ff2d9b]'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-bold">{issue.issue}</div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                    issue.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-[#ff2d9b]/20 text-[#ff2d9b]'
                  }`}>
                    {issue.severity}
                  </span>
                </div>
                <p className="text-xs mb-2">{issue.detail}</p>
                <div className="text-[11px] text-[#8a8a8a]">
                  <strong>Impact:</strong> {issue.impact}
                </div>
              </div>
            ))}
          </Card>

          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Competitive Landscape</h3>

            {competitors.map((comp, idx) => (
              <div key={idx} className={`p-4 rounded-lg mb-3 border-l-[3px] ${
                comp.threat === 'DOMINANT' ? 'bg-red-500/10 border-red-500' :
                comp.threat === 'MODERATE' ? 'bg-[#ff2d9b]/10 border-[#ff2d9b]' :
                'bg-white/[0.02] border-[#8a8a8a]'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-bold">{comp.name}</div>
                    <div className="text-[11px] text-[#8a8a8a]">{comp.scale}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                    comp.threat === 'DOMINANT' ? 'bg-red-500/20 text-red-400' :
                    comp.threat === 'MODERATE' ? 'bg-[#ff2d9b]/20 text-[#ff2d9b]' :
                    'bg-white/10 text-[#8a8a8a]'
                  }`}>
                    {comp.threat} THREAT
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-3">
                  <div className="bg-[#2dffb5]/10 p-2 rounded-md">
                    <strong className="text-[#2dffb5]">Strengths:</strong> {comp.strengths}
                  </div>
                  <div className="bg-[#ff2d9b]/10 p-2 rounded-md">
                    <strong className="text-[#ff2d9b]">Weaknesses:</strong> {comp.weaknesses}
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card variant="success" className="mt-4">
            <h4 className="text-sm font-bold mb-3">How to Compete: Positioning Opportunities</h4>
            <p className="text-xs text-[#8a8a8a] mb-4">You cannot out-spend Fever. You must out-position them.</p>

            {positioningOpportunities.map((opp, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#2dffb5]">
                <div className="text-sm font-bold text-[#2dffb5] mb-2">{opp.angle}</div>
                <p className="text-xs mb-2">{opp.detail}</p>
                <div className="bg-[#2dffb5]/10 p-2 rounded-md text-[11px]">
                  <strong>Messaging:</strong> {opp.messaging}
                </div>
              </div>
            ))}
          </Card>
        </>
      )
    },
    {
      id: 'foundations',
      label: 'Foundations',
      content: (
        <>
          <Card variant="gradient" className="mt-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#ff2d9b]">{phase0.name}</h3>
                <div className="text-lg font-bold mt-1">{phase0.budget}</div>
              </div>
              <span className="text-[10px] bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full font-bold">
                {phase0.priority}
              </span>
            </div>

            <p className="text-sm text-[#8a8a8a] mb-4">Duration: {phase0.duration}</p>

            {phase0.items.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#ff2d9b]">
                <div className="text-sm font-bold mb-2">{item.item}</div>
                <p className="text-xs mb-3">{item.detail}</p>
                <ul className="text-xs leading-loose pl-4 list-disc space-y-1">
                  {item.specifics.map((spec, sIdx) => (
                    <li key={sIdx}>{spec}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3 text-[#ff2d9b]">Why Foundations First?</h4>
            <p className="text-xs leading-relaxed">{phase0.honestAssessment}</p>
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-3">Website Requirements Checklist</h4>
            <div className="space-y-2">
              {[
                "Dark, atmospheric design matching candlelit aesthetic",
                "Hero section with video or high-quality imagery",
                "Clear 'Book Now' CTA above the fold",
                "Event calendar with availability",
                "Seamless checkout with Apple Pay / Google Pay",
                "Mobile-responsive (test on iPhone/Android)",
                "Fast loading (under 3 seconds)",
                "Clear pricing - no surprises at checkout",
                "About section: Who are the musicians?",
                "Social proof: reviews, testimonials, photos",
                "SSL certificate (https://)",
                "Google Analytics + conversion tracking"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded border border-[#ff2d9b] flex-shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'packages',
      label: 'Marketing Packages',
      content: (
        <>
          <Card className="mt-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUpIcon className="text-[#ff2d9b]" size={24} />
              <h3 className="text-base font-bold">Goal: Increase Ticket Sales</h3>
            </div>
            <p className="text-sm text-[#8a8a8a]">
              Both packages are designed with one objective: selling more tickets. Choose based on how aggressively you want to grow.
            </p>
          </Card>

          {/* Package 1: £3,500 */}
          <Card className="mb-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{package3500.name}</h3>
                <div className="text-2xl font-bold text-[#ff2d9b] mt-1">{package3500.price}</div>
              </div>
              <span className="text-[10px] bg-[#ff2d9b]/20 text-[#ff2d9b] px-3 py-1.5 rounded-full font-bold">
                GROWTH
              </span>
            </div>

            <p className="text-sm text-[#8a8a8a] mb-4">{package3500.description}</p>

            <div className="bg-white/[0.02] p-4 rounded-lg mb-4 border-l-[3px] border-[#ff2d9b]">
              <div className="text-sm font-bold mb-3">What's Included:</div>
              <ul className="text-xs leading-loose pl-4 list-disc space-y-1">
                {package3500.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#ff2d9b]/10 p-4 rounded-lg">
              <h4 className="text-sm font-bold mb-3">Expected Results</h4>
              <div className="space-y-2">
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 3</div>
                  <div className="text-xs">{package3500.expectedResults.month3}</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 6</div>
                  <div className="text-xs">{package3500.expectedResults.month6}</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 12</div>
                  <div className="text-xs">{package3500.expectedResults.month12}</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#8a8a8a] mt-4 p-3 bg-white/[0.02] rounded-lg">
              <strong>Best for:</strong> {package3500.suitableFor}
            </div>
          </Card>

          {/* Package 2: £5,000 */}
          <Card className="mb-4" variant="success">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#2dffb5]">{package5000.name}</h3>
                <div className="text-2xl font-bold mt-1">{package5000.price}</div>
              </div>
              <span className="text-[10px] bg-[#2dffb5]/20 text-[#2dffb5] px-3 py-1.5 rounded-full font-bold">
                RECOMMENDED
              </span>
            </div>

            <p className="text-sm text-[#8a8a8a] mb-4">{package5000.description}</p>

            <div className="bg-white/[0.02] p-4 rounded-lg mb-4 border-l-[3px] border-[#2dffb5]">
              <div className="text-sm font-bold mb-3">What's Included:</div>
              <ul className="text-xs leading-loose pl-4 list-disc space-y-1">
                {package5000.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#2dffb5]/10 p-4 rounded-lg">
              <h4 className="text-sm font-bold mb-3">Expected Results</h4>
              <div className="space-y-2">
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#2dffb5] mb-1">Month 3</div>
                  <div className="text-xs">{package5000.expectedResults.month3}</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#2dffb5] mb-1">Month 6</div>
                  <div className="text-xs">{package5000.expectedResults.month6}</div>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-lg">
                  <div className="text-xs font-bold text-[#2dffb5] mb-1">Month 12</div>
                  <div className="text-xs">{package5000.expectedResults.month12}</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#8a8a8a] mt-4 p-3 bg-white/[0.02] rounded-lg">
              <strong>Best for:</strong> {package5000.suitableFor}
            </div>
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Why Social Media is Essential</h4>
            <ul className="space-y-2">
              {socialEssentials.whyEssential.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <SparklesIcon className="text-[#ff2d9b] flex-shrink-0 mt-0.5" size={14} />
                  <span className="text-xs">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs font-bold mb-3">Platform Priority:</div>
              <div className="space-y-2">
                {socialEssentials.platforms.map((platform, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className={`px-2 py-1 rounded font-bold ${
                      platform.priority === 'PRIMARY' ? 'bg-[#ff2d9b]/20 text-[#ff2d9b]' :
                      platform.priority === 'HIGH' ? 'bg-[#2dffb5]/20 text-[#2dffb5]' :
                      'bg-white/10 text-[#8a8a8a]'
                    }`}>{platform.platform}</span>
                    <span className="text-[#8a8a8a]">{platform.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'next-steps',
      label: 'Next Steps',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUpIcon className="text-[#2dffb5]" size={24} />
              <div>
                <h3 className="text-base font-bold">Primary Goal</h3>
                <p className="text-xl font-bold text-[#2dffb5]">Increase Ticket Sales</p>
              </div>
            </div>
            <p className="text-sm text-[#8a8a8a]">
              Every recommendation in this strategy is designed to drive more ticket sales. From fixing the website to social media content - it all funnels toward getting more people through the door.
            </p>
          </Card>

          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Action Plan</h3>

            {nextSteps.map((step, idx) => (
              <div key={idx} className="flex gap-4 mb-4 last:mb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff2d9b] flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="flex-1 pb-4 border-b border-white/10 last:border-0">
                  <div className="text-sm font-bold mb-1">{step.action}</div>
                  <p className="text-xs text-[#8a8a8a]">{step.detail}</p>
                </div>
              </div>
            ))}
          </Card>

          <Card variant="success" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Investment Summary</h4>
            <div className="space-y-3">
              <div className="bg-white/[0.02] p-4 rounded-lg border-l-[3px] border-[#ff2d9b]">
                <div className="text-sm font-bold mb-1">Foundation Investment (One-off)</div>
                <div className="text-lg font-bold text-[#ff2d9b]">£2,500 - £4,000</div>
                <p className="text-xs text-[#8a8a8a] mt-1">Website rebuild, payment integration, professional photography</p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-lg border-l-[3px] border-[#2dffb5]">
                <div className="text-sm font-bold mb-1">Monthly Marketing</div>
                <div className="text-lg font-bold text-[#2dffb5]">£3,500 or £5,000/month</div>
                <p className="text-xs text-[#8a8a8a] mt-1">Choose based on growth ambition and budget</p>
              </div>
            </div>
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-3">Ready to Start?</h4>
            <div className="text-xs leading-relaxed space-y-3">
              <p>
                The path forward is clear: fix the foundations, then invest in marketing that drives ticket sales.
              </p>
              <p>
                <strong>Without these changes:</strong> Events will continue to struggle with attendance, losing potential customers at every stage - from discovery to checkout.
              </p>
              <p>
                <strong>With these changes:</strong> A professional presence that converts browsers into ticket buyers, with marketing that reaches the right audience and gives them confidence to book.
              </p>
            </div>

            <div className="mt-4 p-4 bg-[#ff2d9b]/10 rounded-lg border-l-[3px] border-[#ff2d9b]">
              <div className="text-sm font-bold mb-2">Book a Strategy Call</div>
              <p className="text-xs text-[#8a8a8a]">
                Discuss your specific situation, timeline, and which package is right for your goals.
              </p>
            </div>
          </Card>
        </>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        title="Candelabra Concerts Digital Marketing Strategy"
        tag="IV Strategies Client Proposal 2025"
        logoPath="/assets/ivlogo.png"
      />

      <Hero
        kicker="Candelabra Concerts - Strategic Assessment"
        title="Marketing Strategy to Increase Ticket Sales"
        subtitle="Addressing critical website and trust issues, then deploying targeted marketing to fill every seat at every show."
      />

      <Tabs tabs={tabs} defaultTab="overview" />

      {/* Bottom Summary */}
      <Card variant="success" className="mt-6">
        <div className="text-[13px] leading-relaxed space-y-3">
          <div>
            <strong>The Goal:</strong> Increase ticket sales through professional digital presence and targeted marketing.
          </div>
          <div>
            <strong>The Challenge:</strong> Current website doesn't inspire trust, PayPal-only creates friction, and you're competing against Fever's 1.3M Instagram followers.
          </div>
          <div>
            <strong>The Path Forward:</strong> Fix foundations first (£2.5-4k one-off), then choose your marketing package (£3,500 or £5,000/month) to drive consistent sellouts.
          </div>
        </div>
      </Card>

      <div className="text-center mt-6 text-[#8a8a8a] text-xs">
        Candelabra Concerts Digital Marketing Strategy | Prepared by IV Strategies | December 2025 | iv-creative.co.uk
      </div>
    </div>
  );
}
