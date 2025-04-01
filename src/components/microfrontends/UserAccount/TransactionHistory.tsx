
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/date-utils";

// Mock transaction data
const mockTransactions = [
  {
    id: "INV-001",
    date: new Date(2023, 10, 15),
    amount: 129.99,
    status: "completed",
    paymentMethod: "Visa •••• 4242",
    description: "Premium Plan Subscription",
  },
  {
    id: "INV-002",
    date: new Date(2023, 9, 15),
    amount: 129.99,
    status: "completed",
    paymentMethod: "Visa •••• 4242",
    description: "Premium Plan Subscription",
  },
  {
    id: "INV-003",
    date: new Date(2023, 8, 15),
    amount: 79.99,
    status: "completed",
    paymentMethod: "Mastercard •••• 5555",
    description: "Standard Plan Subscription",
  },
  {
    id: "INV-004",
    date: new Date(2023, 7, 15),
    amount: 79.99,
    status: "refunded",
    paymentMethod: "Mastercard •••• 5555",
    description: "Standard Plan Subscription",
  },
  {
    id: "INV-005",
    date: new Date(2023, 6, 15),
    amount: 49.99,
    status: "failed",
    paymentMethod: "PayPal",
    description: "Basic Plan Subscription",
  },
];

const TransactionHistory = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [transactions, setTransactions] = useState(mockTransactions);

  const toggleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (newDirection === "asc") {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
    
    setTransactions(sortedTransactions);
  };

  const handleDownload = (id: string) => {
    // Simulate download of invoice
    console.log(`Downloading invoice ${id}`);
    // In a real app, this would trigger a download of a PDF or similar
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Transaction History</h3>
        <Button variant="outline" size="sm" onClick={toggleSort}>
          Sort by Date 
          {sortDirection === "asc" ? (
            <ChevronUp className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-1 h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "default"
                        : transaction.status === "refunded"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDownload(transaction.id)}
                    className="hover-scale"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Invoice
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionHistory;
