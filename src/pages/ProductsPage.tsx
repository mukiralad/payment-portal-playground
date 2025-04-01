
import Layout from "@/components/layout/Layout";
import ProductCatalog from "@/components/microfrontends/ProductCatalog/ProductCatalog";

const ProductsPage = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <ProductCatalog />
      </div>
    </Layout>
  );
};

export default ProductsPage;
