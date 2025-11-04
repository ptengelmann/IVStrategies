# Research Page Template

This template helps you create new research pages following the established design pattern.

## Quick Start

1. Create a new folder in `/app/` with your project name (e.g., `/app/your-project/`)
2. Create a `page.tsx` file in that folder
3. Copy the template below and customize it

## Template Code

```tsx
'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Tabs, Tab } from '@/components/Tabs';
import { Card } from '@/components/Card';
import { SparklesIcon, GlobeIcon, PlaneIcon, TrendingUpIcon } from '@/components/icons';

export default function YourProjectPage() {
  // Define your data
  const yourData = [
    {
      title: "Example Item",
      description: "Description here",
      details: "More details"
    },
    // Add more items...
  ];

  // Define tabs
  const tabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-4">Section Title</h3>
            <div className="text-sm leading-relaxed">
              Your content here...
            </div>
          </Card>
        </>
      )
    },
    {
      id: 'analysis',
      label: 'Analysis',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {yourData.map((item, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-2 mb-2.5">
                  <SparklesIcon className="text-[#ff2d9b]" />
                  <h3 className="text-sm font-bold">{item.title}</h3>
                </div>
                <div className="text-xs leading-relaxed">
                  {item.description}
                </div>
              </Card>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'strategy',
      label: 'Strategy',
      content: (
        <>
          <Card className="mt-4">
            <h3 className="text-base font-bold mb-3">Strategic Recommendations</h3>
            <ul className="text-sm pl-5 list-disc leading-loose">
              <li>Recommendation 1</li>
              <li>Recommendation 2</li>
              <li>Recommendation 3</li>
            </ul>
          </Card>
        </>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        title="Your Project Title"
        tag="Your Tag (e.g., Research 2025)"
        logoPath="/assets/ivlogo.png"
      />

      <Hero
        kicker="Your Kicker Text"
        title="Your Main Title"
        subtitle="Your subtitle explaining what this research is about and why it matters."
      />

      <Tabs tabs={tabs} defaultTab="overview" />

      {/* Bottom Summary/CTA */}
      <Card variant="success" className="mt-6">
        <div className="text-[13px] leading-relaxed">
          <strong>Key Takeaway:</strong> Your summary and key insights go here.
        </div>
      </Card>

      <div className="text-center mt-6 text-[#8a8a8a] text-xs">
        Your Project | Your Name | Date | website.com
      </div>
    </div>
  );
}
```

## Available Components

### Header
```tsx
<Header
  title="Your Title"
  tag="Your Tag"
  logoPath="/assets/ivlogo.png" // IV logo (recommended)
/>
```

### Hero
```tsx
<Hero
  kicker="Small text above title"
  title="Main Title"
  subtitle="Supporting text"
/>
```

### Card Variants
```tsx
<Card variant="default">Default card</Card>
<Card variant="highlight">Pink highlighted card</Card>
<Card variant="gradient">Gradient card</Card>
<Card variant="success">Green success card</Card>
```

### Icons
Available icons: `GlobeIcon`, `PlaneIcon`, `GiftIcon`, `MapPinIcon`, `SparklesIcon`, `TrendingUpIcon`

```tsx
import { GlobeIcon } from '@/components/icons';

<GlobeIcon size={24} className="text-[#ff2d9b]" />
```

### Tabs
```tsx
const tabs: Tab[] = [
  {
    id: 'unique-id',
    label: 'Tab Label',
    content: <div>Your content</div>
  }
];

<Tabs tabs={tabs} defaultTab="unique-id" />
```

## Color Palette

- Primary Pink: `#ff2d9b`
- Success Green: `#2dffb5`
- Background: `#0f0f0f`
- Text: `#e0e0e0`
- Muted Text: `#8a8a8a`

## Tailwind Classes Quick Reference

### Text Sizes
- `text-xs` (11px)
- `text-sm` (14px)
- `text-base` (16px)
- `text-lg` (18px)
- `text-2xl` (24px)
- `text-4xl` (36px)

### Spacing
- `p-4` (padding: 16px)
- `mb-4` (margin-bottom: 16px)
- `gap-4` (gap: 16px)

### Common Patterns

#### Data Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item, idx) => (
    <Card key={idx}>
      {/* content */}
    </Card>
  ))}
</div>
```

#### Highlight Box
```tsx
<div className="bg-[#2dffb5]/10 p-2.5 rounded-md text-[#2dffb5] text-xs">
  <strong>Label:</strong> Content
</div>
```

#### Border Accent
```tsx
<div className="border-l-[3px] border-[#ff2d9b] pl-3">
  Content with left border
</div>
```

## Adding Your Page to Home

After creating your page, add it to the projects array in `/app/page.tsx`:

```tsx
{
  title: 'Your Project Title',
  description: 'Brief description',
  href: '/your-project',
  tag: 'Your Tag',
  icon: <GlobeIcon size={24} />
}
```

## Tips

1. Keep sections concise and scannable
2. Use icons to add visual interest
3. Alternate card backgrounds for better readability
4. Use the appropriate card variant for emphasis
5. Include data visualizations where possible
6. Make content mobile-responsive (use `md:` and `lg:` breakpoints)
