
import { config } from '@/app/config';
import Image from 'next/image';

export default function ServiceStrip() {
  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <div className="text-center py-4">
          <h3 className="text-lg font-semibold text-gray-800">Bulk orders are acceptable</h3>
        </div>
      </div>
    </section>
  );
}
