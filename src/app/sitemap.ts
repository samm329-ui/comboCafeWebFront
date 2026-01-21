import { MetadataRoute } from 'next';

const BASE_URL = 'https://combocafe.in';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/cakes`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/food`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/gifts`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/flowers`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/personalised-gifts`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/personalised-frames`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/menu`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/reviews`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/faqs`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    return staticPages;
}
