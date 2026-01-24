

import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FoodPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto">
          <Button asChild variant="outline" className="my-6">
              <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
              </Link>
          </Button>
          <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight">Food & Beverages</h1>
              <p className="mt-2 text-lg text-muted-foreground">Browse our delicious menu</p>
          </div>
      </div>
      <ProductSection
        id="pizzas"
        title="Pizzas"
        subtitle="Cheesy and delicious"
        items={config.productSections.pizzas}
        bgColor="bg-white"
        showViewAll={false}
        prioritizeImages={true}
      />
      <ProductSection
        id="burgers"
        title="Burgers"
        subtitle="Juicy and satisfying"
        items={config.productSections.burgers}
        bgColor="bg-accent"
        showViewAll={false}
      />
      <ProductSection
        id="sandwiches"
        title="Sandwiches"
        subtitle="Freshly made for you"
        items={config.productSections.sandwiches}
        bgColor="bg-white"
        showViewAll={false}
      />
      <ProductSection
        id="noodles"
        title="Korean Noodles"
        subtitle="Spicy and flavorful"
        items={config.productSections.noodles}
        bgColor="bg-accent"
        showViewAll={false}
      />
      <ProductSection
        id="pastas"
        title="Pastas"
        subtitle="Creamy and comforting"
        items={config.productSections.pastas}
        bgColor="bg-white"
        showViewAll={false}
      />
       <ProductSection
        id="snacks"
        title="Snacks"
        subtitle="Quick and tasty bites"
        items={config.productSections.snacks}
        bgColor="bg-accent"
        showViewAll={false}
      />
      <ProductSection
        id="beverages"
        title="Beverages"
        subtitle="Hot and Cold drinks"
        items={[...config.productSections.hotBeverages, ...config.productSections.coldBeverages]}
        bgColor="bg-white"
        showViewAll={false}
      />
    </main>
  );
}
