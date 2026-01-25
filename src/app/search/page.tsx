
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';
import { Suspense, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  badge?: string;
};

const allProducts: Product[] = Array.from(new Set([ // Use Set to remove duplicates
  ...config.productSections.bestSellingCakes,
  ...config.productSections.allCakes,
  ...config.productSections.gifts,
  ...config.collections.cakes.map(c => ({...c, id: c.id || c.title, name: c.title, price: c.price || '0', description: c.description || ''})),
  ...config.productSections.foodItems,
  ...config.productSections.chocolates,
]));

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (initialQuery) {
      const filtered = allProducts.filter(product => {
        const searchTerms = initialQuery.toLowerCase().split(' ').filter(term => term);
        const productName = product.name.toLowerCase();
        const productDescription = (product.description || '').toLowerCase();

        return searchTerms.some(term =>
          productName.includes(term) ||
          productDescription.includes(term)
        );
      });
      setFilteredProducts(filtered);
    } else {
        setFilteredProducts([]);
    }
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <main className="bg-white">
      <div className="container mx-auto py-6">
        <div className="md:hidden mb-6">
          <form onSubmit={handleSearchSubmit} className="flex items-center border rounded-md">
            <Input 
              type="text"
              placeholder="Search for gifts, cakes, flowers..."
              className="w-full bg-transparent focus:outline-none text-sm placeholder-gray-400 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              suppressHydrationWarning
            />
            <Button type="submit" variant="ghost" size="icon" className="w-10 h-10" suppressHydrationWarning>
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </form>
        </div>
        <Button onClick={() => router.back()} variant="outline" className="mb-6 hidden md:inline-flex">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {isClient && initialQuery && (
          filteredProducts.length > 0 ? (
            <ProductSection
              title={`Search Results for "${initialQuery}"`}
              subtitle={`${filteredProducts.length} items found`}
              items={filteredProducts}
              bgColor="bg-white"
              showViewAll={false}
              prioritizeImages={true}
            />
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold">No results found for "{initialQuery}"</h2>
              <p className="text-gray-500 mt-2">Try searching for something else.</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading search results...</div>}>
            <SearchResults />
        </Suspense>
    );
}
