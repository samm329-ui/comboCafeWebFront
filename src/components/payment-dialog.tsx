
"use client";

import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import { Badge } from "./ui/badge";

type PaymentDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function PaymentDialog({ isOpen, onClose, onConfirm }: PaymentDialogProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            Scan the QR code to pay. Payment is mandatory before delivery.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            <Image
              src="/qr-code.png"
              alt="Payment QR Code"
              fill
              className="object-contain rounded-md border"
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Scan and pay using any UPI app.</p>
            <Badge variant="destructive" className="mt-2">Payment is mandatory</Badge>
          </div>
          <p className="text-xs text-muted-foreground text-center">After paying, click the button below to confirm your order on WhatsApp. Please send the payment screenshot in the chat.</p>
        </div>
        <DialogFooter>
          <Button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={onConfirm}
          >
            Place Order on WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
