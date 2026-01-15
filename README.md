# Ferns & Petals - E-commerce UI Clone

This project is a high-fidelity UI clone of a domestic e-commerce website, built with Next.js, React, and Tailwind CSS. It serves as a comprehensive example of a modern, multi-category online storefront.

## Key Features

### 1. Global Layout & Styling
- **Desktop-First Design:** Optimized for a 1440px centered viewport.
- **Color Palette:** A clean and soft color scheme with a white primary background, pastel section alternates (`#FFF7F1`, `#F9FAFB`), a soft peach primary accent, and an olive green secondary accent.
- **Typography:** Uses the "Inter" font family for a clean, modern look across all text elements.
- **Spacing System:** Adheres to a consistent spacing system for vertical rhythm and grid layouts.

### 2. Header & Navigation
- **Top Utility Bar:** A slim bar at the very top for promotions and secondary links like "Help" and "Track Order".
- **Main Header:** Features the brand logo, a central location selector combined with a large search bar, and user-centric icons for Account, Wishlist, and Cart.
- **Sticky Category Navigation:** A horizontal, scrollable list of main product categories that remains visible at the top of the page as the user scrolls.

### 3. Interactive Page Sections
- **Hero Carousel:** A full-width carousel for promotional banners, featuring autoplay and navigation controls.
- **Icon Category Strip:** A quick-access strip with circular icons for major product categories, complete with a subtle hover animation.
- **Domestic Service Strip:** Highlights key domestic delivery services like "Get Today" and "Midnight Delivery", explicitly excluding any international options.
- **Standardized Product Sections:** Reusable modules for displaying products in a grid, each with a title, optional subtitle, and a "View All" link. Product cards feature a clean design with hover-zoom effects.
- **Tabbed Sections:** Pill-style tabs (e.g., for Occasions) that dynamically filter and display different sets of products.

### 4. Specialized UI Modules
- **Payment & Offer Banners:** Dedicated banner sections to showcase domestic payment partners and promotional offers.
- **Gift Finder:** An interactive module with a soft mint background designed to help users find the perfect gift through a series of filters.
- **Horizontal Collections:** Image-first, horizontally scrollable carousels for showcasing curated collections like "Flower Collections" and "Delectable Cakes".

### 5. Domestic-Only Focus
- **No International Elements:** The entire UI has been carefully crafted to represent a domestic-only business. All references to international shipping, country selectors, world maps, and foreign currencies have been completely removed.
- **Relevant Content:** All sections, from the service strip to the footer, are tailored to a single-country operational model.

### 6. Footer
- **Comprehensive Links:** The footer is organized into logical columns for "Help & Support," "Business Solutions," and "Our Policies".
- **Newsletter & Socials:** Includes a newsletter subscription form and links to social media profiles.

## Project Structure

```
/src
├── app/
│   ├── globals.css            # Global styles, Tailwind directives, and CSS variables
│   ├── layout.tsx             # Root layout for the entire application
│   └── page.tsx               # The main entry point for the home page
│
├── components/
│   ├── layout/                # Header and Footer components
│   ├── sections/              # All major page sections (Hero, ProductSection, GiftFinder, etc.)
│   └── ui/                    # Reusable ShadCN UI components (Button, Card, etc.)
│
├── context/
│   └── cart-provider.tsx      # Manages the global shopping cart state (if implemented)
│
└── lib/
    └── utils.ts               # Utility functions (e.g., `cn` for classnames)
```

This project demonstrates a robust and scalable frontend architecture for a modern e-commerce platform, with a strong emphasis on cloning a specific UI design and tailoring it to a domestic market.
