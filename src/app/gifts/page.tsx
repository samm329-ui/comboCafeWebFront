
import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GiftsPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto">
          <Button asChild variant="outline" className="my-6">
              <Link href="/#top-gifts">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
              </Link>
          </Button>
      </div>
      <ProductSection
        title="All Gifts"
        subtitle="Browse our entire collection of fine gifts"
        items={config.productSections.gifts}
        bgColor="bg-white"
        showViewAll={false}
      />
    </main>
  );
}
