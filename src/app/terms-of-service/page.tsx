
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

export default function TermsOfServicePage() {
    return (
        <LegalPageLayout title="Terms of Service">
            
            <h3>1. Agreement to Terms</h3>
            <p>
                By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            
            <h3>2. Orders and Payment</h3>
            <p>
                All orders placed through our website are subject to acceptance and availability. We accept payment through the methods specified on our website. For custom orders, specific terms regarding payment and deposits will be communicated at the time of ordering.
            </p>

            <h3>3. Cancellations, Returns, and Refunds</h3>
            <p>
                For standard items, cancellation requests must be made within a reasonable timeframe before the scheduled delivery or pickup. Due to the perishable nature of our products, returns are generally not accepted. However, if you are unsatisfied with your order, please contact us within 24 hours of receipt, and we will do our best to address your concerns. Refunds or store credit are provided on a case-by-case basis.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
                The content on this website, including text, graphics, logos, and images, is the property of {config.brand.name} and is protected by copyright laws. You may not reproduce, distribute, or otherwise use any content without our express written permission.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
                To the fullest extent permitted by law, {config.brand.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our services.
            </p>

            <h3>6. Changes to Terms</h3>
            <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. You are advised to review these Terms of Service periodically for any changes.
            </p>

            <h3>7. Contact Us</h3>
            <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                Email: <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                <br />
                Phone: <a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a>
            </p>
        </LegalPageLayout>
    );
}
