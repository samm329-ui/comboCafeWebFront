
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import IconCategoryStrip from '@/components/sections/icon-category-strip';
import ServiceStrip from '@/components/sections/service-strip';
import ProductSection from '@/components/sections/product-section';
import GiftFinder from '@/components/sections/gift-finder';
import HorizontalCollection from '@/components/sections/horizontal-collection';
import { config } from './config';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IconCategoryStrip />
        <ServiceStrip />
        <ProductSection 
          title="Top Gifts"
          subtitle="A selection of our finest gift items"
          items={config.productSections.gifts}
        />
        <ProductSection 
          title="Personalised Mugs & Cushions"
          subtitle="Add a personal touch to your gifts"
          items={config.productSections.personalisedMugsAndCushions}
          bgColor="bg-accent"
        />
        <ProductSection 
          title="Personalised Frames"
          subtitle="Frame your cherished memories"
          items={config.productSections.personalisedFrames}
        />
        <GiftFinder />
        <HorizontalCollection 
          title="Flower Collections"
          items={config.collections.flowers}
          bgColor="bg-section-alternate"
        />
      </main>
      <Footer />
    </>
  );
}

    