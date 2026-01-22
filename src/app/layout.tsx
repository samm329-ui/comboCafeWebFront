
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-provider';
import React from 'react';
import Script from 'next/script';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MobileBottomNav from '@/components/mobile/MobileBottomNav';
import { Metadata } from 'next';

const BASE_URL = 'https://combocafe.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Combo Cafe and Gift Shop | Cakes, Gifts & Food in Rampurhat',
    template: '%s | Combo Cafe Rampurhat',
  },
  description: 'Combo Cafe - Your one-stop destination for delicious cakes, customized gifts, fresh flowers, and tasty food in Rampurhat, Birbhum. Order online for delivery or visit our cafe!',
  keywords: [
    // Brand & Core Business
    'combo cafe rampurhat',
    'cake shop rampurhat',
    'gift shop rampurhat',
    'cafe in rampurhat',
    'bakery in rampurhat',
    'florist rampurhat',
    'restaurant rampurhat',

    // Top Products
    'birthday cake rampurhat',
    'customized gifts birbhum',
    'photo cakes',
    'customized mugs',
    'printed cushions',
    'chocolate bouquet',
    'red velvet cake',
    'black forest cake',
    'butterscotch cake',
    'chocolate truffle cake',

    // Services
    'cake delivery rampurhat',
    'flower delivery rampurhat',
    'online cake delivery rampurhat',
    'send gifts to rampurhat',
    'same day cake delivery rampurhat',
    'home delivery food rampurhat',
    'personalised gifts rampurhat',

    // Search Intent & Occasions
    'best cafe rampurhat',
    'coffee shop rampurhat',
    'best place for birthday celebration',
    'couples cafe in rampurhat',
    'family restaurant rampurhat',

    // Locations
    'Rampurhat',
    'Birbhum',
    'Tarapith',
    'Mallarpur',
    'Nalhati',
    'Sainthia',
  ],
  authors: [{ name: 'Combo Cafe and Gift Shop' }],
  creator: 'Combo Cafe',
  publisher: 'Combo Cafe and Gift Shop',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Combo Cafe and Gift Shop',
    title: 'Combo Cafe and Gift Shop | Cakes, Gifts & Food in Rampurhat',
    description: 'Your one-stop destination for delicious cakes, customized gifts, fresh flowers, and tasty food in Rampurhat, Birbhum.',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Combo Cafe and Gift Shop - Rampurhat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Combo Cafe and Gift Shop | Rampurhat',
    description: 'Delicious cakes, customized gifts, fresh flowers & tasty food in Rampurhat.',
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'Food & Drink',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎁</text></svg>" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8WVBMBMVKB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WVBMBMVKB');
          `}
        </Script>
        {/* Local Business Schema - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CafeOrCoffeeShop',
              name: 'Combo Cafe and Gift Shop',
              image: 'https://combocafe.in/og-image.jpg',
              '@id': 'https://combocafe.in',
              url: 'https://combocafe.in',
              telephone: '+91 8436860216',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Main Road',
                addressLocality: 'Rampurhat',
                addressRegion: 'West Bengal',
                postalCode: '731224',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 24.1726,
                longitude: 87.7839,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '21:00',
                },
              ],
              sameAs: [],
              servesCuisine: ['Cafe', 'Bakery', 'Indian'],
              priceRange: '₹₹',
              menu: 'https://combocafe.in/menu',
              acceptsReservations: false,
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Products',
                itemListElement: [
                  {
                    '@type': 'OfferCatalog',
                    name: 'Cakes',
                    itemListElement: [],
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Gifts',
                    itemListElement: [],
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Flowers',
                    itemListElement: [],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className='flex-grow md:pt-0 pt-16'>
                {children}
              </main>
              <Footer />
            </div>
            <MobileBottomNav />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
