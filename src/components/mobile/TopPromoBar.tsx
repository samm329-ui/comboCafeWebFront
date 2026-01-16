
'use client';
import { config } from '@/app/config';
import { Button } from '../ui/button';

export default function TopPromoBar() {
  const { text, buttonText, buttonLink } = config.mobile.promoBar;
  return (
    <div className="bg-secondary/20 text-secondary-foreground text-sm px-4 py-1.5 flex justify-between items-center">
      <span>{text}</span>
      <Button asChild variant="ghost" size="sm" className="h-auto p-1 text-secondary">
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </div>
  );
}
