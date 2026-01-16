
'use client';

import { Search, Mic } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MobileSearch() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="search"
                name="search"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-gray-100 pl-10 pr-10 py-3 text-sm placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                placeholder="Personalised Gifts, Cakes, Flowers..."
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <Mic className="h-5 w-5 text-gray-400" />
            </div>
        </form>
    );
}
