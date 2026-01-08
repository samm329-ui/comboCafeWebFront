
"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import GiftsGallery from './gifts-gallery';

type GiftsOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function GiftsOverlay({ isOpen, onClose }: GiftsOverlayProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-sm z-[200] flex flex-col items-center justify-start transition-all duration-500", 
        isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    )}>
        <div className="absolute top-4 right-4 z-10">
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close" className="text-foreground/70 hover:text-foreground">
                <X className="h-6 w-6" />
            </Button>
        </div>

        <div className={cn("w-full h-full overflow-y-auto pt-20")}>
            <GiftsGallery />
        </div>
    </div>
  );
}
