
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-provider';
import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MobileBottomNav from '@/components/mobile/MobileBottomNav';
import MobileCartFab from '@/components/common/MobileCartFab';

export const metadata = {
  title: 'Ferns & Petals - Gifts, Cakes, Flowers',
  description: 'A one-stop-shop for gifts, cakes, flowers, and more for domestic delivery.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <CartProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className='flex-grow md:pt-0 pt-28'>
                  {children}
                </main>
                <Footer />
              </div>
              <MobileBottomNav />
              <MobileCartFab />
              <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
