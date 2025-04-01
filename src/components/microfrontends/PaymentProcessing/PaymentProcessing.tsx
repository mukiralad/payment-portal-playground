
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";

const PaymentProcessing = () => {
  return (
    <div className="micro-frontend-container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Checkout</h2>
        <p className="text-gray-600">Complete your purchase securely</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PaymentForm />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
