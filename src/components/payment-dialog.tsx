
"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormDescription, FormMessage } from "./ui/form";

const paymentFormSchema = z.object({
  transactionId: z.string().regex(/^\d{12}$/, "ID must be 12 digits."),
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

type PaymentDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (transactionId: string) => void;
};

export function PaymentDialog({ isOpen, onClose, onConfirm }: PaymentDialogProps) {
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      transactionId: "",
    },
  });

  const { register, formState: { errors, isValid } } = form;

  const handleConfirm = (values: PaymentFormValues) => {
    onConfirm(values.transactionId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md grid-rows-[auto_1fr_auto] p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            Scan the QR code, then enter the Transaction ID below to confirm your order.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow overflow-y-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <Image
                src="https://gpfocwgfedokhmfsbcpy.supabase.co/storage/v1/object/public/asset/qr/WhatsApp%20Image%202026-01-09%20at%2010.03.14.jpeg"
                alt="Payment QR Code"
                fill
                className="object-contain rounded-md border"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground">Scan and pay using any UPI app.</p>
              <Badge variant="destructive" className="mt-2">Payment is mandatory</Badge>
            </div>
            
            <FormProvider {...form}>
              <form className="w-full space-y-2">
                <Label htmlFor="transactionId" className="font-semibold">Enter Transaction ID</Label>
                <Input 
                    id="transactionId"
                    placeholder="e.g. 412345678901"
                    maxLength={12}
                    {...register("transactionId")}
                />
                 <FormDescription>
                    Please enter the 12-digit UPI Transaction ID.
                 </FormDescription>
                 {errors.transactionId && (
                    <FormMessage>
                        {errors.transactionId.message}
                    </FormMessage>
                 )}
              </form>
            </FormProvider>

            <p className="text-xs text-muted-foreground text-center pb-4">After paying, enter the transaction ID from your UPI app and click below to place your order on WhatsApp.</p>
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 pt-4 border-t mt-auto">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleConfirm)} className="w-full">
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                disabled={!isValid}
              >
                Place Order on WhatsApp
              </Button>
            </form>
          </FormProvider>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
