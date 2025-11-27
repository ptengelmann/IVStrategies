'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Tabs, Tab } from '@/components/Tabs';
import { Card } from '@/components/Card';
import { SparklesIcon, TrendingUpIcon, GlobeIcon, MapPinIcon } from '@/components/icons';

export default function TimelessTreatmentsStrategy() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check if user has access to this project
  useEffect(() => {
    if (status === 'authenticated') {
      const clientId = session?.user?.id || '';
      const allowedClients = ['timeless-treatments', 'admin'];

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
    name: "Timeless Treatments",
    location: "3 Lodge Road, Radcliffe, Manchester M26 1AL",
    type: "Nurse-led aesthetic clinic",
    established: "2012",
    team: "Helen O'Donoghue & Louise Harrison - Nurse Practitioners with 30+ years combined expertise",
    positioning: "Professional, natural results, personalised care",
    launchDate: "Physical launch 2026"
  };

  // Services Offered
  const services = [
    {
      category: "Face & Skin Rejuvenation",
      treatments: ["Anti-wrinkle injections", "Vampire therapy (PRP)", "Polynucleotides", "Skin boosters"],
      avgValue: "£200-400"
    },
    {
      category: "Body Contouring",
      treatments: ["Fat-dissolving injections", "Underarm anti-sweat injections", "Vitamin B12 injections"],
      avgValue: "£150-300"
    },
    {
      category: "Enhancements",
      treatments: ["Lip fillers", "Dermal fillers", "Cheek fillers", "Jawline fillers", "Tear trough fillers"],
      avgValue: "£200-450"
    }
  ];

  // Package Option 1: £3,000/month Foundation
  const package3k = {
    name: "Foundation Package",
    price: "£3,000/month",
    description: "Comprehensive SEO & Social strategy for sustainable organic growth",
    breakdown: [
      {
        service: "SEO & Local Optimisation",
        allocation: "£1,200/month",
        activities: [
          "Full technical SEO audit and fixes",
          "Google Business Profile optimisation",
          "Local citation building (Yell, Thomson, NHS directories)",
          "Content targeting 'aesthetics clinic Manchester', 'lip fillers Radcliffe', 'anti-wrinkle injections Bolton'",
          "Monthly blog content (2-3 articles) targeting long-tail keywords",
          "Schema markup for medical services",
          "Review generation strategy"
        ]
      },
      {
        service: "Social Media Management",
        allocation: "£1,200/month",
        activities: [
          "Content calendar (12-16 posts/month across Instagram & Facebook)",
          "Before/after galleries (with consent)",
          "Educational content about treatments",
          "Team introductions and clinic behind-the-scenes",
          "Story templates and highlights setup",
          "Community management and engagement",
          "Monthly analytics reporting"
        ]
      },
      {
        service: "Strategy & Reporting",
        allocation: "£600/month",
        activities: [
          "Monthly strategy calls",
          "Competitor analysis",
          "Performance reporting dashboard",
          "Conversion tracking setup",
          "Ongoing optimisation recommendations"
        ]
      }
    ],
    timeline: "6-9 months to meaningful organic traffic",
    expectedResults: {
      month3: "Google Business Profile optimised, initial rankings for long-tail keywords, social presence established",
      month6: "Page 2-3 rankings for competitive terms, growing social following, first organic enquiries",
      month9: "Page 1 rankings for local terms, consistent organic leads, 15-25 bookings/month from digital",
      month12: "Strong local authority, 30-50 bookings/month from digital channels"
    },
    honestAssessment: "This is a growth-focused budget, not a revenue-generating budget initially. Organic takes time but compounds. You won't hit £30k/month from this alone in year one - but it builds the foundation for sustainable, lower-cost acquisition long-term."
  };

  // Phased Growth Strategy
  const phasedStrategy = [
    {
      phase: "Pre-Launch Phase (Now → Physical Launch 2026)",
      budget: "£3,000/month",
      duration: "3-6 months before launch",
      focus: "Buzz Generation & Authority Building",
      activities: [
        "Website SEO foundation (so you rank when people search post-launch)",
        "Social media presence building - establish following before doors open",
        "Content marketing: educational posts, team introductions, clinic build-out content",
        "'Coming Soon' campaign with email capture for launch offers",
        "Local PR outreach to Manchester lifestyle publications",
        "Google Business Profile setup and optimisation (can go live before physical launch)"
      ],
      goals: [
        "500+ social media followers",
        "200+ email subscribers for launch",
        "Initial keyword rankings established",
        "Local awareness in Radcliffe/Bolton/Bury area"
      ],
      realisticOutcome: "No revenue (pre-launch), but building the audience and SEO foundation that will generate leads from day one of opening."
    },
    {
      phase: "Phase 1: Launch (Months 1-3)",
      budget: "£3,500-4,000/month",
      duration: "First 3 months post-launch",
      focus: "Validate & Generate Initial Bookings",
      activities: [
        "Launch campaign across all channels",
        "Paid ads introduction: £800-1,000/month Meta ads (hyper-local targeting)",
        "Google Ads for high-intent searches: 'lip fillers near me', 'botox Manchester'",
        "Launch offer promotion (existing 10% off for new clients)",
        "Intensive review collection from early clients",
        "Retargeting setup for website visitors"
      ],
      goals: [
        "30-50 bookings/month",
        "£7,500-12,500 revenue/month",
        "Validate offer-market fit",
        "Collect testimonials and before/afters"
      ],
      realisticOutcome: "Won't hit £30k yet, but establishing proof of concept and gathering crucial social proof."
    },
    {
      phase: "Phase 2: Growth (Months 4-6)",
      budget: "£5,000-6,000/month",
      duration: "Months 4-6 post-launch",
      focus: "Scale What's Working",
      activities: [
        "Double down on converting ad campaigns",
        "Introduce Google Ads for high-intent searches",
        "Referral programme launch (huge in aesthetics - offer £50 off for referrer & referee)",
        "Email marketing automation (rebooking reminders, treatment series)",
        "Video content: treatment walkthroughs, client testimonials",
        "Influencer/micro-influencer partnerships (local Manchester influencers)"
      ],
      goals: [
        "70-100 bookings/month",
        "£17,500-25,000 revenue/month",
        "30%+ rebooking rate",
        "Strong review profile (50+ Google reviews)"
      ],
      realisticOutcome: "Approaching profitability target. Organic starting to contribute meaningfully."
    },
    {
      phase: "Phase 3: Scale (Months 7-12)",
      budget: "£7,000-8,000/month",
      duration: "Months 7-12 post-launch",
      focus: "Full Flywheel & £30k Target",
      activities: [
        "Full paid + organic flywheel operating",
        "Lookalike audiences from best customers",
        "Advanced retargeting (treatment-specific)",
        "Loyalty programme for repeat clients",
        "Seasonal campaigns (wedding season, Christmas parties)",
        "Potential second practitioner if demand exceeds capacity"
      ],
      goals: [
        "120-150 bookings/month",
        "£30,000+ revenue/month",
        "40%+ rebooking rate",
        "Blended CAC under £50"
      ],
      realisticOutcome: "£30k/month achievable with full strategy execution and capacity to deliver."
    }
  ];

  // ROI Analysis
  const roiAnalysis = {
    assumptions: [
      "Average treatment value: £250",
      "Customer acquisition cost (blended): £60",
      "Rebooking rate: 45% within 6 months",
      "Lifetime value per client: £400-600 (initial + rebook)"
    ],
    monthlyBreakdown: [
      {
        month: "Month 3",
        adSpend: "£1,000",
        newClients: "~17 (from ads)",
        organicClients: "~5",
        totalBookings: "35-40",
        revenue: "£8,750-10,000",
        netAfterMarketing: "£5,250-6,500"
      },
      {
        month: "Month 6",
        adSpend: "£2,000",
        newClients: "~33 (from ads)",
        organicClients: "~20",
        totalBookings: "70-85",
        revenue: "£17,500-21,250",
        netAfterMarketing: "£11,500-15,250"
      },
      {
        month: "Month 12",
        adSpend: "£3,000",
        newClients: "~50 (from ads)",
        organicClients: "~40",
        totalBookings: "130-150",
        revenue: "£32,500-37,500",
        netAfterMarketing: "£24,500-29,500"
      }
    ],
    keyInsight: "The compounding effect of rebookings + organic growth means marketing efficiency improves significantly over time. Early months are investment; later months are harvest."
  };

  // Competitive Landscape
  const competitiveLandscape = [
    {
      competitor: "Skin Manchester (City Centre)",
      strengths: "Prime location, established brand, strong Google presence",
      weakness: "Higher prices, less personal service"
    },
    {
      competitor: "The Aesthetics Clinic Bolton",
      strengths: "Good local SEO, active social media",
      weakness: "Not nurse-led, less medical credibility"
    },
    {
      competitor: "Various Radcliffe/Bury beauticians",
      strengths: "Local, often cheaper",
      weakness: "Not qualified practitioners, no prescribing rights"
    }
  ];

  // Timeless Treatments USPs
  const uniqueSellingPoints = [
    {
      usp: "Nurse-Led Clinic",
      detail: "Both practitioners are qualified Nurse Practitioners with prescribing rights - not beauticians. This is a significant trust and safety differentiator."
    },
    {
      usp: "30+ Years Combined Experience",
      detail: "Established since 2012. Longevity builds trust in aesthetics where trends come and go."
    },
    {
      usp: "Natural Results Philosophy",
      detail: "'Aesthetic care that feels personal and precise' - appeals to clients wanting subtle enhancement, not obvious work."
    },
    {
      usp: "Free Consultation + 2-Week Review",
      detail: "Low-risk entry point. Complimentary review shows confidence in results and aftercare commitment."
    },
    {
      usp: "Local to Radcliffe/Bolton/Bury",
      detail: "Underserved area for premium aesthetics. Most competition is city centre Manchester - 30+ min away."
    }
  ];

  // What £3k Doesn't Include (Honest)
  const limitations = [
    "Paid advertising budget (Meta/Google) - this is separate",
    "Video production (beyond basic social content)",
    "Professional photography (initial shoot recommended separately ~£300-500)",
    "PR campaigns or influencer partnerships",
    "Printed materials or offline marketing"
  ];

  // Recommendations
  const recommendations = [
    {
      priority: "Essential",
      item: "Professional photography shoot",
      cost: "£300-500 one-off",
      reason: "Before/afters and clinic imagery are crucial for aesthetics marketing. Current website imagery is stock-heavy."
    },
    {
      priority: "Essential",
      item: "Review generation system",
      cost: "Included in package",
      reason: "Google reviews are the #1 trust signal for aesthetics clinics. Need 50+ to compete locally."
    },
    {
      priority: "Recommended",
      item: "Launch ad budget",
      cost: "£800-1,500/month",
      reason: "Organic alone won't generate volume quickly. Paid ads accelerate initial bookings."
    },
    {
      priority: "Nice to Have",
      item: "Referral programme setup",
      cost: "£50-100 per successful referral",
      reason: "Word of mouth is massive in aesthetics. Formalise it with tracked rewards."
    }
  ];

  const tabs: Tab[] = [
    {
      id: 'overview',
      label: 'Business Overview',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPinIcon className="text-[#ff2d9b]" size={24} />
              <h3 className="text-base font-bold">Timeless Treatments - Clinic Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Location</div>
                <div className="text-sm font-semibold">{businessOverview.location}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Clinic Type</div>
                <div className="text-sm font-semibold">{businessOverview.type}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Established</div>
                <div className="text-sm font-semibold">{businessOverview.established}</div>
              </div>
              <div className="bg-white/[0.02] p-4 rounded-lg">
                <div className="text-xs text-[#8a8a8a] mb-1">Physical Launch</div>
                <div className="text-sm font-semibold text-[#ff2d9b]">{businessOverview.launchDate}</div>
              </div>
            </div>

            <div className="bg-[#ff2d9b]/10 p-4 rounded-lg border-l-[3px] border-[#ff2d9b] mb-4">
              <div className="text-xs text-[#ff2d9b] font-bold mb-1">Team</div>
              <div className="text-sm">{businessOverview.team}</div>
            </div>

            <div className="text-xs leading-relaxed text-[#8a8a8a]">
              <strong>Brand Positioning:</strong> {businessOverview.positioning}. Emphasis on medical credibility, natural results, and honest consultation.
            </div>
          </Card>

          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Services & Average Treatment Values</h3>

            {services.map((service, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#2dffb5]">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-bold text-[#2dffb5]">{service.category}</div>
                  <span className="text-xs bg-[#2dffb5]/20 text-[#2dffb5] px-2 py-1 rounded-full font-semibold">
                    {service.avgValue}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.treatments.map((treatment, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-white/[0.05] px-2 py-1 rounded-full">
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Unique Selling Points</h4>
            <div className="space-y-3">
              {uniqueSellingPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <SparklesIcon className="text-[#ff2d9b] flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-bold text-[#ff2d9b]">{point.usp}</div>
                    <div className="text-xs text-[#8a8a8a]">{point.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'foundation',
      label: '£3k Foundation Package',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#2dffb5]">{package3k.name}</h3>
                <div className="text-2xl font-bold mt-1">{package3k.price}</div>
              </div>
              <span className="text-[10px] bg-[#2dffb5]/20 text-[#2dffb5] px-3 py-1.5 rounded-full font-bold">
                RECOMMENDED
              </span>
            </div>

            <p className="text-sm text-[#8a8a8a] mb-4">{package3k.description}</p>

            {package3k.breakdown.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#ff2d9b]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold">{item.service}</div>
                  <span className="text-xs bg-[#ff2d9b]/20 text-[#ff2d9b] px-2 py-1 rounded-full font-semibold">
                    {item.allocation}
                  </span>
                </div>
                <ul className="text-xs leading-loose pl-4 list-disc space-y-1">
                  {item.activities.map((activity, aIdx) => (
                    <li key={aIdx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-3">Expected Results Timeline</h4>
            <div className="space-y-3">
              <div className="bg-white/[0.02] p-3 rounded-lg">
                <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 3</div>
                <div className="text-xs">{package3k.expectedResults.month3}</div>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg">
                <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 6</div>
                <div className="text-xs">{package3k.expectedResults.month6}</div>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg">
                <div className="text-xs font-bold text-[#ff2d9b] mb-1">Month 9</div>
                <div className="text-xs">{package3k.expectedResults.month9}</div>
              </div>
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg border-l-[3px] border-[#2dffb5]">
                <div className="text-xs font-bold text-[#2dffb5] mb-1">Month 12</div>
                <div className="text-xs">{package3k.expectedResults.month12}</div>
              </div>
            </div>
          </Card>

          <Card variant="gradient" className="mt-4">
            <h4 className="text-sm font-bold mb-3 text-[#ff2d9b]">Honest Assessment</h4>
            <p className="text-xs leading-relaxed">{package3k.honestAssessment}</p>
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-3">What's NOT Included</h4>
            <p className="text-xs text-[#8a8a8a] mb-3">To set clear expectations, the £3k/month package does not include:</p>
            <ul className="text-xs leading-loose pl-4 list-disc space-y-1">
              {limitations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Card>
        </>
      )
    },
    {
      id: 'phased-growth',
      label: 'Phased Growth Strategy',
      content: (
        <>
          <Card className="mt-4 mb-4">
            <h3 className="text-base font-bold mb-3">The Path to £30k/Month</h3>
            <p className="text-sm text-[#8a8a8a]">
              A phased approach that matches investment to growth stage. Starting aggressive rarely works for new clinics -
              this builds sustainably whilst maintaining healthy ROI.
            </p>
          </Card>

          {phasedStrategy.map((phase, idx) => (
            <Card key={idx} className="mb-4" variant={idx === 3 ? 'success' : 'default'}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#ff2d9b]">{phase.phase}</h4>
                  <div className="text-lg font-bold text-[#2dffb5] mt-1">{phase.budget}</div>
                </div>
                <span className="text-[9px] bg-[#ff2d9b]/20 text-[#ff2d9b] px-2 py-1 rounded-full font-bold">
                  {phase.duration}
                </span>
              </div>

              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg mb-3">
                <div className="text-xs font-bold text-[#ff2d9b] mb-1">Focus</div>
                <div className="text-xs">{phase.focus}</div>
              </div>

              <div className="mb-3">
                <div className="text-xs font-bold mb-2">Key Activities:</div>
                <ul className="text-xs pl-4 list-disc leading-loose space-y-1">
                  {phase.activities.map((activity, aIdx) => (
                    <li key={aIdx}>{activity}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <div className="text-xs font-bold mb-2">Goals:</div>
                <div className="grid grid-cols-2 gap-2">
                  {phase.goals.map((goal, gIdx) => (
                    <div key={gIdx} className="text-[11px] bg-[#2dffb5]/10 text-[#2dffb5] p-2 rounded-md">
                      {goal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.02] p-3 rounded-lg border-l-[3px] border-[#8a8a8a]">
                <div className="text-[11px] font-bold text-[#8a8a8a] mb-1">REALISTIC OUTCOME</div>
                <div className="text-xs">{phase.realisticOutcome}</div>
              </div>
            </Card>
          ))}
        </>
      )
    },
    {
      id: 'the-math',
      label: 'The Math',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUpIcon className="text-[#ff2d9b]" size={24} />
              <h3 className="text-base font-bold">Revenue Target Analysis</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#ff2d9b]">£30k</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Monthly Target</div>
              </div>
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#2dffb5]">£250</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Avg Treatment</div>
              </div>
              <div className="bg-[#ff2d9b]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#ff2d9b]">120-150</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Bookings Needed</div>
              </div>
              <div className="bg-[#2dffb5]/10 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-[#2dffb5]">£60</div>
                <div className="text-[10px] text-[#8a8a8a] mt-1">Target CAC</div>
              </div>
            </div>

            <div className="bg-white/[0.02] p-4 rounded-lg mb-4">
              <h4 className="text-sm font-bold mb-3">Key Assumptions</h4>
              <ul className="text-xs leading-loose pl-4 list-disc">
                {roiAnalysis.assumptions.map((assumption, idx) => (
                  <li key={idx}>{assumption}</li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-4">Projected Monthly Performance</h4>

            {roiAnalysis.monthlyBreakdown.map((month, idx) => (
              <div key={idx} className={`p-4 rounded-lg mb-3 border-l-[3px] ${
                idx === 2 ? 'bg-[#2dffb5]/10 border-[#2dffb5]' : 'bg-white/[0.02] border-[#ff2d9b]'
              }`}>
                <div className="text-sm font-bold mb-3">{month.month}</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-[#8a8a8a]">Ad Spend</div>
                    <div className="font-semibold">{month.adSpend}</div>
                  </div>
                  <div>
                    <div className="text-[#8a8a8a]">New Clients (Paid)</div>
                    <div className="font-semibold">{month.newClients}</div>
                  </div>
                  <div>
                    <div className="text-[#8a8a8a]">Organic Clients</div>
                    <div className="font-semibold">{month.organicClients}</div>
                  </div>
                  <div>
                    <div className="text-[#8a8a8a]">Total Bookings</div>
                    <div className="font-semibold">{month.totalBookings}</div>
                  </div>
                  <div>
                    <div className="text-[#8a8a8a]">Revenue</div>
                    <div className="font-semibold text-[#2dffb5]">{month.revenue}</div>
                  </div>
                  <div>
                    <div className="text-[#8a8a8a]">Net (After Marketing)</div>
                    <div className="font-semibold text-[#2dffb5]">{month.netAfterMarketing}</div>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Key Insight</h4>
            <p className="text-xs leading-relaxed">{roiAnalysis.keyInsight}</p>
          </Card>
        </>
      )
    },
    {
      id: 'competition',
      label: 'Competitive Landscape',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <GlobeIcon className="text-[#ff2d9b]" size={24} />
              <h3 className="text-base font-bold">Local Competitive Analysis</h3>
            </div>

            {competitiveLandscape.map((competitor, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-lg mb-3 border-l-[3px] border-[#ff2d9b]">
                <div className="text-sm font-bold mb-2">{competitor.competitor}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#2dffb5]/10 p-2 rounded-md">
                    <strong className="text-[#2dffb5]">Strengths:</strong> {competitor.strengths}
                  </div>
                  <div className="bg-[#ff2d9b]/10 p-2 rounded-md">
                    <strong className="text-[#ff2d9b]">Weakness:</strong> {competitor.weakness}
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card variant="success" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Timeless Treatments' Competitive Advantage</h4>
            <div className="text-xs leading-relaxed space-y-2">
              <p>
                <strong>The nurse-led positioning is crucial.</strong> Many local competitors are beauticians offering aesthetic treatments -
                legally they cannot prescribe or perform certain procedures. Timeless Treatments has qualified Nurse Practitioners
                with prescribing rights.
              </p>
              <p>
                <strong>Geographic opportunity:</strong> Radcliffe, Bolton, and Bury are underserved for premium aesthetics.
                Most established clinics are in Manchester city centre - 30+ minutes away. Being local matters for repeat treatments.
              </p>
              <p>
                <strong>SEO opportunity:</strong> Local search terms like "lip fillers Radcliffe" and "botox Bolton" are less competitive
                than Manchester-wide terms. Easier to rank, more relevant traffic.
              </p>
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'recommendations',
      label: 'Recommendations',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Priority Recommendations</h3>

            {recommendations.map((rec, idx) => (
              <div key={idx} className={`p-4 rounded-lg mb-3 border-l-[3px] ${
                rec.priority === 'Essential' ? 'bg-[#ff2d9b]/10 border-[#ff2d9b]' :
                rec.priority === 'Recommended' ? 'bg-[#2dffb5]/10 border-[#2dffb5]' :
                'bg-white/[0.02] border-[#8a8a8a]'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm font-bold">{rec.item}</div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                    rec.priority === 'Essential' ? 'bg-[#ff2d9b]/20 text-[#ff2d9b]' :
                    rec.priority === 'Recommended' ? 'bg-[#2dffb5]/20 text-[#2dffb5]' :
                    'bg-white/10 text-[#8a8a8a]'
                  }`}>
                    {rec.priority}
                  </span>
                </div>
                <div className="text-xs mb-2">
                  <strong>Cost:</strong> {rec.cost}
                </div>
                <div className="text-xs text-[#8a8a8a]">
                  {rec.reason}
                </div>
              </div>
            ))}
          </Card>

          <Card variant="gradient" className="mt-4">
            <h4 className="text-sm font-bold mb-3 text-[#ff2d9b]">Our Recommendation</h4>
            <div className="text-xs leading-relaxed space-y-3">
              <p>
                <strong>Start with the £3,000/month Foundation Package now</strong> - even before physical launch.
                This builds your SEO foundation and social presence so you're not starting from zero when doors open.
              </p>
              <p>
                <strong>At launch, add £1,000-1,500/month in paid ads</strong> to generate immediate bookings whilst
                organic continues to build. The combination of paid (immediate results) + organic (long-term, lower cost)
                is the winning formula.
              </p>
              <p>
                <strong>Scale spend as revenue grows.</strong> Don't over-invest early. Let demand dictate pace.
                The goal is profitable growth, not vanity metrics.
              </p>
            </div>
          </Card>

          <Card className="mt-4">
            <h4 className="text-sm font-bold mb-3">Next Steps</h4>
            <ol className="text-xs leading-loose pl-4 list-decimal space-y-2">
              <li><strong>Book strategy call</strong> - Discuss timeline, goals, and any questions</li>
              <li><strong>Professional photography</strong> - Arrange clinic + team shoot (can do during build-out)</li>
              <li><strong>Kick-off SEO & social</strong> - Begin foundation work immediately</li>
              <li><strong>Plan launch campaign</strong> - Coordinate marketing with physical opening date</li>
              <li><strong>Set up tracking</strong> - Conversion tracking, analytics, reporting dashboard</li>
            </ol>
          </Card>
        </>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        title="Timeless Treatments Digital Marketing Proposal"
        tag="IV Strategies Client Proposal 2025"
        logoPath="/assets/ivlogo.png"
      />

      <Hero
        kicker="Timeless Treatments - Pre-Launch Digital Strategy"
        title="SEO & Social Media Strategy for Clinic Growth"
        subtitle="A realistic, phased digital marketing strategy to build buzz pre-launch and scale to £30k/month revenue. Foundation package at £3,000/month with clear growth pathway and honest projections."
      />

      <Tabs tabs={tabs} defaultTab="overview" />

      {/* Bottom Summary */}
      <Card variant="success" className="mt-6">
        <div className="text-[13px] leading-relaxed space-y-3">
          <div>
            <strong>The Opportunity:</strong> Timeless Treatments has genuine competitive advantages - nurse-led credibility,
            experienced practitioners, underserved local market. The digital strategy amplifies these strengths.
          </div>
          <div>
            <strong>The Reality:</strong> £30k/month won't happen immediately. With the phased approach - starting at £3k/month
            and scaling to £7-8k/month - this target is achievable by month 10-12 post-launch. Organic SEO compounds over time,
            reducing reliance on paid acquisition.
          </div>
          <div>
            <strong>Our Recommendation:</strong> Start the £3k Foundation Package now to build SEO authority and social presence
            before physical launch. This means you hit the ground running in 2026 rather than starting from zero.
          </div>
        </div>
      </Card>

      <div className="text-center mt-6 text-[#8a8a8a] text-xs">
        Timeless Treatments Digital Marketing Proposal | Prepared by IV Strategies | November 2025 | iv-creative.co.uk
      </div>
    </div>
  );
}
