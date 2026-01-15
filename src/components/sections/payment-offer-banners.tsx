
import { config } from '@/app/config';
import Image from 'next/image';

export default function PaymentOfferBanners() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
            <Image src={config.paymentBanners.partners.imageUrl} alt={config.paymentBanners.partners.alt} layout="fill" objectFit="cover" />
          </div>
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
            <Image src={config.paymentBanners.appDownload.imageUrl} alt={config.paymentBanners.appDownload.alt} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
