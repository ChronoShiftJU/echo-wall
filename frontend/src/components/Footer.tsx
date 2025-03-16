import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Globe } from "lucide-react";

const Footer = () => {
    return (
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
    );
};

export default Footer;