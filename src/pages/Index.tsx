
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="micro-frontend-container">
        <div className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to the Payment Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A micro frontend example showcasing a modular and scalable payment processing application.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-portal-primary px-6 py-3 text-white hover:bg-opacity-90 transition-colors"
            >
              Browse Products
            </a>
            <a
              href="/account"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              My Account
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-portal-muted p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-portal-primary rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Checkout</h3>
            <p className="text-gray-600">Complete your purchase in seconds with our streamlined checkout process.</p>
          </div>
          
          <div className="bg-portal-muted p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-portal-primary rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Your payment information is protected with industry-standard encryption.</p>
          </div>
          
          <div className="bg-portal-muted p-6 rounded-lg text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-portal-primary rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">Not satisfied? Our hassle-free return policy has got you covered.</p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-portal-primary to-portal-primary/70 rounded-xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Micro Frontend Architecture</h2>
            <p className="mb-6">This demo showcases a payment portal built using a micro frontend architecture. Each section of the application is developed independently but works together seamlessly.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Product Catalog</h3>
                <p className="text-sm">Browse and search through available products</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Payment Processing</h3>
                <p className="text-sm">Secure checkout with form validation</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">User Account</h3>
                <p className="text-sm">Manage profile and view order history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
