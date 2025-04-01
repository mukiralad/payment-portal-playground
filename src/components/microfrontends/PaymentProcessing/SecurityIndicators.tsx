
import { Lock, ShieldCheck, CreditCard } from "lucide-react";

const SecurityIndicators = () => {
  return (
    <div className="border rounded-md p-4 bg-muted/30 mb-6">
      <div className="flex items-center space-x-2 mb-2">
        <Lock className="h-4 w-4 text-green-600" />
        <span className="text-sm font-medium text-green-700">Secure Checkout</span>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        Your payment information is protected by industry-standard encryption technology.
      </p>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-3 w-3 text-green-600" />
          <span>PCI DSS Compliant</span>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-3 w-3 text-green-600" />
          <span>Card Data Protected</span>
        </div>
        <div className="flex items-center space-x-2">
          <Lock className="h-3 w-3 text-green-600" />
          <span>SSL Encrypted</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-3 w-3 text-green-600" />
          <span>3D Secure Ready</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityIndicators;
