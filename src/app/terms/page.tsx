
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
              <div className="space-y-4 text-gray-600">
                <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
                
                <h2 className="text-2xl font-semibold pt-4">1. Use of the Website</h2>
                <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
                
                <h2 className="text-2xl font-semibold pt-4">2. Product Information</h2>
                <p>We strive to ensure that all details, descriptions, and prices of products appearing on the website are accurate. However, errors may occur. If we discover an error in the price of any goods which you have ordered, we will inform you of this as soon as possible.</p>
                
                <h2 className="text-2xl font-semibold pt-4">3. Ordering and Payment</h2>
                <p>All orders are subject to acceptance and availability. When placing an order, you undertake that all details you provide to us are true and accurate, that you are an authorized user of the credit or debit card used to place your order, and that there are sufficient funds to cover the cost of the goods.</p>

                <h2 className="text-2xl font-semibold pt-4">4. Limitation of Liability</h2>
                <p>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of this website.</p>
                
                <h2 className="text-2xl font-semibold pt-4">5. Governing Law</h2>
                <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of our country.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
