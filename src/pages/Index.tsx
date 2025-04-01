
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Zap, CreditCard, ChevronRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "CFO at TechVentures",
      text: "PayPortal revolutionized how we handle payments. The micro frontend architecture makes integration seamless.",
      avatar: "ET"
    },
    {
      name: "Michael Chen",
      role: "Engineering Lead at Skyline",
      text: "After switching to PayPortal, our checkout conversion increased by 32%. The UX is simply unmatched.",
      avatar: "MC"
    },
    {
      name: "Sarah Johnson",
      role: "Director of Operations",
      text: "The customizable modules allowed us to tailor the payment experience exactly to our brand's needs.",
      avatar: "SJ"
    }
  ];

  const faqs = [
    {
      question: "How does the micro frontend architecture benefit my business?",
      answer: "Micro frontends allow independent teams to develop, test and deploy isolated parts of your application. This results in faster development cycles, improved scalability, and greater resilience."
    },
    {
      question: "Is PayPortal compatible with my existing systems?",
      answer: "Yes! PayPortal is designed to integrate seamlessly with most modern tech stacks. Our API-first approach means you can connect to your existing systems with minimal friction."
    },
    {
      question: "How secure is the payment processing?",
      answer: "Security is our top priority. PayPortal uses industry-leading encryption, is PCI-DSS compliant, and implements multiple layers of fraud detection to keep transactions secure."
    },
    {
      question: "Can I customize the user interface to match my brand?",
      answer: "Absolutely. PayPortal offers extensive customization options allowing you to align the payment experience with your brand identity while maintaining the optimized conversion flow."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portal-primary/10 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              <span className="text-gradient">Redefining</span> Payment Experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A revolutionary micro frontend architecture for enterprise-grade payment processing that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/products">
                <Button className="btn-gradient px-8 py-6 text-lg rounded-full shadow-lg">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-portal-muted/50">
                  View Demo Account
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-portal-border">
                <p className="text-4xl font-bold text-portal-primary">99.99%</p>
                <p className="text-gray-600 mt-2">Uptime guarantee</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-portal-border">
                <p className="text-4xl font-bold text-portal-primary">30M+</p>
                <p className="text-gray-600 mt-2">Transactions monthly</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-portal-border">
                <p className="text-4xl font-bold text-portal-primary">15ms</p>
                <p className="text-gray-600 mt-2">Average response time</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-portal-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-12 -left-12 w-72 h-72 bg-portal-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Payment Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful modules designed for flexibility, scalability, and exceptional user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover hover-scale border-portal-border overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-portal-primary to-purple-500"></div>
              <CardContent className="pt-6">
                <div className="mb-4 bg-portal-accent/10 p-3 rounded-lg inline-block">
                  <Zap className="h-6 w-6 text-portal-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lightning Fast Checkout</h3>
                <p className="text-gray-600">
                  Optimize conversion with our streamlined checkout flow, reducing friction and cart abandonment.
                </p>
                <Link to="/checkout" className="story-link text-portal-primary font-medium mt-4 inline-flex items-center">
                  Try it now <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover hover-scale border-portal-border overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardContent className="pt-6">
                <div className="mb-4 bg-portal-primary/10 p-3 rounded-lg inline-block">
                  <ShieldCheck className="h-6 w-6 text-portal-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade encryption and fraud detection that keeps your customers' data safe.
                </p>
                <Link to="/products" className="story-link text-portal-primary font-medium mt-4 inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover hover-scale border-portal-border overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <CardContent className="pt-6">
                <div className="mb-4 bg-blue-100 p-3 rounded-lg inline-block">
                  <BarChart3 className="h-6 w-6 text-portal-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Gain valuable insights with real-time reporting and customizable dashboards.
                </p>
                <Link to="/account" className="story-link text-portal-primary font-medium mt-4 inline-flex items-center">
                  View demo <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-20 bg-gradient-to-br from-portal-primary/5 to-portal-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Micro Frontend Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Independent modules that work together seamlessly, providing unmatched flexibility and scalability.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-portal-border p-6 md:p-8">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-portal-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-portal-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md border border-portal-border hover-scale">
                <div className="w-16 h-16 bg-portal-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-portal-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Product Catalog</h3>
                <p className="text-gray-600">Dynamic product listings with advanced filtering capabilities</p>
                <Link to="/products">
                  <Button variant="outline" size="sm" className="mt-4">
                    Explore
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-portal-border hover-scale">
                <div className="w-16 h-16 bg-portal-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portal-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
                <p className="text-gray-600">Secure checkout with customizable payment options</p>
                <Link to="/checkout">
                  <Button variant="outline" size="sm" className="mt-4">
                    Try Demo
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-portal-border hover-scale">
                <div className="w-16 h-16 bg-portal-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portal-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">User Account</h3>
                <p className="text-gray-600">Personalized user experiences and order management</p>
                <Link to="/account">
                  <Button variant="outline" size="sm" className="mt-4">
                    View Account
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 p-6 bg-portal-primary/5 rounded-xl border border-portal-border">
              <h4 className="text-lg font-semibold mb-3">Key Technical Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Independent Deployment</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Team Autonomy</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Technology Flexibility</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Improved Fault Isolation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our enterprise customers have to say about their experience with PayPortal.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="p-1">
                    <Card className="border border-portal-border">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-portal-primary text-white flex items-center justify-center font-semibold mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static left-auto translate-y-0" />
              <CarouselNext className="relative static right-auto translate-y-0" />
            </div>
          </Carousel>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Trusted by forward-thinking companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-32 bg-gray-300 rounded"></div>
              <div className="h-8 w-28 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-portal-primary/5 to-portal-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our payment infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={expandedFaq === index}
                onOpenChange={() => toggleFaq(index)}
                className="border border-portal-border rounded-lg overflow-hidden bg-white"
              >
                <CollapsibleTrigger className="w-full p-4 flex justify-between items-center text-left focus:outline-none">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <ChevronRight className={`h-5 w-5 text-portal-primary transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 border-t border-portal-border">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-portal-primary to-purple-600 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your payment experience?</h2>
                <p className="text-white/80 text-lg max-w-2xl">
                  Join thousands of businesses using PayPortal's micro frontend architecture for scalable, secure payments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button className="bg-white text-portal-primary hover:bg-white/90 px-8 py-6 text-lg rounded-lg shadow-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/account">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
