import { MetadataRoute } from 'next';

const BASE_URL = 'https://combocafe.in';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/checkout/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
