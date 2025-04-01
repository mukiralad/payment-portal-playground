
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Smartphone, Check, AlertTriangle } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";

const MFASetup = () => {
  const [step, setStep] = useState<"intro" | "verify" | "success">("intro");
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleEnableMFA = () => {
    // In a real app, this would call an API to generate a QR code
    setStep("verify");
  };

  const handleVerifyCode = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid code",
        description: "Please enter a valid 6-digit code",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would verify the MFA code with the server
    if (otp === "123456") { // Mock verification
      setStep("success");
      toast({
        title: "MFA Enabled",
        description: "Two-factor authentication has been successfully enabled for your account.",
      });
    } else {
      toast({
        title: "Invalid code",
        description: "The code you entered is incorrect. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2">
        <Shield className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
      </div>

      {step === "intro" && (
        <>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Enhance your account security</AlertTitle>
            <AlertDescription>
              Two-factor authentication adds an extra layer of security to your account by requiring both your password and a code from your phone.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Use an authenticator app</h4>
                <p className="text-sm text-muted-foreground">
                  We recommend using Google Authenticator, Authy, or Microsoft Authenticator.
                </p>
              </div>
            </div>

            <Button onClick={handleEnableMFA} className="w-full">
              Enable Two-Factor Authentication
            </Button>
          </div>
        </>
      )}

      {step === "verify" && (
        <div className="space-y-6">
          <div className="border rounded-lg p-4 flex flex-col items-center bg-muted/30">
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
              {/* This would be a QR code image in a real implementation */}
              <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-500">QR Code</span>
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Scan this QR code with your authenticator app or enter the code manually:
            </p>
            <code className="mt-2 p-2 bg-muted rounded text-sm">ABCDEF123456</code>
          </div>

          <div className="space-y-2">
            <Label htmlFor="otp">Enter the 6-digit code from your authenticator app</Label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">
              Enter the code shown in your authenticator app (use 123456 for this demo).
            </p>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setStep("intro")} className="w-1/2">
              Cancel
            </Button>
            <Button onClick={handleVerifyCode} className="w-1/2">
              Verify
            </Button>
          </div>
        </div>
      )}

      {step === "success" && (
        <div className="space-y-4">
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 flex items-start space-x-3">
            <div className="rounded-full bg-green-100 p-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-green-800">Successfully Enabled</h4>
              <p className="text-sm text-green-700">
                Two-factor authentication is now active on your account.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Recovery Codes</Label>
            <div className="p-3 bg-muted rounded-md text-sm font-mono space-y-1">
              <div>ABCD-EFGH-IJKL-MNOP</div>
              <div>QRST-UVWX-YZ12-3456</div>
              <div>7890-ABCD-EFGH-IJKL</div>
              <div>MNOP-QRST-UVWX-YZ12</div>
            </div>
            <p className="text-xs text-muted-foreground">
              Save these recovery codes in a secure place. They can be used to regain access
              to your account if you lose your authenticator device.
            </p>
          </div>

          <Button variant="outline" onClick={() => setStep("intro")} className="w-full">
            Done
          </Button>
        </div>
      )}
    </div>
  );
};

export default MFASetup;
