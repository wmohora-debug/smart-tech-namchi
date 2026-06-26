import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smarttechnamchi.com"),
  title: "SMART TECH NAMCHI | The Ultimate Printing Solution in Sikkim",
  description: "Premium printing and digital brand solutions in Namchi. Grand-format flex printing, high-speed digital printing, PVC ID cards, custom trophies, photo framing, sports goods, and custom sublimated team jerseys.",
  keywords: "smart tech namchi, printing namchi, flex printing namchi, digital printing, trophies, photo framing, sports goods, certificates, stationery, Sikkim printing",
  authors: [{ name: "Smart Tech Namchi" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Smart Tech",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "SMART TECH NAMCHI | The Ultimate Printing Solution in Sikkim",
    description: "Premium printing, digital branding, and custom sports sublimations near District Court, Melli Road, Namchi.",
    url: "https://smarttechnamchi.com",
    siteName: "Smart Tech Namchi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://smarttechnamchi.com/gallery/Shop-front.jpeg",
        width: 1200,
        height: 630,
        alt: "SMART TECH NAMCHI Storefront",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMART TECH NAMCHI | The Ultimate Printing Solution",
    description: "Grand-format flex, digital print, PVC ID cards, trophies, custom jerseys, and frames near Namchi District Court.",
    images: ["https://smarttechnamchi.com/gallery/Shop-front.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured schema details
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SMART TECH NAMCHI",
    "image": "https://smarttechnamchi.com/gallery/Shop-front.jpeg",
    "@id": "https://smarttechnamchi.com/#localbusiness",
    "url": "https://smarttechnamchi.com",
    "telephone": "+917719330915",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Melli Road, Near District Court",
      "addressLocality": "Namchi",
      "addressRegion": "Sikkim",
      "postalCode": "737126",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.1678",
      "longitude": "88.3582"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  // FAQ structured schema details
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What printing services does SMART TECH NAMCHI offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMART TECH NAMCHI offers 12 core services including Digital Printing, Flex Banner Printing, PVC ID Cards, Certificates, Bill Books, Rubber Stamps, Photo Framing, Spiral and Hard Binding, Trophies, Sports Goods, and custom sublimated Sports Jerseys."
        }
      },
      {
        "@type": "Question",
        "name": "Where is SMART TECH NAMCHI located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our store is located on Melli Road, Near District Court, Namchi, South Sikkim, India 737126."
        }
      },
      {
        "@type": "Question",
        "name": "How can I order custom jerseys or request a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a quick quote by using the 'Get Quote' floating button on our website or clicking 'Inquire via WhatsApp' on any service detail card, which generates a pre-filled template message to our phone +91 77193 30915."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#030712" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                if (window.location.hostname === 'localhost') {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (let registration of registrations) {
                      registration.unregister().then(function(unregistered) {
                        if (unregistered) {
                          console.log('Successfully unregistered active SW on localhost to prevent dev cache loop.');
                        }
                      });
                    }
                  });
                } else {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(function(reg) {
                      console.log('SW Registered:', reg.scope);
                    }).catch(function(err) {
                      console.warn('SW Registration failed:', err);
                    });
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-bg-dark text-white font-sans antialiased min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
