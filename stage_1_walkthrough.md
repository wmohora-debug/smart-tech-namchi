# Smart Tech Namchi — Stage 1 Frontend Walkthrough

This document details the architecture, design tokens, styling systems, and component structure established for the **SMART TECH NAMCHI** business landing page.

---

## 🏗️ Technical Stack & Architecture

- **Framework**: Next.js (App Router, latest v16 specs)
- **Runtime**: React (v19)
- **Language**: TypeScript (Type-safe compilation enabled)
- **Styling**: Tailwind CSS (v4) & Custom global variables
- **Animations**: Framer Motion
- **Icons**: Lucide Icons & Custom optimized SVGs

---

## 🎨 Global Design System & Variables

The design tokens are integrated directly into `@theme` inside [globals.css](file:///f:/Smart%20Tech/app/globals.css) and converted automatically into Utility Classes by Tailwind CSS v4:

| Token | CSS Variable | Value / Hex Code | Tailwind Utility |
| :--- | :--- | :--- | :--- |
| **Primary Color** | `--color-primary` | `#0057FF` (Vibrant Blue) | `bg-primary`, `text-primary` |
| **Accent Color** | `--color-accent` | `#00C2FF` (Cyan Glow) | `bg-accent`, `text-accent` |
| **Background** | `--color-bg-dark` | `#030712` (Slate Black) | `bg-bg-dark` |
| **Cards** | `--color-card-dark` | `#111827` (Dark Charcoal) | `bg-card-dark` |
| **Borders** | `--color-border-custom` | `rgba(255,255,255,0.08)` | `border-border-custom` |
| **Success** | `--color-success` | `#10B981` (Emerald Green) | `bg-success`, `text-success` |
| **Warning** | `--color-warning` | `#F59E0B` (Amber Orange) | `bg-warning`, `text-warning` |
| **Heading Font** | `--font-heading` | Poppins | `font-heading` |
| **Body Font** | `--font-sans` | Inter | `font-sans` |
| **Card Radius** | `--radius-card` | `20px` | `rounded-card` |
| **Button Radius** | `--radius-btn` | `14px` | `rounded-btn` |

---

## 📂 Project Structure

All files have been structured in accordance with Next.js App Router guidelines:

```
f:\Smart Tech\
├── app\
│   ├── globals.css         # Global design styles, glassmorphism, animations
│   ├── layout.tsx          # Font loads (Inter, Poppins) & SEO metadata
│   └── page.tsx            # Main page assembly
├── components\
│   ├── About.tsx           # Split details and animated counters
│   ├── ContactPreview.tsx  # Dynamic form with WhatsApp redirect
│   ├── FloatingButtons.tsx # Mobile scroll-triggered CTA actions
│   ├── Footer.tsx          # Enterprise footer with custom inline SVGs
│   ├── GalleryPreview.tsx  # Interactive lightbox and masonry showcase
│   ├── Hero.tsx            # Floating printer vector design & titles
│   ├── Navbar.tsx          # Sticky glass header with mobile menu drawer
│   ├── Services.tsx        # Grid layout with 11 printing services cards
│   ├── SportsSection.tsx   # Sports jerseys, cleats, specifications list
│   └── WhyChooseUs.tsx     # Animated distinct sales cards
├── lib\
│   └── variants.ts         # Shared Framer Motion scroll variant bindings
└── public\
    ├── about_branding.png  # Generated branding stationery asset
    ├── flex_printing.png   # Generated grand format printing asset
    └── sports_gear.png     # Generated athletic sublimations asset
```

---

## 🛠️ Component Design Breakdown

### 1. [Navbar.tsx](file:///f:/Smart%20Tech/components/Navbar.tsx)
- Transition states: Transparent hero top, shifts to `.glass-navbar` on scroll (adds blur, border bottom, shadow).
- Navigation: Smooth scroll offsets `window.scrollTo({ top: offsetPosition, behavior: "smooth" })` to scroll past navbar height.
- Drawer: Interactive mobile menu with slide-down Framer Motion animation.

### 2. [Hero.tsx](file:///f:/Smart%20Tech/components/Hero.tsx)
- Visual Asset: Implements a high-end vector illustration of a digital flatbed/roll printer in action. Contains moving printer heads, linear laser alignment grids, and paper outputs.
- Backing: Interactive backing utilizing blurred floating shape canvases and tech grid guidelines.

### 3. [WhyChooseUs.tsx](file:///f:/Smart%20Tech/components/WhyChooseUs.tsx)
- Showcases the 5 pillars (Quality, Price, Technology, Speed, Satisfaction) using custom grid offsets.
- Cards react on hover: translate vertically, color-highlight icon frames, and project a radial primary drop shadow.

### 4. [About.tsx](file:///f:/Smart%20Tech/components/About.tsx)
- Embeds `/about_branding.png` (a premium branding mockup photo generated via Midjourney-spec instructions).
- Features custom `Counter` components using `IntersectionObserver` to trigger increments only when scrolled into view.

### 5. [Services.tsx](file:///f:/Smart%20Tech/components/Services.tsx)
- Organizes 11 core products (Digital Printing, Flex, PVC ID, Trophies, Binding, Framing, Stamps) in an elegant 3x4 grid.
- Clean typography and hover indicators for advanced specifications.

### 6. [GalleryPreview.tsx](file:///f:/Smart%20Tech/components/GalleryPreview.tsx)
- Utilizes an asymmetrical masonry grid mimicking high-end portfolios.
- Contains an interactive Client Lightbox Modal allowing users to zoom and paginate through full-resolution proofs.

### 7. [SportsSection.tsx](file:///f:/Smart%20Tech/components/SportsSection.tsx)
- Highlights specialized Sublimation Teamwear apparel, Football Cleats, and Bags.
- Includes a technical specification summary explaining the moisture-wicking Vapor-Knit and anti-fade dye attributes.

### 8. [ContactPreview.tsx](file:///f:/Smart%20Tech/components/ContactPreview.tsx)
- Direct contact details with tap-to-call and tap-to-whatsapp links.
- Responsive message form that auto-composes message payloads and redirects to WhatsApp or confirms portal entries.

### 9. [Footer.tsx](file:///f:/Smart%20Tech/components/Footer.tsx)
- Minimal dark theme.
- Custom inline vector SVGs for Facebook, Instagram, LinkedIn, and X (Twitter) logos to avoid dependency version errors.
- Includes an active back-to-top button.

### 10. [FloatingButtons.tsx](file:///f:/Smart%20Tech/components/FloatingButtons.tsx)
- Scroll-triggered (appears after scrolling 300px) only on mobile viewport boundaries.
- Provides immediate thumbs-reach actions for instant communication.

---

## ⚡ Performance & Quality Control

1. **Static Pre-Rendering**: Build compiles cleanly, exporting `/` and `/_not-found` as static HTML entries for immediate load.
2. **Next.js Images**: Replaced standard `<img />` tags with `next/image` optimizing layout-shifts, responsive resolutions, and formatting.
3. **Animations**: All transitions are calibrated between `300ms` and `600ms` with customized cubic beziers `[0.22, 1, 0.36, 1]` for organic acceleration curves.
4. **TypeScript**: Strongly typed Framer Motion properties with `Variants` and `as const` definitions preventing validation errors.
