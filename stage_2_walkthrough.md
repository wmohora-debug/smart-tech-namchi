# SMART TECH NAMCHI - Stage 2 Upgrade Walkthrough

The codebase has been upgraded from the Stage 1 boilerplate into a premium, production-ready website for **SMART TECH NAMCHI**. All components have been customized with actual business details, location coordinates, contact phone numbers, and actual products.

## Updated Core Sections

### 1. Why Industry Leaders Choose Smart Tech
- Modified f:\Smart Tech\components\WhyChooseUs.tsx to list six distinct operational strengths:
  - **Latest Machines**: Highlights advanced digital printing presses and plotters.
  - **Fast Delivery**: Highlights optimized mechanical production speed and delivery channels.
  - **Affordable Pricing**: Highlights competitive local price packages.
  - **Premium Quality**: Details vector precision and strict ink/fabric quality checks.
  - **Trusted Service**: Highlighting over a decade of local reliability.
  - **Experienced Team**: Highlighting skilled alignment operators and designers.

### 2. Services Portfolio Expansion
- Modified f:\Smart Tech\components\Services.tsx to include the 12 specific printing and branding services:
  - Digital Printing, Flex Printing, PVC ID Card, Certificates, Bill Books, Rubber Stamp, Photo Framing, Spiral Binding, Hard Binding, Trophies, Sports Goods, Jerseys.
- Each card now features:
  - Custom Lucide icon.
  - Professional descriptive copywriting.
  - Next.js image banner showing actual business machinery or store photographs.
  - Staggered entry transitions and scaling zoom effects.

### 3. Featured Work Grid
- Created f:\Smart Tech\components\FeaturedWork.tsx to showcase proofs of completed projects (Visiting Cards, Flex Banner, Certificates, School ID Cards, Sports Jerseys, Photo Frames, Bill Books).
- Organized as an asymmetrical Apple-style grid featuring larger highlight banners and hover metadata cards.

### 4. Horizontal Workflow Timeline
- Created f:\Smart Tech\components\HowWeWork.tsx mapping out the five steps of the production cycle:
  - **01 Share Requirement**
  - **02 Design & Confirmation**
  - **03 Printing & Production**
  - **04 Quality Check**
  - **05 Delivery / Pickup**
- Leverages connecting arrows and responsive layouts (shifting to vertical stack on tablets and mobile screens).

### 5. Upgraded Interactive Gallery
- Restructured f:\Smart Tech\components\GalleryPreview.tsx to support filter categories: *All, Printing, Sports, Machines, Certificates, Frames, Shop*.
- Implemented a premium lightbox modal with:
  - **Touch/Drag Swiping**: Paginate with swipe gestures on mobile and drag on desktop.
  - **Double-tap / Icon Zoom**: Scale the proof images up to `1.5x` with smooth spring motion.
  - **Fullscreen Toggle**: Native browser fullscreen mode wrapper.
  - **Keyboard Navigation**: Navigate via Left/Right arrows and close via Escape.
  - **Fade/Scale mounting**: Micro-interactions during open, close, and navigation.

### 6. Fully Integrated Contacts & Maps
- Updated f:\Smart Tech\components\ContactPreview.tsx:
  - Configured phone number `+91 77193 30915` across all Direct Inquiries, Call actions, and WhatsApp form message triggers.
  - Customized address to Melli Road, Near District Court.
  - Embedded a custom grayscale-filtered Google Maps iframe component matching the page's glassmorphic dark theme.
- Updated headers, footers, and floating buttons across the codebase (f:\Smart Tech\components\Navbar.tsx, f:\Smart Tech\components\Hero.tsx, f:\Smart Tech\components\Footer.tsx, f:\Smart Tech\components\FloatingButtons.tsx) to align with these contact details.

## Build Stability
- Checked static generation build successfully:
  ```bash
  npm run build
  # Output: Route (app) / (Static) prerendered successfully. Exit code: 0.
  ```
