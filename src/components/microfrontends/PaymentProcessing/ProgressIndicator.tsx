
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { LoaderCircle, CreditCard, CircleCheck, CircleX } from "lucide-react";

export type PaymentStatus = "idle" | "processing" | "success" | "error";

interface ProgressIndicatorProps {
  status: PaymentStatus;
  errorMessage?: string;
}

const ProgressIndicator = ({ status, errorMessage }: ProgressIndicatorProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "processing") {
      const timer = setTimeout(() => setProgress(33), 500);
      const timer2 = setTimeout(() => setProgress(66), 1200);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    } else if (status === "success") {
      setProgress(100);
    } else if (status === "error") {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [status]);

  if (status === "idle") return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full space-y-4 shadow-xl">
        {status === "processing" && (
          <>
            <div className="flex items-center justify-center space-x-2">
              <LoaderCircle className="animate-spin h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Processing Payment</h3>
            </div>
            <Progress value={progress} />
            <p className="text-sm text-center text-muted-foreground">
              Please don't close this window while we process your payment...
            </p>
          </>
        )}

        {status === "success" && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-3">
              <CircleCheck className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Payment Successful!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your payment has been processed successfully. A confirmation email has been sent.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-red-100 p-3">
              <CircleX className="h-10 w-10 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Payment Failed</h3>
              <p className="text-sm text-red-500 mt-1">
                {errorMessage || "There was an error processing your payment. Please try again."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressIndicator;
