
"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { config } from '@/app/config';

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="container mx-auto py-6">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {config.hero.banners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[2/1] md:aspect-[3/1] rounded-lg overflow-hidden">
                  <Image src={banner.imageUrl} alt={banner.alt} layout="fill" objectFit="cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
