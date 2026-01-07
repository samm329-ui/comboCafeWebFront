
"use client";

import React from 'react';
import { config } from '@/app/config.tsx';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="WhatsApp"
    >
      <path d="M16.75 13.96c.25.13.42.2.46.3.05.1.05.75-.2 1.3-.25.55-1.12 1.1-1.52 1.25-.4.15-1.07.13-1.6-.08s-2.15-1-3.6-2.5c-1.15-1.15-2-2.5-2.2-2.9-.2-.4-.04-.6.12-.77.16-.17.35-.2.5-.2s.33.02.47.22c.14.2.3.66.35.7.05.05.07.12.02.2-.05.08-.1.18-.2.25-.1.08-.2.12-.25.2-.06.07-.12.15-.05.27.07.12.33.56.7.92.56.5.94.75 1.1.8.14.05.24.03.32-.03.1-.06.42-.5.54-.66.12-.17.22-.15.32-.1.1.04.65.3.75.36zM12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10c1.85 0 3.55-.5 5-1.35l-1.3-1.3c-1.1.5-2.35.8-3.7.8a8 8 0 1 1 8-8c0 1.35-.3 2.6-.8 3.7l1.3 1.3C21.5 15.55 22 13.85 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  );

export default function BestSellers() {
  const whatsAppUrl = `https://wa.me/${config.contact.phone}?text=I'd like to order one of your best sellers!`;
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bestsellers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-headline text-foreground">Our Best Sellers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Discover the favorites that our customers can't get enough of.</p>
        </div>

        <div className="space-y-20">
          {config.bestsellers.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-12",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2 relative aspect-video shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  data-ai-hint={item.imageHint}
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-primary font-bold tracking-wider uppercase">{item.tag}</span>
                <h3 className="font-headline text-3xl md:text-4xl text-foreground mt-2">{item.name}</h3>
                <p className="text-muted-foreground mt-4 font-body max-w-md mx-auto md:mx-0">{item.description}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                   <Button asChild size="lg">
                      <a href={`tel:${config.contact.phone}`}>
                          <Phone /><span>Call to Order</span>
                      </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                      <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                          <WhatsAppIcon /><span>WhatsApp</span>
                      </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
            <Button size="lg" variant="outline" onClick={() => handleScrollTo('menu')}>
                <span>Go to Menu</span>
            </Button>
        </div>
      </div>
    </section>
  );
}
