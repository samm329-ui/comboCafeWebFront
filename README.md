# Combo Café & Gift Shop - Next.js Showcase

This project is a fully-featured, production-ready website for a café and gift shop, built with Next.js, React, and Tailwind CSS. It serves as a comprehensive example of how to build a modern, responsive, and interactive e-commerce storefront.

## Key Features

### 1. Fully Responsive & Mobile-First Design
- **Core Technology:** Styled with Tailwind CSS using a utility-first approach for rapid and consistent UI development.
- **Mobile Experience:** Features a dedicated bottom navigation bar (`src/components/layout/bottom-nav.tsx`) for easy access on mobile devices, ensuring a seamless user experience.
- **Desktop Experience:** Utilizes a sticky header (`src/components/layout/header.tsx`) and multi-column grid layouts that adapt to larger screen sizes.

### 2. Interactive & Dynamic Hero Section
- **Component:** `src/components/sections/hero.tsx`
- **Functionality:** A full-screen hero that cycles through the main business categories (e.g., Cakes, Gifts, Food).
- **Dynamic Theming:** The site's primary accent color changes dynamically based on the active category displayed in the hero section, powered by the `AccentColorProvider` (`src/context/accent-color-provider.tsx`).
- **Effects:** Includes a subtle parallax scroll effect on the background image for a premium feel.

### 3. Multi-Level Dynamic Product Catalog
- **Component:** `src/components/sections/offerings.tsx`
- **Data Source:** All product information, including categories, sub-categories, items, prices, and image URLs, is managed from a single configuration file: `src/app/config.tsx`.
- **Hierarchical Navigation:** Users can drill down from main categories (e.g., "Food") to sub-categories (e.g., "Beverages") and even further (e.g., "Hot Beverages"), with smooth, animated transitions.
- **Centralized Images:** Product images are mapped through `src/lib/placeholder-images.json`, making it easy to manage and update all images from one location.

### 4. Integrated Ordering and Payment Flow
- **WhatsApp Ordering:** Instead of a traditional backend, the app facilitates ordering directly via WhatsApp.
    - The **Order Form** (`src/components/order-form.tsx`) uses `react-hook-form` and `zod` for robust validation.
    - On submission, it generates a pre-formatted WhatsApp message containing all order and delivery details.
- **UPI Payment:**
    - A **Payment Dialog** (`src/components/payment-dialog.tsx`) displays a QR code for payment via any UPI app.
    - The user enters the 12-digit UPI transaction ID to confirm payment before the WhatsApp message is generated.

### 5. Robust Shopping Cart
- **State Management:** The cart state is managed globally using a React Context via `src/context/cart-provider.tsx`.
- **Functionality:** Users can add items, view the cart in a slide-out sheet, remove items, and see the running total. The cart icon in the header and bottom nav displays a badge with the number of items.

### 6. Showcasing and Galleries
- **Best Sellers:** A dedicated section (`src/components/sections/bestsellers.tsx`) to highlight popular products and drive sales.
- **Image Carousels:** The Menu (`src/components/sections/menu.tsx`) and Gifts Gallery (`src/components/sections/gifts-gallery.tsx`) are presented in swipe-able carousels, using `embla-carousel-react`.

### 7. Real-Time Shop Status
- **Component:** `src/components/sections/contact.tsx`
- **Functionality:** The contact section includes a badge that automatically indicates whether the shop is currently "Open" or "Closed". This logic runs client-side to check the current time against the business hours defined in `src/app/config.tsx`.

## Project Structure

```
/src
├── app/
│   ├── (legal)/
│   │   ├── about/page.tsx       # About Us page
│   │   ├── privacy-policy/page.tsx # Privacy Policy page
│   │   └── terms-of-service/page.tsx # Terms of Service page
│   ├── client-page.tsx        # Main client component orchestrating the page sections
│   ├── config.tsx             # ★ THE MOST IMPORTANT FILE: All site data lives here
│   ├── globals.css            # Global styles and Tailwind CSS theme variables
│   └── page.tsx               # The main entry point for the home page
│
├── components/
│   ├── layout/                # Header, Footer, BottomNav
│   ├── sections/              # Major page sections (Hero, Offerings, Contact, etc.)
│   ├── ui/                    # Reusable ShadCN UI components (Button, Card, etc.)
│   ├── cart.tsx               # The slide-out cart component
│   ├── order-form.tsx         # The delivery details form
│   └── payment-dialog.tsx     # The UPI QR code and transaction ID dialog
│
├── context/
│   ├── accent-color-provider.tsx # Manages the dynamic theme accent color
│   └── cart-provider.tsx      # Manages the global shopping cart state
│
└── lib/
    ├── placeholder-images.json # Central repository for all image URLs and hints
    ├── placeholder-images.ts  # Loader for the JSON data
    └── utils.ts               # Utility functions (e.g., `cn` for classnames)
```

## How to Customize for Another Website

To adapt this project for a different business, you only need to edit a few key files:

### 1. Update Brand, Contact, and Content
- **File:** `src/app/config.tsx`
- **Actions:**
    - Change `brand.name`.
    - Update all contact details in `contact` (phone, email, address, map URL).
    - Modify the text content for the `hero`, `finalCta`, `footer`, etc.

### 2. Update Products and Categories
- **File:** `src/app/config.tsx`
- **Actions:**
    - Modify the `offerings` object to reflect your own product structure. You can add, remove, or rename categories, sub-categories, and items.
    - Update item properties: `name`, `description`, `price`, and `imageUrl`. The `imageUrl` should correspond to an ID in the placeholder JSON file.

### 3. Update Images
- **File:** `src/lib/placeholder-images.json`
- **Actions:**
    - To change an image, simply update the `imageUrl` for the corresponding `id`.
    - To add a new image, create a new entry with a unique `id`, `description`, `imageUrl`, and a `imageHint` (for AI).
    - Then, reference this new `id` in your `config.tsx` file.

### 4. Update Theme and Styling
- **File:** `src/app/globals.css`
- **Actions:**
    - Adjust the HSL values for `--background`, `--foreground`, and other CSS variables to match your brand's color palette.
- **File:** `tailwind.config.ts`
- **Actions:**
    - Change the `fontFamily` to use different Google Fonts for body and headline text. Remember to update the font import link in `src/app/layout.tsx`.
