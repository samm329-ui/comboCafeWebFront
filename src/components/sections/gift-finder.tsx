
import { config } from '@/app/config';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export default function GiftFinder() {
  return (
    <section className="bg-secondary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">{config.giftFinder.title}</h2>
            <p className="text-md text-gray-500 mt-1">{config.giftFinder.subtitle}</p>
            <div className="mt-8 space-y-4">
              {config.giftFinder.options.map((option) => (
                <div key={option.type} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow">
                  <span className="font-medium">{option.label}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
            <Button className="mt-6 w-full md:w-auto" size="lg">Find Gift</Button>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <Image src={config.giftFinder.imageUrl} alt="Gift Finder" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
