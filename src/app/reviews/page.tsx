
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Star } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    name: "Priya S.",
    initials: "PS",
    review: "The Black Forest cake was absolutely divine! It was fresh, creamy, and delivered right on time for our celebration. Highly recommended!",
    rating: 5,
    date: "October 15, 2023"
  },
  {
    name: "Amit K.",
    initials: "AK",
    review: "I ordered a custom photo mug for my friend's birthday. The print quality was excellent and it made for a perfect, personal gift. Great service!",
    rating: 5,
    date: "October 12, 2023"
  },
  {
    name: "Sunita M.",
    initials: "SM",
    review: "The flower bouquet was fresh and beautifully arranged. It was even better than the picture online. Will definitely order again.",
    rating: 4,
    date: "October 10, 2023"
  },
  {
    name: "Rajesh V.",
    initials: "RV",
    review: "Good experience overall. The cake was tasty, but the delivery was a bit later than the selected time slot. Would appreciate more timely delivery.",
    rating: 4,
    date: "October 5, 2023"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">Customer Reviews</h1>
            <p className="mt-2 text-lg text-muted-foreground">See what our happy customers are saying.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback>{review.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">{review.name}</CardTitle>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                        </div>
                        <StarRating rating={review.rating} />
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
