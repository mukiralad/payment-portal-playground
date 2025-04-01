
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  CreditCard,
  Home,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Navigation items for both desktop and mobile
  const navItems = [
    { path: "/", label: "Home", icon: <Home className="mr-2 h-4 w-4" /> },
    { path: "/products", label: "Products", icon: <Package className="mr-2 h-4 w-4" /> },
    { path: "/checkout", label: "Checkout", icon: <CreditCard className="mr-2 h-4 w-4" /> },
    { path: "/account", label: "Account", icon: <User className="mr-2 h-4 w-4" /> },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <CreditCard className="h-8 w-8 text-portal-primary" />
            <span className="ml-2 text-xl font-bold text-portal-primary">PayPortal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                  location.pathname === item.path
                    ? "bg-portal-primary text-white"
                    : "text-gray-700 hover:bg-portal-muted"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Cart and Account buttons - visible on desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/checkout">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                    location.pathname === item.path
                      ? "bg-portal-primary text-white"
                      : "text-gray-700 hover:bg-portal-muted"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
