
import { Bike } from 'lucide-react';
import React from 'react';

export default function FreeDeliveryPill() {
  return (
    <div className="px-4 py-2">
        <div className="bg-secondary/20 text-secondary-foreground rounded-lg p-2 flex items-center justify-center gap-2 text-xs shadow-sm">
            <Bike className="h-5 w-5 text-secondary" />
            <span className="font-medium text-secondary">FREE DELIVERY!!! On eligible delivery time slots.</span>
        </div>
    </div>
  );
}
