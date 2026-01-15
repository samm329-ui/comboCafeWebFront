
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const config = {
  header: {
    utilityBar: {
      promoText: "Fast, Free, and Contactless Delivery",
    },
    logoUrl: "/logo.svg",
    navLinks: [
      { id: "birthday", label: "Birthday", href: "#" },
      { id: "anniversary", label: "Anniversary", href: "#" },
      { id: "cakes", label: "Cakes", href: "#" },
      { id: "flowers", label: "Flowers", href: "#" },
      { id: "plants", label: "Plants", href: "#" },
      { id: "gifts", label: "Gifts", href: "#" },
      { id: "personalised", label: "Personalised", href: "#" },
      { id: "combos", label: "Combos", href: "#" },
    ],
  },
  hero: {
    banners: [
      { imageUrl: "/hero-banner-1.jpg", alt: "Anniversary Gifts" },
      { imageUrl: "/hero-banner-2.jpg", alt: "Birthday Gifts" },
      { imageUrl: "/hero-banner-3.jpg", alt: "Same Day Delivery" },
    ],
  },
  iconCategories: [
    { label: "All Gifts", imageUrl: "/icon-all-gifts.png", href: "#" },
    { label: "Flowers", imageUrl: "/icon-flowers.png", href: "#" },
    { label: "Cakes", imageUrl: "/icon-cakes.png", href: "#" },
    { label: "Birthday", imageUrl: "/icon-birthday.png", href: "#" },
    { label: "Anniversary", imageUrl: "/icon-anniversary.png", href: "#" },
    { label: "Personalised", imageUrl: "/icon-personalised.png", href: "#" },
    { label: "Plants", imageUrl: "/icon-plants.png", href: "#" },
    { label: "Combos", imageUrl: "/icon-combos.png", href: "#" },
  ],
  serviceStrip: [
    { title: "Get Today", description: "Same Day Delivery", imageUrl: "/service-get-today.png" },
    { title: "Midnight", description: "Midnight Delivery", imageUrl: "/service-midnight.png" },
    { title: "Just Launched", description: "New Arrivals", imageUrl: "/service-just-launched.png" },
    { title: "Send in Bulk", description: "Bulk Orders", imageUrl: "/service-send-in-bulk.png" },
  ],
  productSections: {
    bestSellingCakes: [
      { id: "1", name: "Chocolate Truffle Cream Cake", price: "Rs. 549", imageUrl: "/prod-cake-1.jpg", badge: "BESTSELLER" },
      { id: "2", name: "Kit Kat Chocolate Cream Cake", price: "Rs. 699", imageUrl: "/prod-cake-2.jpg" },
      { id: "3", name: "Butterscotch Cake", price: "Rs. 499", imageUrl: "/prod-cake-3.jpg" },
      { id: "4", name: "Red Velvet Fresh Cream Cake", price: "Rs. 649", imageUrl: "/prod-cake-4.jpg", badge: "PREMIUM" },
    ],
    birthdaySpecial: [
      { id: "5", name: "Personalised Birthday Mug", price: "Rs. 349", imageUrl: "/prod-bday-1.jpg" },
      { id: "6", name: "Elegant Birthday Flower Bouquet", price: "Rs. 899", imageUrl: "/prod-bday-2.jpg", badge: "BESTSELLER" },
      { id: "7", name: "Birthday Explosion Box", price: "Rs. 799", imageUrl: "/prod-bday-3.jpg", badge: "NEW" },
      { id: "8", name: "Zodiac Sign Hamper", price: "Rs. 1299", imageUrl: "/prod-bday-4.jpg" },
    ],
    anniversaryGifts: [
      { id: "9", name: "Forever Rose in Glass Dome", price: "Rs. 1499", imageUrl: "/prod-anni-1.jpg", badge: "PREMIUM" },
      { id: "10", name: "Personalised Couple Caricature", price: "Rs. 999", imageUrl: "/prod-anni-2.jpg" },
      { id: "11", name: "Heart-Shaped Red Velvet Cake", price: "Rs. 749", imageUrl: "/prod-anni-3.jpg" },
      { id: "12", name: "Anniversary Wine Glasses Set", price: "Rs. 1199", imageUrl: "/prod-anni-4.jpg" },
    ]
  },
  occasionTabs: {
    title: "Gifts by Occasion",
    tabs: [
      { id: "for-her", label: "For Her" },
      { id: "for-him", label: "For Him" },
      { id: "for-kids", label: "For Kids" },
      { id: "for-parents", label: "For Parents" },
    ],
    products: {
      "for-her": [
        { id: "13", name: "Jewellery Box", price: "Rs. 899", imageUrl: "/prod-her-1.jpg" },
        { id: "14", name: "Scented Candle Set", price: "Rs. 699", imageUrl: "/prod-her-2.jpg" },
        { id: "15", name: "Luxury Spa Hamper", price: "Rs. 1599", imageUrl: "/prod-her-3.jpg" },
        { id: "16", name: "Personalised Photo Frame", price: "Rs. 499", imageUrl: "/prod-her-4.jpg" },
      ],
      "for-him": [
        { id: "17", name: "Leather Wallet & Belt Combo", price: "Rs. 1299", imageUrl: "/prod-him-1.jpg" },
        { id: "18", name: "Grooming Kit", price: "Rs. 999", imageUrl: "/prod-him-2.jpg" },
        { id: "19", name: "Whiskey Decanter Set", price: "Rs. 2499", imageUrl: "/prod-him-3.jpg" },
        { id: "20", name: "Smart Watch", price: "Rs. 3499", imageUrl: "/prod-him-4.jpg" },
      ],
      "for-kids": [
        { id: "21", name: "Plush Toy", price: "Rs. 599", imageUrl: "/prod-kids-1.jpg" },
        { id: "22", name: "Remote Control Car", price: "Rs. 1199", imageUrl: "/prod-kids-2.jpg" },
      ],
      "for-parents": [
         { id: "23", name: "Personalised Mugs", price: "Rs. 699", imageUrl: "/prod-parents-1.jpg" },
         { id: "24", name: "Indoor Plant", price: "Rs. 799", imageUrl: "/prod-parents-2.jpg" },
      ]
    },
  },
  paymentBanners: {
    partners: { imageUrl: "/payment-partners.png", alt: "Payment partners" },
    appDownload: { imageUrl: "/app-download-banner.png", alt: "Download the app" },
  },
  giftFinder: {
    title: "Looking for a perfect gift?",
    subtitle: "Use our gift finder",
    imageUrl: "/gift-finder.png",
    options: [
      { label: "For Who?", type: "who" },
      { label: "What Occasion?", type: "occasion" },
      { label: "What's Your Budget?", type: "budget" },
    ]
  },
  collections: {
    flowers: [
        { title: "Roses", imageUrl: "/collection-roses.jpg" },
        { title: "Lilies", imageUrl: "/collection-lilies.jpg" },
        { title: "Carnations", imageUrl: "/collection-carnations.jpg" },
        { title: "Orchids", imageUrl: "/collection-orchids.jpg" },
        { title: "Mixed Flowers", imageUrl: "/collection-mixed.jpg" },
    ],
    cakes: [
        { title: "Chocolate Cakes", imageUrl: "/collection-choco-cakes.jpg" },
        { title: "Photo Cakes", imageUrl: "/collection-photo-cakes.jpg" },
        { title: "Designer Cakes", imageUrl: "/collection-designer-cakes.jpg" },
        { title: "Heart-Shaped Cakes", imageUrl: "/collection-heart-cakes.jpg" },
        { title: "Red Velvet Cakes", imageUrl: "/collection-red-velvet.jpg" },
    ]
  },
  footer: {
    about: "Discover the perfect gift for every occasion. We are your one-stop destination for gifts, cakes, flowers, and more, offering reliable domestic delivery.",
    paymentIconsUrl: "/payment-icons.png",
    copyright: `© ${new Date().getFullYear()} Ferns & Petals. All rights reserved.`,
    social: [
      { label: "Facebook", Icon: Facebook, href: "#" },
      { label: "Instagram", Icon: Instagram, href: "#" },
      { label: "Twitter", Icon: Twitter, href: "#" },
      { label: "Youtube", Icon: Youtube, href: "#" },
    ],
    links: {
      help: [
        { label: "Track Your Order", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Customer Reviews", href: "#" },
      ],
      business: [
        { label: "Corporate Gifting", href: "#" },
        { label: "Franchise", href: "#" },
        { label: "Affiliate Program", href: "#" },
      ],
      policies: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Sitemap", href: "#" },
      ]
    }
  }
};
