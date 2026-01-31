
import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CombosPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto">
          <Button asChild variant="outline" className="my-6">
              <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
              </Link>
          </Button>
      </div>
      <ProductSection
        title="Combos"
        subtitle="Thoughtfully curated for your special moments"
        items={config.productSections.comboProducts}
        bgColor="bg-white"
        showViewAll={false}
        prioritizeImages={true}
      />
       <ProductSection
        title="You Might Also Like"
        subtitle="Check out these customer favorites"
        items={[...config.productSections.bestSellingCakes, ...config.productSections.gifts.slice(0, 2)]}
        bgColor="bg-gray-50"
        showViewAll={false}
      />
    </main>
  );
}
