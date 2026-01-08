
import { config } from '../config';

const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="min-h-screen bg-background text-foreground font-body">
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8 border-b pb-4">{title}</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout title="Privacy Policy">
            
            <p>
                {config.brand.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h3>1. Collection of Your Information</h3>
            <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
                <li>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you place an order or contact us.
                </li>
                <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </li>
            </ul>

            <h3>2. Use of Your Information</h3>
            <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
                <li>Process your orders and manage your account.</li>
                <li>Communicate with you about your orders, inquiries, and our services.</li>
                <li>Improve our website and offerings.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h3>3. Disclosure of Your Information</h3>
            <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h3>4. Security of Your Information</h3>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h3>5. Contact Us</h3>
            <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br />
                Email: <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                <br />
                Phone: <a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a>
            </p>
        </LegalPageLayout>
    );
}
