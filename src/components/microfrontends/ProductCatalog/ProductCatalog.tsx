
import { useState, useEffect } from "react";
import ProductCard, { Product } from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { Skeleton } from "@/components/ui/skeleton";

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness goals, receive notifications, and more with this feature-packed smartwatch.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    category: "Electronics"
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    description: "Powerful, portable Bluetooth speaker with waterproof design and 20-hour battery life.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Designer Backpack",
    description: "Stylish, durable backpack with dedicated laptop compartment and plenty of storage pockets.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Fashion"
  },
  {
    id: "5",
    name: "Fitness Tracker",
    description: "Sleek fitness tracker with heart rate monitor, sleep tracking, and GPS functionality.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Fitness"
  },
  {
    id: "6",
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID protection and multiple card slots.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Fashion"
  },
];

const ProductCatalog = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price_asc");
  const [loading, setLoading] = useState(true);
  
  // Extract unique categories from products
  const categories = Array.from(new Set(mockProducts.map(p => p.category)));
  
  // Filter and sort products based on user selections
  useEffect(() => {
    setLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      let result = [...mockProducts];
      
      // Apply category filter
      if (category !== "all") {
        result = result.filter(product => product.category === category);
      }
      
      // Apply search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        result = result.filter(
          product => 
            product.name.toLowerCase().includes(term) || 
            product.description.toLowerCase().includes(term)
        );
      }
      
      // Apply sorting
      result.sort((a, b) => {
        switch (sortOption) {
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          case "name_asc":
            return a.name.localeCompare(b.name);
          case "name_desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
      
      setFilteredProducts(result);
      setLoading(false);
    }, 500);
  }, [category, searchTerm, sortOption]);
  
  return (
    <div className="micro-frontend-container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Product Catalog</h2>
        <p className="text-gray-600">Browse our selection of premium products</p>
      </div>
      
      <ProductFilters
        onSearch={setSearchTerm}
        onCategoryChange={setCategory}
        onSortChange={setSortOption}
        categories={categories}
      />
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="h-48 w-full rounded-t-lg" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg font-medium">No products found matching your criteria.</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
