
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Mock saved payment methods
const savedMethods = [
  {
    id: "card-1",
    type: "visa",
    last4: "4242",
    expiry: "04/28",
    isDefault: true,
  },
  {
    id: "card-2",
    type: "mastercard",
    last4: "5555",
    expiry: "12/25",
    isDefault: false,
  },
];

interface SavedPaymentMethodsProps {
  onSelect: (cardId: string) => void;
  onAddNew: () => void;
}

const SavedPaymentMethods = ({ onSelect, onAddNew }: SavedPaymentMethodsProps) => {
  const [selectedCard, setSelectedCard] = useState(savedMethods[0].id);

  const handleChange = (value: string) => {
    setSelectedCard(value);
    onSelect(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Saved Payment Methods</h3>
        <Button variant="link" size="sm" className="p-0 h-auto" onClick={onAddNew}>
          + Add New
        </Button>
      </div>

      <RadioGroup value={selectedCard} onValueChange={handleChange} className="gap-3">
        {savedMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center space-x-2 border rounded-md p-3 transition-all ${
              selectedCard === method.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
            }`}
          >
            <RadioGroupItem value={method.id} id={method.id} className="data-[state=checked]:text-primary" />
            <Label
              htmlFor={method.id}
              className="flex flex-1 items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-muted rounded-md p-1">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">
                    {method.type === "visa" ? "Visa" : "Mastercard"} •••• {method.last4}
                  </div>
                  <div className="text-xs text-muted-foreground">Expires {method.expiry}</div>
                </div>
              </div>
              {method.isDefault && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center">
                  <Check className="h-3 w-3 mr-1" /> Default
                </span>
              )}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SavedPaymentMethods;
