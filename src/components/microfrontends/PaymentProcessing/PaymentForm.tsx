
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Calendar, Lock, User } from "lucide-react";
import SecurityIndicators from "./SecurityIndicators";
import SavedPaymentMethods from "./SavedPaymentMethods";
import ProgressIndicator, { PaymentStatus } from "./ProgressIndicator";

// Define the form schema with validation
const paymentFormSchema = z.object({
  cardholderName: z.string().min(3, "Cardholder name is required"),
  cardNumber: z
    .string()
    .min(16, "Card number should be 16 digits")
    .max(19, "Card number should not exceed 19 digits")
    .regex(/^[0-9\s-]+$/, "Card number must contain only digits, spaces, or hyphens"),
  expiryMonth: z.string().min(1, "Month is required"),
  expiryYear: z.string().min(1, "Year is required"),
  cvv: z
    .string()
    .min(3, "CVV must be 3-4 digits")
    .max(4, "CVV must be 3-4 digits")
    .regex(/^\d+$/, "CVV must contain only digits"),
  billingAddress: z.string().min(5, "Billing address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z
    .string()
    .min(5, "ZIP code must be 5 digits")
    .regex(/^\d+$/, "ZIP code must contain only digits"),
  saveCard: z.boolean().optional(),
  splitPayment: z.boolean().optional(),
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

const PaymentForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");
  const [paymentTab, setPaymentTab] = useState<"new" | "saved">("new");
  const [selectedSavedCard, setSelectedSavedCard] = useState<string | null>(null);
  const [showSplitPayment, setShowSplitPayment] = useState(false);
  
  // Get current year for expiry date options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => (currentYear + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return month < 10 ? `0${month}` : `${month}`;
  });
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      cardholderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      billingAddress: "",
      city: "",
      state: "",
      zipCode: "",
      saveCard: false,
      splitPayment: false,
    },
  });
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  
  // Handle form submission
  const onSubmit = async (data: PaymentFormValues) => {
    setIsSubmitting(true);
    setPaymentStatus("processing");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    // Random success/failure for demo purposes
    const isSuccessful = Math.random() > 0.3;
    
    if (isSuccessful) {
      setPaymentStatus("success");
      // Wait a bit before showing the success toast and resetting
      setTimeout(() => {
        toast({
          title: "Payment Successful",
          description: "Your payment has been processed successfully.",
          duration: 5000,
        });
        
        // Reset form and state
        form.reset();
        setIsSubmitting(false);
        setPaymentStatus("idle");
      }, 2000);
    } else {
      setPaymentStatus("error");
      // Wait a bit before allowing retry
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Payment Failed",
          description: "There was an issue processing your payment. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }, 2000);
    }
  };

  const handleSavedCardSelection = (cardId: string) => {
    setSelectedSavedCard(cardId);
  };

  const handleAddNewCard = () => {
    setPaymentTab("new");
  };

  const handleQuickPay = () => {
    setIsSubmitting(true);
    setPaymentStatus("processing");
    
    // Simulate API call for one-click payment
    setTimeout(() => {
      setPaymentStatus("success");
      setTimeout(() => {
        toast({
          title: "Quick Payment Successful",
          description: "Your payment has been processed using your saved card.",
          duration: 5000,
        });
        setIsSubmitting(false);
        setPaymentStatus("idle");
      }, 2000);
    }, 2000);
  };
  
  return (
    <>
      <ProgressIndicator status={paymentStatus} />
      
      <div className="space-y-6">
        <SecurityIndicators />
        
        <Tabs value={paymentTab} onValueChange={(v) => setPaymentTab(v as "new" | "saved")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="saved" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              Saved Cards
            </TabsTrigger>
            <TabsTrigger value="new" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              New Card
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="saved" className="space-y-6 mt-4">
            <SavedPaymentMethods 
              onSelect={handleSavedCardSelection} 
              onAddNew={handleAddNewCard} 
            />
            
            <div className="mt-6">
              <Button 
                type="button" 
                className="w-full btn-gradient"
                disabled={isSubmitting || !selectedSavedCard}
                onClick={handleQuickPay}
              >
                {isSubmitting ? "Processing..." : "Quick Pay"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Card Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Card Details</h3>
                  
                  <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="pl-10"
                            />
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="1234 5678 9012 3456"
                              {...field}
                              onChange={(e) => {
                                field.onChange(formatCardNumber(e.target.value));
                              }}
                              maxLength={19}
                              className="pl-10"
                            />
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Expiry Date</Label>
                      <div className="grid grid-cols-2 gap-2 relative">
                        <FormField
                          control={form.control}
                          name="expiryMonth"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="MM" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {months.map((month) => (
                                    <SelectItem key={month} value={month}>
                                      {month}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="expiryYear"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="YY" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {years.map((year) => (
                                    <SelectItem key={year} value={year}>
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="123"
                                maxLength={4}
                                {...field}
                                className="pl-10"
                              />
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Billing Address Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing Address</h3>
                  
                  <FormField
                    control={form.control}
                    name="billingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="San Francisco" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="CA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="94105" maxLength={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Payment Options */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Options</h3>
                  
                  <FormField
                    control={form.control}
                    name="saveCard"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Save this card for future payments</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="splitPayment"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              setShowSplitPayment(!!checked);
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Split payment into multiple installments</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {showSplitPayment && (
                    <div className="p-4 border rounded-md bg-muted/30">
                      <h4 className="text-sm font-medium mb-2">Payment Plan Options</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="plan-1" className="flex items-center">
                            <input
                              type="radio"
                              id="plan-1"
                              name="payment-plan"
                              className="mr-2"
                              defaultChecked
                            />
                            2 monthly payments of $64.99
                          </Label>
                          <span className="text-sm text-muted-foreground">No fees</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="plan-2" className="flex items-center">
                            <input
                              type="radio"
                              id="plan-2"
                              name="payment-plan"
                              className="mr-2"
                            />
                            4 monthly payments of $32.50
                          </Label>
                          <span className="text-sm text-muted-foreground">No fees</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-gradient"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Payment"}
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PaymentForm;
