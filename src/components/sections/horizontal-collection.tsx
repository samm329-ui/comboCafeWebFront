
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type CollectionItem = {
  title: string;
  imageUrl: string;
};

type HorizontalCollectionProps = {
  title: string;
  items: CollectionItem[];
  bgColor?: string;
};

const CollectionCard = ({ item }: { item: CollectionItem }) => (
  <Card className="overflow-hidden group border-0 rounded-lg">
    <CardContent className="p-0">
      <div className="relative aspect-square">
        <Image 
          src={item.imageUrl} 
          alt={item.title} 
          layout="fill" 
          className="object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4">
            <h4 className="font-semibold text-lg text-white">{item.title}</h4>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function HorizontalCollection({ title, items, bgColor = 'bg-white' }: HorizontalCollectionProps) {
  return (
    <section className={bgColor}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <Button variant="outline">View All</Button>
        </div>
        <Carousel
            opts={{
                align: "start",
                slidesToScroll: 2,
            }}
             className="w-full"
        >
            <CarouselContent className="-ml-4">
                {items.map((item) => (
                    <CarouselItem key={item.title} className="pl-4 md:basis-1/3 lg:basis-1/4">
                        <CollectionCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
