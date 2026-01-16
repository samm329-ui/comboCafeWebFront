
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto py-12">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Combo Cafe & Gift Shop, your one-stop destination for delightful cakes, thoughtful gifts, and delicious food in Rampurhat.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple passion: to bring joy to our community by offering high-quality products and exceptional service. Whether you're celebrating a special occasion or just looking for a tasty treat, we have something for everyone.
              </p>
              <p className="text-gray-600">
                From our freshly baked cakes and pastries to our curated selection of unique gifts, every item is chosen with care. We believe in creating memorable experiences, one order at a time. Thank you for being a part of our story.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/hero%20images/ChatGPT%20Image%20Jan%2015,%202026,%2011_50_28%20PM.png"
                alt="About Combo Cafe & Gift Shop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
