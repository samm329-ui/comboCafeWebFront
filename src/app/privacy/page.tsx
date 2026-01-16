
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
              <div className="space-y-4 text-gray-600">
                <p>This privacy policy sets out how we use and protect any information that you give us when you use this website. We are committed to ensuring that your privacy is protected.</p>

                <h2 className="text-2xl font-semibold pt-4">1. Information We Collect</h2>
                <p>We may collect the following information: name, contact information including email address, demographic information such as postcode, and other information relevant to customer surveys and/or offers.</p>

                <h2 className="text-2xl font-semibold pt-4">2. How We Use the Information</h2>
                <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: internal record keeping, to improve our products and services, and to periodically send promotional emails about new products, special offers or other information which we think you may find interesting.</p>

                <h2 className="text-2xl font-semibold pt-4">3. Security</h2>
                <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

                <h2 className="text-2xl font-semibold pt-4">4. Cookies</h2>
                <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs.</p>

                <h2 className="text-2xl font-semibold pt-4">5. Links to Other Websites</h2>
                <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
