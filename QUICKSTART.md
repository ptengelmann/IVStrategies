# Quick Start Guide

## Your App is Ready! 🎉

The development server is running at **http://localhost:3002**

## What's Built

### Pages
1. **Home Page** - http://localhost:3002
   - Overview of all research projects
   - Navigation to individual pages

2. **AU Vodka Strategy** - http://localhost:3002/au-vodka
   - Complete example page with tabs
   - Market analysis, personalization concepts, airport strategy
   - Fully styled and responsive

### Components Library
Located in `/components/`:
- `Header.tsx` - Page headers
- `Hero.tsx` - Hero sections
- `Card.tsx` - Cards with 4 variants
- `Tabs.tsx` - Interactive tabs
- `icons.tsx` - 6 SVG icons

## Create Your First Page

### 1. Create the file structure
```bash
mkdir app/your-project
touch app/your-project/page.tsx
```

### 2. Copy the template from `TEMPLATE.md`
Open `TEMPLATE.md` and copy the template code into your new `page.tsx`

### 3. Customize the content
- Change the title, subtitle, and content
- Update tab names and data
- Add your own analysis and insights

### 4. Add to home page
Edit `app/page.tsx` and add your project to the `projects` array:
```tsx
{
  title: 'Your Project Name',
  description: 'Brief description',
  href: '/your-project',
  tag: 'Your Tag',
  icon: <GlobeIcon size={24} />
}
```

### 5. View it!
Go to http://localhost:3002/your-project

## Styling Tips

### Colors
- Primary Pink: `#ff2d9b` or `text-[#ff2d9b]`
- Success Green: `#2dffb5` or `text-[#2dffb5]`
- Muted Text: `#8a8a8a` or `text-[#8a8a8a]`

### Card Variants
```tsx
<Card variant="default">Normal card</Card>
<Card variant="highlight">Pink card</Card>
<Card variant="gradient">Gradient card</Card>
<Card variant="success">Green card</Card>
```

### Common Layouts
```tsx
// Two column grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>Column 1</Card>
  <Card>Column 2</Card>
</div>

// Accent border
<div className="border-l-[3px] border-[#ff2d9b] pl-3">
  Content
</div>

// Highlight box
<div className="bg-[#2dffb5]/10 p-2.5 rounded-md text-[#2dffb5]">
  Highlighted content
</div>
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Need Help?

- Check `TEMPLATE.md` for the full page template
- Look at `/app/au-vodka/page.tsx` for a complete example
- See `README.md` for detailed documentation

## What's Different from React?

This is **Next.js 15** with the App Router:
- Files in `/app/` become routes automatically
- `/app/page.tsx` → home page
- `/app/your-project/page.tsx` → /your-project route
- Components marked with `'use client'` for interactivity (like Tabs)
- Server components by default (faster performance)

Happy researching! 🚀
