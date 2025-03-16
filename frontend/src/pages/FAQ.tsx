import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Globe, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQ = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  // Toggle function for FAQ items
  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ data
  const faqItems = [
    {
      id: "item-1",
      question: "What is this app?",
      answer: "EchoWall lets you connect multiple social media accounts and view all your posts in a single, unified feed."
    },
    {
      id: "item-2",
      question: "Which social media platforms are supported?",
      answer: "Currently, YouTube and Reddit. More platforms will be added in the future."
    },
    {
      id: "item-3",
      question: "Can I filter posts by platform?",
      answer: "Yes! You can customize your feed to show posts from specific social media accounts."
    },
    {
      id: "item-4",
      question: "Is my data secure?",
      answer: "We do not store or share your login credentials. All authentication is handled securely through official APIs."
    },
    {
      id: "item-5",
      question: "How do I connect my social accounts?",
      answer: "Go to the settings page and follow the instructions to link your accounts."
    },
    {
      id: "item-6",
      question: "Is this app free to use?",
      answer: "Yes, the app is free for now. Future versions may have additional features."
    },
    {
        id: "item-7",
        question: "Who developed this app?",
        answer: <>Learn more about our team <Link to="/about" className="text-primary hover:underline">here</Link>!</>
    },
    {
      id: "item-8",
      question: "Where can I report bugs or suggest features?",
      answer: "You can reach out via Discord @letsbecool or @frank06n."
    },
    {
      id: "item-9",
      question: "Will more features be added in the future?",
      answer: "Possibly! We might expand with more integrations and features depending on user feedback."
    }
  ];

  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur w-full">
        <div className="container w-full max-w-none flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EchoWall</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/features">
              <Button variant="link">Features</Button>
            </Link>
            <Button variant="link">Pricing</Button>
            <Link to="/faq">
              <Button variant="link">FAQ</Button>
            </Link>
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Sign Up</Button>
          </nav>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </div>
      </header>

      {/* FAQ Hero Section */}
      <section className="py-12 md:py-16 bg-background w-full">
        <div className="container w-full max-w-none px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about EchoWall
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 w-full">
        <div className="container w-full max-w-3xl px-4 md:px-6 mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full justify-between items-center py-2 text-left text-lg font-medium"
                    >
                      {item.question}
                      {expandedItems[item.id] ? 
                        <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      }
                    </button>
                    {expandedItems[item.id] && (
                      <div className="mt-2 text-muted-foreground">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="rounded-lg bg-primary/10 border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">Still Have Questions?</h2>
            <p className="md:text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">
              Didn't find the answer you were looking for? Contact us directly and we'll help you out.
            </p>
            <Link to="/about">
              <Button size="lg" className="h-12">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background w-full">
        <div className="container w-full max-w-none px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">EchoWall</span>
            </div>
            <div className="flex gap-4 mb-4 md:mb-0">
              <Button variant="link" size="sm" className="text-muted-foreground">About</Button>
              <Button variant="link" size="sm" className="text-muted-foreground">Help</Button>
              <Button variant="link" size="sm" className="text-muted-foreground">Privacy</Button>
              <Button variant="link" size="sm" className="text-muted-foreground">Terms</Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © 2025 EchoWall. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;