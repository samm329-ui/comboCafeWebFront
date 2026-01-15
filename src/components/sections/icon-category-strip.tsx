
import { config } from '@/app/config';
import Image from 'next/image';

export default function IconCategoryStrip() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-around items-start text-center">
          {config.iconCategories.map((category) => (
            <a 
              key={category.label} 
              href={category.href} 
              className="group flex flex-col items-center gap-2 w-24"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
                <Image src={category.imageUrl} alt={category.label} layout="fill" objectFit="cover" />
              </div>
              <span className="text-sm font-medium text-gray-700">{category.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
