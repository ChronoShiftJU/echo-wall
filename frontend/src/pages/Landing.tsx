import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Twitter, Facebook, Instagram, Youtube, ArrowRight, CheckCircle, Globe, Monitor, Zap } from "lucide-react";

import { Link } from "react-router-dom";

const Landing = () => {
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
            <Link to="/features"></Link>
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

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-background w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                All Your Social Media Feeds in One Place
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Aggregate content from Twitter, Facebook, Instagram, YouTube, and more into a single, customizable feed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12">
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms Preview */}
      <section className="py-12 bg-muted/50 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="grid place-items-center py-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <Twitter size={24} className="text-primary" />
                <span className="font-semibold">Twitter</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook size={24} className="text-primary" />
                <span className="font-semibold">Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={24} className="text-primary" />
                <span className="font-semibold">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <Youtube size={24} className="text-primary" />
                <span className="font-semibold">YouTube</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={24} className="text-primary" />
                <span className="font-semibold">Reddit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">Why Choose EchoWall?</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Designed to simplify your social media management and engage your audience with dynamically updated content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Unified Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect all your social media platforms and view them in a single, customizable feed.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Real-Time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p>See new posts as they happen with live updates and automatic content refresh.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Monitor className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Customizable Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Choose between grid, list, or timeline views. Customize the appearance to match your brand.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/50 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-full p-4 mb-4">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">Create an account or log in with your existing social accounts.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-full p-4 mb-4">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Platforms</h3>
              <p className="text-muted-foreground">Choose which social media platforms to integrate with your feed.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-full p-4 mb-4">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize & Share</h3>
              <p className="text-muted-foreground">Personalize your feed layout and share it with your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="rounded-lg bg-primary/10 border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="md:text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of users who've already simplified their social media monitoring with EchoWall.
            </p>
            <Button size="lg" className="h-12">
              Create Your Feed
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
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

export default Landing;