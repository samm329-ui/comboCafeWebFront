
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

export default function AboutPage() {
    return (
        <LegalPageLayout title="About Us">
            <h2>Welcome to {config.brand.name}!</h2>
            <p>
                Founded with a passion for celebrating life&apos;s special moments, {config.brand.name} is more than just a café—it&apos;s a destination. We believe that every day holds an opportunity for joy, connection, and a little bit of indulgence. Our mission is to blend the warmth of a neighborhood café with the thoughtful beauty of a boutique gift shop.
            </p>
            <h3>Our Story</h3>
            <p>
                It all started with a simple idea: to create a space where you could find the perfect cake for a birthday, a beautiful bouquet to brighten someone&apos;s day, and a cozy corner to enjoy a delicious cup of coffee, all under one roof. We wanted to make celebrating easy and accessible, offering a curated selection of high-quality products that speak from the heart.
            </p>
            <h3>What We Offer</h3>
            <p>
                <strong>Handcrafted Cakes & Desserts:</strong> Our bakers pour their hearts into creating decadent cakes, pastries, and desserts using only the finest ingredients. From classic flavors to custom creations, every bite is a taste of celebration.
            </p>
            <p>
                <strong>Curated Gifts & Flowers:</strong> We source fresh, vibrant flowers and unique gifts to help you express your feelings. Whether it&apos;s a single rose, a stunning bouquet, or a thoughtful gift combo, we have something for every occasion.
            </p>
            <p>
                <strong>Gourmet Café Fare:</strong> Our café menu is designed to delight your senses. Enjoy our specialty coffees, refreshing beverages, and a selection of savory snacks and light meals, all prepared with care and attention to detail.
            </p>
            <h3>Our Promise</h3>
            <p>
                At {config.brand.name}, we are committed to quality, creativity, and community. We strive to provide exceptional service and a welcoming atmosphere where memories are made. Thank you for being a part of our story. We look forward to celebrating with you!
            </p>
        </LegalPageLayout>
    );
}
