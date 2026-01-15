
import { config } from '@/app/config';
import Image from 'next/image';

export default function ServiceStrip() {
  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {config.serviceStrip.map((service) => (
            <div key={service.title} className="flex items-center gap-4">
              <div className="relative w-14 h-14">
                <Image src={service.imageUrl} alt={service.title} layout="fill" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
