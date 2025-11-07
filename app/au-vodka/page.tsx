'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Tabs, Tab } from '@/components/Tabs';
import { Card } from '@/components/Card';
import { SparklesIcon, PlaneIcon } from '@/components/icons';

export default function AUVodkaStrategy() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check if user has access to this project
  useEffect(() => {
    if (status === 'authenticated') {
      const clientId = session?.user?.id || '';
      const allowedClients = ['au-vodka', 'admin'];

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
  // AU Vodka Key Markets
  const keyMarkets = [
    {
      region: "United Kingdom",
      status: "Primary Market (89% of revenue)",
      presence: "Strong retail, e-commerce, duty-free at major UK airports including Manchester",
      flag: "🇬🇧",
      opportunity: "Airport personalization for outbound travelers - custom bottles with destination flags or names"
    },
    {
      region: "United States",
      status: "High Growth Market",
      presence: "E-commerce revenue up 1,000% year-over-year, expanding state distribution",
      flag: "🇺🇸",
      opportunity: "Personalized state editions, city names, American landmarks for travelers"
    },
    {
      region: "Europe",
      status: "Expanding Distribution",
      presence: "Netherlands, Germany markets established, German travel retailer Gebr Heinemann partnership",
      flag: "🇪🇺",
      opportunity: "Country-specific editions (Netherlands, Germany, Spain, France) for intra-European travelers"
    },
    {
      region: "Middle East",
      status: "Emerging Market",
      presence: "Bahrain Duty Free confirmed, Dubai expansion underway",
      flag: "🇦🇪",
      opportunity: "Luxury personalized editions for high-end travelers, Arabic script options"
    },
    {
      region: "Australia",
      status: "New Market Entry",
      presence: "Recent market entry, building distribution",
      flag: "🇦🇺",
      opportunity: "Australian city editions (Sydney, Melbourne), regional personalization"
    }
  ];

  // Personalization Concepts
  const personalizationConcepts = [
    {
      concept: "Country Flag Bottles",
      description: "Custom AU Vodka bottles featuring destination country flags",
      application: "Perfect for duty-free purchases - 'UK to Spain', 'UK to France', 'UK to USA'",
      appeal: "Travelers buying gifts for hosts, souvenirs from UK, patriotic appeal"
    },
    {
      concept: "City Name Editions",
      description: "Bottles customized with traveler's destination city",
      application: "London, Manchester, New York, Dubai, Sydney, Amsterdam editions",
      appeal: "Location-based souvenirs, Instagram-worthy travel content"
    },
    {
      concept: "Name Personalization",
      description: "Custom names on iconic gold bottles",
      application: "Duty-free gift personalization kiosks at airports",
      appeal: "Premium gifting, special occasions, corporate travel gifts"
    },
    {
      concept: "Travel Collection Series",
      description: "Limited edition series celebrating global destinations",
      application: "Rotating quarterly collections featuring different regions",
      appeal: "Collectible appeal, encourages repeat purchases across trips"
    }
  ];

  // Airport Strategy
  const airportStrategy = {
    currentPresence: [
      "UK airports via World Duty Free (Manchester confirmed)",
      "Bahrain Duty Free",
      "German travel retail (Gebr Heinemann)",
      "Cruise retailer Harding+"
    ],
    expansionOpportunities: [
      "Heathrow Terminal 5 (long-haul hub)",
      "Gatwick North & South",
      "Dubai International Airport",
      "JFK & LAX (US expansion)",
      "Amsterdam Schiphol",
      "Sydney & Melbourne Airports"
    ],
    personalizationSetup: [
      "In-store personalization kiosks at duty-free",
      "Pre-order online, collect at airport",
      "Quick turnaround engraving/printing stations",
      "Premium gift packaging for travelers"
    ]
  };

  // Why This Works for AU Vodka
  const whyItWorks = [
    {
      reason: "Premium Brand Positioning",
      detail: "AU Vodka's iconic gold bottles are already luxury-positioned, perfect for personalized gifting"
    },
    {
      reason: "International Expansion",
      detail: "Rapidly growing in USA, Europe, Middle East, Australia - personalization amplifies local relevance"
    },
    {
      reason: "Instagram-Worthy Product",
      detail: "Gold bottles + personalization = highly shareable social content from travelers"
    },
    {
      reason: "Airport Captive Audience",
      detail: "Travelers actively seeking gifts, souvenirs, and premium products at duty-free"
    },
    {
      reason: "Higher Margins",
      detail: "Personalization adds perceived value, commands premium pricing in duty-free environment"
    },
    {
      reason: "Brand Differentiation",
      detail: "Few vodka brands offer airport personalization - first-mover advantage in travel retail"
    }
  ];

  const tabs: Tab[] = [
    {
      id: 'markets',
      label: 'Global Markets',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">AU Vodka Global Market Presence</h3>

            {keyMarkets.map((market, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                } p-4 rounded-lg mb-3 border-l-[3px] border-[#ff2d9b]`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="text-2xl">{market.flag}</div>
                  <div>
                    <div className="text-sm font-bold text-[#ff2d9b]">
                      {market.region}
                    </div>
                    <div className="text-[11px] text-[#8a8a8a]">
                      {market.status}
                    </div>
                  </div>
                </div>

                <div className="text-xs leading-relaxed mb-2.5">
                  <strong>Current Presence:</strong> {market.presence}
                </div>

                <div className="text-xs bg-[#2dffb5]/10 p-2.5 rounded-md text-[#2dffb5]">
                  <strong>Personalization Opportunity:</strong> {market.opportunity}
                </div>
              </div>
            ))}
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">Why International Personalization Matters</h4>
            <div className="text-[13px] leading-relaxed">
              AU Vodka has rapidly expanded from a UK-focused brand to a global player with presence across 5+ continents.
              With 89% of current revenue from UK but explosive growth in USA (1,000% e-commerce increase), Europe,
              Middle East, and Australia, personalized bottles celebrating local markets create deeper connections with
              international customers and travelers. Airport duty-free positioning allows capturing high-value travelers
              seeking premium, unique gifts.
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'personalization',
      label: 'Personalization Concepts',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {personalizationConcepts.map((concept, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-2 mb-2.5">
                  <SparklesIcon className="text-[#ff2d9b]" />
                  <h3 className="text-sm font-bold">{concept.concept}</h3>
                </div>

                <div className="text-xs leading-relaxed mt-3">
                  <div className="mb-2.5">{concept.description}</div>

                  <div className="text-[11px] mb-2">
                    <strong>Application:</strong> {concept.application}
                  </div>

                  <div className="text-[11px] text-[#2dffb5]">
                    <strong>Appeal:</strong> {concept.appeal}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-4">
            <h3 className="text-base font-bold mb-3">Visual Concept: Gold Bottle Personalization</h3>
            <div className="text-[13px] leading-relaxed">
              <p className="mb-3">
                AU Vodka's signature gold bottles provide the perfect canvas for premium personalization:
              </p>
              <ul className="pl-5 text-xs leading-loose list-disc">
                <li><strong>Front Label:</strong> Custom name, destination, or flag integrated with AU branding</li>
                <li><strong>Bottle Engraving:</strong> Laser-etched text on glass for permanent, luxury feel</li>
                <li><strong>Sleeve Wraps:</strong> Removable custom sleeves featuring country/city themes</li>
                <li><strong>Gift Box Personalization:</strong> Premium packaging with traveler's destination</li>
                <li><strong>QR Code Integration:</strong> Link to travel memories, playlists, or messages</li>
              </ul>
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'airport-strategy',
      label: 'Airport Strategy',
      content: (
        <>
          <Card className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <PlaneIcon className="text-[#ff2d9b]" />
              <h3 className="text-base font-bold">Airport & Duty-Free Strategy</h3>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-bold mb-3">Current Airport Presence</h4>
              <ul className="text-xs pl-5 leading-loose list-disc mb-5">
                {airportStrategy.currentPresence.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="text-sm font-bold mb-3">Expansion Opportunities</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-5">
                {airportStrategy.expansionOpportunities.map((airport, idx) => (
                  <div
                    key={idx}
                    className="bg-[#ff2d9b]/10 p-2.5 rounded-md text-xs text-center font-semibold"
                  >
                    {airport}
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold mb-3">In-Airport Personalization Setup</h4>
              <div className="text-xs leading-relaxed">
                {airportStrategy.personalizationSetup.map((setup, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2dffb5]/10 p-3 rounded-lg mb-2.5 border-l-[3px] border-[#2dffb5]"
                  >
                    <strong className="text-[#2dffb5]">Option {idx + 1}:</strong> {setup}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card variant="highlight" className="mt-4">
            <h4 className="text-sm font-bold mb-3">The Airport Advantage</h4>
            <div className="text-[13px] leading-relaxed">
              Airports represent a unique opportunity for AU Vodka personalization:
              <ul className="pl-5 mt-2.5 text-xs leading-loose list-disc">
                <li>Travelers are in "gift-buying mode" with time to browse duty-free</li>
                <li>International passengers seeking destination-specific souvenirs</li>
                <li>Premium pricing accepted in airport retail environment</li>
                <li>Immediate gratification - personalize and take on flight</li>
                <li>High-value customers (international travelers) with spending power</li>
                <li>Captive audience during layovers and pre-flight wait times</li>
              </ul>
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'why-it-works',
      label: 'Why It Works',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Why Personalization Works for AU Vodka</h3>

            {whyItWorks.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                } p-3.5 rounded-lg mb-3 border-l-[3px] border-[#2dffb5]`}
              >
                <div className="text-sm font-bold text-[#ff2d9b] mb-1.5">
                  {item.reason}
                </div>
                <div className="text-xs leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </Card>

          <Card variant="gradient" className="mt-4">
            <h4 className="text-sm font-bold mb-3 text-[#ff2d9b]">
              The Gold Standard in Travel Retail
            </h4>
            <div className="text-[13px] leading-relaxed">
              AU Vodka's iconic gold bottles are already synonymous with luxury and celebration. By adding personalization
              at airports across key markets - UK, USA, Europe, Middle East, and Australia - the brand can transform
              from a premium vodka purchase into a meaningful travel souvenir. Each bottle becomes a memory of the trip,
              a gift with personal significance, and an Instagram moment that organically promotes the brand globally.
              <div className="mt-3 text-xs italic">
                With airport presence already established and rapid international expansion underway, personalization
                is the natural next step to deepen customer connections and maximize travel retail margins.
              </div>
            </div>
          </Card>
        </>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        title="AU Vodka Personalization Strategy"
        tag="IV Creative Client Proposal 2025"
        logoPath="/assets/ivlogo.png"
      />

      <Hero
        kicker="AU Vodka - Global Travel Retail Opportunity"
        title="Personalized Gold Bottles for International Travelers"
        subtitle="How AU Vodka can leverage personalization across airport duty-free in key markets - UK, USA, Europe, Middle East, and Australia - transforming iconic gold bottles into personalized travel souvenirs with country flags, destination names, and custom engravings."
      />

      <Tabs tabs={tabs} defaultTab="markets" />

      {/* Bottom Summary */}
      <Card variant="success" className="mt-6">
        <div className="text-[13px] leading-relaxed">
          <strong>Strategic Opportunity:</strong> AU Vodka has rapidly expanded from UK-focused (89% revenue) to global
          presence across USA, Europe, Middle East, and Australia with duty-free partnerships already established. Personalized
          bottles featuring country flags, city names, and custom engravings position AU Vodka as the premium travel souvenir
          in airport duty-free, transforming routine purchases into meaningful gifts and Instagram-worthy moments that amplify
          brand awareness globally.
        </div>
      </Card>

      <div className="text-center mt-6 text-[#8a8a8a] text-xs">
        AU Vodka Personalization Strategy | Prepared by IV Creative | October 2025 | iv-creative.co.uk
      </div>
    </div>
  );
}
