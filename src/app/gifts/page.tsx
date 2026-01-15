
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProductSection from '@/components/sections/product-section';
import { config } from '@/app/config';

export default function GiftsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductSection
          title="All Gifts"
          subtitle="Browse our entire collection of fine gifts"
          items={config.productSections.gifts}
          bgColor="bg-white"
        />
      </main>
      <Footer />
    </>
  );
}
