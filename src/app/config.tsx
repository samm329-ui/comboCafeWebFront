
import { Facebook, Instagram, CakeSlice, Gift, Flower, Cookie, Home, BookOpen, PartyPopper, Heart, Sparkles, Package, MoreHorizontal } from "lucide-react";
import { GiChocolateBar } from "react-icons/gi";

const supabaseUrl = "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/images";

export const config = {
  header: {
    utilityBar: {
      promoText: "Order Today, Receive Tomorrow",
    },
    logoUrl: `https://picsum.photos/seed/brand-logo/180/40`,
    navLinks: [
      { id: "cakes", label: "Cakes", href: "/cakes" },
      {
        id: "gifts",
        label: "Gifts",
        href: "/gifts",
        subLinks: [
          { id: "all-gifts", label: "All Gifts", href: "/gifts" },
          { id: "personalised-frames", label: "Personalised Frames", href: "/personalised-frames" },
          { id: "personalised-mugs-cushions", label: "Personalised Mugs & Cushions", href: "/personalised-gifts" },
        ]
      },
      { id: "food", label: "Food", href: "/food" },
      { id: "our-menu", label: "Our Menu", href: "/menu" },
      { id: "flowers", label: "Flowers & More", href: "/flowers" },
      { id: "about-us", label: "About Us", href: "/about" },
      { id: "contact-us", label: "Contact Us", href: "/contact" },
    ],
  },
  hero: {
    title: "ANNIVERSARY GIFTS",
    subtitle: "Perfect Products & Fresh Cakes",
    buttonText: "Shop Now",
    buttonLink: "#best-selling-cakes",
    imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/1ChatGPT%20Image%20Jan%2020,%202026,%2003_26_56%20PM_upscayl_2x_digital-art-4x.webp",
  },
  iconCategories: [
    { id: "cakes", label: "Cakes", href: "/cakes", Icon: CakeSlice },
    { id: "mugs", label: "Mugs", href: "/gifts", Icon: Gift },
    { id: "quick-bites", label: "Quick Bites", href: "/food", Icon: Cookie },
    { id: "flowers", label: "Flowers", href: "/flowers", Icon: Flower },
    { id: "combos", label: "Combos", href: "/flowers", Icon: Package },
    { id: "chocolates", label: "Chocolates", href: "/search?q=chocolate", Icon: GiChocolateBar },
    { id: "all-products", label: "All", href: "/", Icon: MoreHorizontal },
  ],
  serviceStrip: {
    title: "Bulk orders are acceptable",
  },
  freeDeliveryBanner: {
    imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/ChatGPT%20Image%20Jan%2020,%202026,%2003_m33_32%20PM_upscayl_2x_digital-art-4x.webp",
    alt: "Free Delivery Banner"
  },
  menu: {
    title: "Our Menu",
    subtitle: "Explore our wide range of delicious offerings",
    images: [
      { id: "menu1", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%201.png", alt: "Menu Page 1" },
      { id: "menu2", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%202.png", alt: "Menu Page 2" },
      { id: "menu3", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%203.png", alt: "Menu Page 3" },
      { id: "menu4", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%204.png", alt: "Menu Page 4" },
      { id: "menu5", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%205.png", alt: "Menu Page 5" },
      { id: "menu6", src: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/menu%206.png", alt: "Menu Page 6" },
    ]
  },
  productSections: {
    bestSellingCakes: [
      { id: "1", name: "Anniversary Gifts", price: "800", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/vanilla%20heart%20400.jpeg", description: "A festive treat to make any birthday special.", badge: "BEST SELLER" },
      { id: "2", name: "Cake-Mug", price: "330", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Coffee%20Mug%20(2)%20199.jpeg", description: "Layers of chocolate, cream, and cherries.", badge: "LIMITED STOCK" },
    ],
    allCakes: [
      { id: "c1", name: "Birthday Delight", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/birthday%20delight%20350.jpeg", description: "A festive treat for any birthday celebration." },
      { id: "c2", name: "Black Forest", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/Black%20forest450%20.jpeg", description: "Classic layers of chocolate, cream, and cherry." },
      { id: "c3", name: "Butterscotch", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/butter%20scotch%20400.jpeg", description: "Sweet and crunchy butterscotch goodness." },
      { id: "c4", name: "Butterscotch Special", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/butter%20scotch%20450.jpeg", description: "An extra special butterscotch delight." },
      { id: "c5", name: "Butterscotch Treat", price: "390", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/butterscotch%20390.jpeg", description: "A delightful and crunchy butterscotch cake." },
      { id: "c6", name: "Premium Butterscotch", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/butterscotch%20450%20(2).jpeg", description: "Our premium take on the classic butterscotch cake." },
      { id: "c7", name: "Choco Blush", price: "500", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20blush%20500.jpeg", description: "A beautiful and delicious chocolate blush cake." },
      { id: "c8", name: "Choco Cafe", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20cafe%20400.jpeg", description: "The perfect blend of chocolate and coffee." },
      { id: "c9", name: "Choco Cafe Special", price: "430", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20cafe%20430%20.jpeg", description: "An enhanced choco-coffee experience." },
      { id: "c10", name: "Choco Crunch", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20crunch%20400%20(2).jpeg", description: "A chocolate cake with a delightful crunch." },
      { id: "c11", name: "Choco Delight", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20delight%20450.jpeg", description: "A true delight for chocolate lovers." },
      { id: "c12", name: "Choco Heart", price: "480", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20heart%20480.jpeg", description: "A heart-shaped cake full of chocolatey goodness." },
      { id: "c13", name: "Large Choco Heart", price: "550", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20heart%20550.jpeg", description: "A bigger heart for a bigger celebration." },
      { id: "c14", name: "Choco KitKat", price: "480", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20kitkat%20480.jpeg", description: "A crunchy and chocolatey KitKat cake." },
      { id: "c15", name: "Choco Oreo", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20oreo%20450.jpeg", description: "The perfect combination of chocolate and Oreo cookies." },
      { id: "c16", name: "Choco Oreo Blush", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20oreo%20blush%20450%20.jpeg", description: "A beautiful cake with Oreo and chocolate flavors." },
      { id: "c17", name: "Choco Pineapple", price: "380", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20pineapple%20380%20%20(2).jpeg", description: "A unique blend of chocolate and pineapple." },
      { id: "c18", name: "Choco Shots", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20shots%20450.jpeg", description: "A chocolate cake decorated with delicious choco shots." },
      { id: "c19", name: "Choco Vanilla", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20vanilla%20350%20.jpeg", description: "The classic combination of chocolate and vanilla." },
      { id: "c20", name: "Choco Vanilla Swirl", price: "360", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20vanilla%20360.jpeg", description: "A beautiful swirl of chocolate and vanilla flavors." },
      { id: "c21", name: "Choco Vanilla Special", price: "380", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20vanilla%20380%20(2).jpeg", description: "Our special take on the choco-vanilla cake." },
      { id: "c22", name: "Choco Vanilla Premium", price: "390", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/choco%20vanilla%20390.jpeg", description: "A premium version of our choco-vanilla cake." },
      { id: "c23", name: "Rich Choco Vanilla", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/Choco%20vanilla%20400.jpeg", description: "A rich and decadent choco-vanilla cake." },
      { id: "c24", name: "Christmas Cake", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/christmas%20cake%20400.jpeg", description: "A festive cake to celebrate the holiday season." },
      { id: "c25", name: "Cup Cake", price: "55", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/cup%20cake%2055.jpeg", description: "A delicious and cute single-serving cupcake." },
      { id: "c26", name: "Doll Cake (2 pounds)", price: "750", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/doll%20cake%20750%202%20punds.jpeg", description: "An impressive 2-pound doll cake for a special celebration." },
      { id: "c27", name: "Princess Doll Cake", price: "800", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/doll%20cake%20800.jpeg", description: "A beautiful princess doll cake, perfect for birthdays." },
      { id: "c28", name: "Doraemon Cake", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/doraemon%20400.jpeg", description: "A fun Doraemon-themed cake for kids." },
      { id: "c29", name: "Photo Printed Cake", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/face%20printed%20450.jpeg", description: "Personalize your cake with a printed photo." },
      { id: "c30", name: "Filled with Choco Chips", price: "500", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/Filled%20with%20choco%20chips%20500%20.jpeg", description: "A chocolate lover's dream, filled with choco chips." },
      { id: "c31", name: "Football Cake", price: "430", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/foot%20ball%20430.jpeg", description: "The perfect cake for a football fan's celebration." },
      { id: "c32", name: "Mango Cake", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/mango%20cake%20450.jpeg", description: "A refreshing cake with the sweet taste of mango." },
      { id: "c33", name: "Mango Delight", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/mango%20delight%20450.jpeg", description: "A delightful cake bursting with mango flavor." },
      { id: "c34", name: "Pineapple Cake", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/pineapple%20350.jpeg", description: "A classic and refreshing pineapple-flavored cake." },
      { id: "c35", name: "Princess Cake", price: "470", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/princes%20cake%20470.jpeg", description: "A cake fit for a princess, beautifully decorated." },
      { id: "c36", name: "Pure Choco", price: "450", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/pure%20choco%20450.jpeg", description: "For the ultimate chocolate purist." },
      { id: "c37", name: "Queen Neck Cake", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/queen%20neck%20400.jpeg", description: "An elegantly designed cake for a queen." },
      { id: "c38", name: "Snow White Cake", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/snow%20white%20400%20.jpeg", description: "A beautiful cake inspired by Snow White." },
      { id: "c39", name: "Strawberry Blush", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/stawberry%20blush%20400.jpeg", description: "A lovely cake with a hint of strawberry." },
      { id: "c40", name: "Semi Doll Cake", price: "550", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/swmi%20doll%20cake%20550.jpeg", description: "A beautiful semi-doll cake design." },
      { id: "c41", name: "Two In One Flavor", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/two%20in%20one%20400.jpeg", description: "Can't decide? Get two flavors in one cake." },
      { id: "c42", name: "Two In One Special", price: "380", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/two%20inone%20380.jpeg", description: "Another two-flavor combination to enjoy." },
      { id: "c43", name: "Classic Vanilla", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/Vanilla%20350%20.jpeg", description: "A simple and elegant classic vanilla cake." },
      { id: "c44", name: "Vanilla Heart", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/vanilla%20heart%20400.jpeg", description: "A heart-shaped vanilla cake for your loved one." },
      { id: "c45", name: "Vanilla with Choco Delight", price: "800", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/Vanilla%20with%20choco%20delight%20800.jpeg", description: "The ultimate combination of vanilla and rich chocolate." },
      { id: "c46", name: "Simple Vanilla", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/vnilla%20350.jpeg", description: "A simple, no-fuss vanilla cake." },
      { id: "c47", name: "White Blooms", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/white%20blooms%20400.jpeg", description: "An elegant cake decorated with white floral designs." },
      { id: "c48", name: "White Forest", price: "400", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/white%20forest%20400.jpeg", description: "A delicious twist on the classic black forest cake." },
      { id: "c49", name: "Yummy Butterscotch", price: "380", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/yummy%20butterscotch%20380%20.jpeg", description: "A truly yummy butterscotch cake." },
    ],
    gifts: [
      { id: "g1", name: "Coffee Mug", price: "199", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Coffee%20Mug%20(1)%20199.jpeg", description: "A classic mug for your daily coffee." },
      { id: "g2", name: "Coffee Mug", price: "199", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Coffee%20Mug%20(2)%20199.jpeg", description: "A stylish mug for your favorite beverage." },
      { id: "g3", name: "Coffee Mug", price: "199", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Coffee%20Mug%20199.jpeg", description: "Another great coffee mug." },
    ],
    personalisedFrames: [
      { id: "g6", name: "Customised Photo Frame", price: "350", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Customized%20Photo%20Frame350.jpeg", description: "A classic frame for your cherished photos." },
    ],
    personalisedMugsAndCushions: [
      { id: "g1", name: "Coffee Mug", price: "199", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/gift%20images/Coffee%20Mug%20(1)%20199.jpeg", description: "A classic mug for your daily coffee." },
    ],
    foodItems: [
        { id: "s1", name: "Veg Puff", price: "60", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/veg%20puff.jpg", description: "A savory and flaky pastry filled with spiced vegetables." },
        { id: "s2", name: "Cheese Sandwich", price: "90", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/cheese%20sandwich.jpg", description: "A classic sandwich with a generous layer of cheese." },
        { id: "s3", name: "Garlic Bread", price: "100", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/garluc%20bread.jpg", description: "Toasted bread with a savory garlic butter spread." },
        { id: "hb1", name: "Espresso", price: "80", imageUrl: `https://images.unsplash.com/photo-1676689082818-bc4fed83bad3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A strong and concentrated coffee shot." },
        { id: "hb2", name: "Americano", price: "100", imageUrl: `https://images.unsplash.com/photo-1669872484166-e11b9638b50e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "Espresso diluted with hot water." },
        { id: "hb3", name: "Cappuccino", price: "120", imageUrl: `https://images.unsplash.com/photo-1718267050132-2f3126e1e57e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "Espresso, steamed milk, and milk foam." },
        { id: "hb4", name: "Caffe Latte", price: "120", imageUrl: `https://images.unsplash.com/photo-1729364983489-d4d569978fd7?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A creamy coffee with more steamed milk." },
        { id: "hb5", name: "Mocha", price: "130", imageUrl: `https://images.unsplash.com/photo-1592663533909-f75fe1ae99a4?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A rich blend of coffee and chocolate." },
        { id: "hb6", name: "Hot Chocolate", price: "110", imageUrl: `https://images.unsplash.com/photo-1637572815755-c4b80092dce1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A warm and comforting chocolate beverage." },
        { id: "cb1", name: "Chocolate Frappe", price: "160", imageUrl: 'https://images.unsplash.com/photo-1696487773677-c0c8061fe3d2?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A rich and creamy chocolate frappe.' },
        { id: "cb2", name: "Iced Latte", price: "130", imageUrl: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Chilled espresso with milk over ice.' },
        { id: "cb3", name: "Cold Coffee", price: "140", imageUrl: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A classic refreshing cold coffee.' },
        { id: "cb4", name: "Strawberry Milkshake", price: "150", imageUrl: 'https://images.unsplash.com/photo-1629174114500-6ec256a6213f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A sweet and creamy strawberry milkshake.' },
    ],
    snacks: [
        { id: "s1", name: "Veg Puff", price: "60", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/veg%20puff.jpg", description: "A savory and flaky pastry filled with spiced vegetables.", badge: "QUICK BITE" },
        { id: "s2", name: "Cheese Sandwich", price: "90", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/cheese%20sandwich.jpg", description: "A classic sandwich with a generous layer of cheese.", badge: "PREMIUM" },
        { id: "s3", name: "Garlic Bread", price: "100", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/snacks/garluc%20bread.jpg", description: "Toasted bread with a savory garlic butter spread.", badge: "SAME DAY" },
    ],
    hotBeverages: [
        { id: "hb1", name: "Espresso", price: "80", imageUrl: `https://images.unsplash.com/photo-1676689082818-bc4fed83bad3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A strong and concentrated coffee shot.", badge: "HOT" },
        { id: "hb2", name: "Americano", price: "100", imageUrl: `https://images.unsplash.com/photo-1669872484166-e11b9638b50e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "Espresso diluted with hot water." },
        { id: "hb3", name: "Cappuccino", price: "120", imageUrl: `https://images.unsplash.com/photo-1718267050132-2f3126e1e57e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "Espresso, steamed milk, and milk foam." },
        { id: "hb4", name: "Caffe Latte", price: "120", imageUrl: `https://images.unsplash.com/photo-1729364983489-d4d569978fd7?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A creamy coffee with more steamed milk." },
        { id: "hb5", name: "Mocha", price: "130", imageUrl: `https://images.unsplash.com/photo-1592663533909-f75fe1ae99a4?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A rich blend of coffee and chocolate." },
        { id: "hb6", name: "Hot Chocolate", price: "110", imageUrl: `https://images.unsplash.com/photo-1637572815755-c4b80092dce1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, description: "A warm and comforting chocolate beverage." },
    ],
    coldBeverages: [
      { id: "cb1", name: "Chocolate Frappe", price: "160", imageUrl: 'https://images.unsplash.com/photo-1696487773677-c0c8061fe3d2?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A rich and creamy chocolate frappe.', badge: "CHILLED" },
      { id: "cb2", name: "Iced Latte", price: "130", imageUrl: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Chilled espresso with milk over ice.' },
      { id: "cb3", name: "Cold Coffee", price: "140", imageUrl: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A classic refreshing cold coffee.' },
      { id: "cb4", name: "Strawberry Milkshake", price: "150", imageUrl: 'https://images.unsplash.com/photo-1629174114500-6ec256a6213f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'A sweet and creamy strawberry milkshake.' },
    ],
    flowerProducts: [
      { id: "fp1", name: "Single Rose", price: "50", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/flowers/single%20rose.jpg", description: "A single, elegant rose for a simple gesture." },
    ],
  },
  giftFinder: {
    title: "Looking for a perfect gift?",
    subtitle: "Use our gift finder",
    buttonText: "FIND",
    options: [
      { label: "For Who?", type: "who" },
      { label: "What Occasion?", type: "occasion" },
      { label: "What's Your Budget?", type: "budget" },
    ]
  },
  collections: {
    flowers: [
        { title: "Roses", imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b17a1d02b2?w=500&auto=format&fit=crop" },
    ],
    cakes: [
        { id: "dc1", title: "Chocolate Slice Cake", description: "A rich and decadent slice of chocolate heaven.", price: "120", imageUrl: "https://images.unsplash.com/photo-1700448293876-07dca826c161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "dc2", title: "Vanilla Slice Cake", description: "A classic, light, and fluffy vanilla slice.", price: "100", imageUrl: "https://images.unsplash.com/photo-1575824805849-fbf1fe38ddba?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "dc3", title: "Strawberry Slice Cake", description: "A sweet and fruity slice of strawberry cake.", price: "110", imageUrl: "https://images.unsplash.com/photo-1667298216085-b0bf5a2e1944?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "dc4", title: "Red Velvet Cake Slice", description: "A slice of our signature, moist red velvet cake.", price: "130", imageUrl: "https://images.unsplash.com/photo-1688153009623-0d9a3ba1b105?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "dc5", title: "Chocolate Brownie", description: "A fudgy and rich chocolate brownie treat.", price: "90", imageUrl: "https://images.unsplash.com/photo-1642587493586-56d8bd0a1bd3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "dc6", title: "Classic Cupcake", description: "A perfectly sweet and simple cupcake.", price: "55", imageUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/cakes/cup%20cake%2055.jpeg" },
    ]
  },
  footer: {
    about: "Welcome to Combo Cafe & Gift Shop, your one-stop destination for delightful cakes, thoughtful gifts, and delicious food in Rampurhat.",
    copyright: `© {YEAR} Combo Cafe and Gift Shop. All rights reserved.`,
    social: [
      { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/19LJ2HN2aG/" },
      { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/combo_cafe_gift_store?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    ],
    links: {
      help: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "Customer Reviews", href: "/reviews" },
      ],
      business: [
        { label: "Corporate Gifting", href: "/coming-soon" },
        { label: "Franchise", href: "/coming-soon" },
      ],
      policies: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ]
    }
  },
  mobile: {
    promoBar: {
      text: "Save 20% | Code: NEWAPP",
      buttonText: "OPEN APP",
      buttonLink: "#"
    },
    bottomNav: [
      { id: "home", label: "Home", href: "/", Icon: Home },
      { id: "menu", label: "Menu", href: "/menu", Icon: BookOpen },
      { id: "gifts", label: "Gifts", href: "/gifts", Icon: Gift },
      { id: "flowers", label: "Flowers", href: "/flowers", Icon: Flower },
      { id: "food", label: "Food", href: "/food", Icon: Cookie }
    ]
  },
  payment: {
    qrCodeUrl: "https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/qr%20code.jpeg"
  }
};

    