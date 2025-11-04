# Research & Strategy App

A modern Next.js application for creating beautiful, interactive research and strategy presentations.

## Features

- ✨ Clean, professional dark theme design
- 📱 Fully responsive layout
- 🎨 Reusable component library
- 🔄 Interactive tabbed interfaces
- 🎯 Perfect for client proposals and research presentations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
research-app/
├── app/
│   ├── au-vodka/          # Example research page
│   │   └── page.tsx
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Card.tsx           # Reusable card component
│   ├── Header.tsx         # Page header
│   ├── Hero.tsx           # Hero section
│   ├── Tabs.tsx           # Tabbed interface
│   └── icons.tsx          # Icon components
├── public/
│   └── assets/            # Images and static files
├── TEMPLATE.md            # Template for new pages
└── README.md
```

## Creating a New Research Page

1. **Create a new folder** in `/app/` with your project name:
   ```bash
   mkdir app/your-project
   ```

2. **Create `page.tsx`** in that folder and use the template from `TEMPLATE.md`

3. **Add your page to the home page** in `/app/page.tsx`:
   ```tsx
   {
     title: 'Your Project Title',
     description: 'Brief description',
     href: '/your-project',
     tag: 'Your Tag',
     icon: <GlobeIcon size={24} />
   }
   ```

## Components

### Header
Displays the page title and optional tag/badge.

```tsx
<Header
  title="Your Title"
  tag="Optional Tag"
  logoPath="/assets/logo.png" // optional
/>
```

### Hero
Creates an eye-catching hero section with kicker, title, and subtitle.

```tsx
<Hero
  kicker="Small text above"
  title="Main Title"
  subtitle="Supporting description"
/>
```

### Card
Versatile card component with multiple style variants.

```tsx
<Card variant="default">Content</Card>
<Card variant="highlight">Pink highlight</Card>
<Card variant="gradient">Gradient style</Card>
<Card variant="success">Green success</Card>
```

### Tabs
Interactive tabbed interface for organizing content.

```tsx
const tabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content 1</div>
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content 2</div>
  }
];

<Tabs tabs={tabs} defaultTab="tab1" />
```

### Icons
Collection of SVG icons:
- `GlobeIcon`
- `PlaneIcon`
- `GiftIcon`
- `MapPinIcon`
- `SparklesIcon`
- `TrendingUpIcon`

```tsx
<SparklesIcon size={24} className="text-[#ff2d9b]" />
```

## Design System

### Colors
- **Primary Pink**: `#ff2d9b`
- **Success Green**: `#2dffb5`
- **Background**: `#0f0f0f`
- **Foreground**: `#e0e0e0`
- **Muted**: `#8a8a8a`

### Typography
- Font Family: Inter (via Google Fonts)
- Headings: Bold, gradient effects for main titles
- Body: Regular weight, comfortable line height

### Spacing
Consistent spacing using Tailwind's spacing scale (multiples of 4px).

## Example Pages

### AU Vodka Strategy
A complete example showing:
- Market analysis with flags and regions
- Personalization concepts in grid layout
- Airport strategy with lists and highlights
- "Why it works" section with benefits
- Multiple tab navigation

Visit `/au-vodka` to see it in action.

## Tips for Great Research Pages

1. **Keep it scannable**: Use clear headings, short paragraphs, and bullet points
2. **Use visual hierarchy**: Leverage cards, borders, and color to guide the eye
3. **Add icons**: They add visual interest and help with quick scanning
4. **Organize with tabs**: Break complex topics into digestible sections
5. **Mobile-first**: Always test on mobile devices
6. **Data visualization**: Consider adding charts or graphics for data-heavy content

## Customization

### Changing the Color Scheme
Edit colors in:
- `/app/globals.css` (CSS variables)
- `/components/*.tsx` (Tailwind classes)

### Adding Fonts
Edit `/app/layout.tsx` to import different Google Fonts.

### Custom Components
Create new components in `/components/` and import them in your pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter)

## License

MIT

## Support

For issues or questions, refer to `TEMPLATE.md` for page creation guidance.
