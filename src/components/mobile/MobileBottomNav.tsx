'use client';
import { config } from '@/app/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t shadow-t-lg z-40">
      <div className="flex justify-around items-center h-16">
        {config.mobile.bottomNav.map((item) => {
          const Icon = item.Icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.id} href={item.href} className="flex flex-col items-center justify-center gap-1 text-gray-500">
              <Icon className={cn("h-6 w-6", isActive && "text-primary")} />
              <span className={cn("text-xs", isActive && "text-primary")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
       <div className="pb-safe-bottom"></div>
    </div>
  );
}
