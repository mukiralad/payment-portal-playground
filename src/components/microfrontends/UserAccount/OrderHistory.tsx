
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, RefreshCw, Eye } from "lucide-react";

// Mock order history data
const mockOrders = [
  {
    id: "ORD-6789",
    date: "Mar 15, 2023",
    status: "Delivered",
    total: 329.98,
    items: [
      { name: "Wireless Headphones", price: 199.99, quantity: 1 },
      { name: "Bluetooth Speaker", price: 129.99, quantity: 1 },
    ],
  },
  {
    id: "ORD-5432",
    date: "Feb 28, 2023",
    status: "Delivered",
    total: 149.97,
    items: [
      { name: "Fitness Tracker", price: 99.99, quantity: 1 },
      { name: "Leather Wallet", price: 49.99, quantity: 1 },
    ],
  },
  {
    id: "ORD-4321",
    date: "Jan 10, 2023",
    status: "Delivered",
    total: 249.99,
    items: [
      { name: "Smart Watch", price: 249.99, quantity: 1 },
    ],
  },
];

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };
  
  // Handle refresh button
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  // Get status badge variant
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <Badge variant="default" className="bg-green-500">Delivered</Badge>;
      case "shipped":
        return <Badge variant="secondary" className="bg-blue-500 text-white">Shipped</Badge>;
      case "processing":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Processing</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5" />
          Order History
        </CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {mockOrders.length > 0 ? (
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(order.total)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedOrder(
                          selectedOrder === order.id ? null : order.id
                        )}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Order details section */}
            {selectedOrder && (
              <div className="mt-6 pt-6 border-t">
                <h4 className="text-lg font-medium mb-4">
                  Order Details - {selectedOrder}
                </h4>
                {mockOrders
                  .filter((order) => order.id === selectedOrder)
                  .map((order) => (
                    <div key={`details-${order.id}`} className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-500">Order Date</p>
                          <p>{order.date}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-500">Status</p>
                          <p>{order.status}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-500">Total</p>
                          <p>{formatCurrency(order.total)}</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h5 className="font-medium mb-2">Items</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Item</TableHead>
                              <TableHead className="text-right">Qty</TableHead>
                              <TableHead className="text-right">Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {order.items.map((item, index) => (
                              <TableRow key={`item-${index}`}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">{item.quantity}</TableCell>
                                <TableCell className="text-right">
                                  {formatCurrency(item.price)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500">No order history available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderHistory;
