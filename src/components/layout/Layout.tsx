
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="payment-portal-layout">
      <Header />
      <main className="payment-portal-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
