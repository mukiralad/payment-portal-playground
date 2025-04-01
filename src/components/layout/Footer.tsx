
import { CreditCard, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CreditCard className="h-6 w-6 text-portal-primary" />
            <span className="ml-2 text-lg font-bold text-portal-primary">PayPortal</span>
            <span className="ml-2 text-sm text-gray-500">© 2023 - All rights reserved</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-portal-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-portal-primary">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center md:text-left">
          <p className="text-sm text-gray-500">
            This is a demo micro frontend application for educational purposes only.
            No real payments are processed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
