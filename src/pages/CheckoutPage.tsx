
import Layout from "@/components/layout/Layout";
import PaymentProcessing from "@/components/microfrontends/PaymentProcessing/PaymentProcessing";

const CheckoutPage = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <PaymentProcessing />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
