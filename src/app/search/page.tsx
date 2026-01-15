
'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  badge?: string;
};

const allProducts: Product[] = [
  ...config.productSections.bestSellingCakes,
  ...config.productSections.gifts,
  ...config.productSections.personalisedFrames,
  ...config.productSections.personalisedMugsAndCushions,
  ...config.collections.cakes.map(c => ({...c, id: c.id || c.title, name: c.title, price: c.price || '0', description: c.description || ''}))
];

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto py-6">
          <Button onClick={() => router.back()} variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {filteredProducts.length > 0 ? (
            <ProductSection
              title={`Search Results for "${query}"`}
              subtitle={`${filteredProducts.length} items found`}
              items={filteredProducts}
              bgColor="bg-white"
              showViewAll={false}
            />
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold">No results found for "{query}"</h2>
              <p className="text-gray-500 mt-2">Try searching for something else.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
