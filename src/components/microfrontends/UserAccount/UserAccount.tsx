
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileForm from "./ProfileForm";
import OrderHistory from "./OrderHistory";
import TransactionHistory from "./TransactionHistory";
import MFASetup from "./MFASetup";
import { User, ShoppingBag, CreditCard, LogOut, Shield, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const UserAccount = () => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      duration: 3000,
    });
  };
  
  return (
    <div className="micro-frontend-container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">My Account</h2>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
        <Button 
          variant="outline"
          className="mt-4 md:mt-0"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto lg:inline-flex">
          <TabsTrigger value="profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <ProfileForm />
        </TabsContent>
        
        <TabsContent value="orders">
          <OrderHistory />
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-8">
          <TransactionHistory />
        </TabsContent>
        
        <TabsContent value="security" className="space-y-8">
          <MFASetup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserAccount;
