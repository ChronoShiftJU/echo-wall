import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <Button variant="link" size="sm" className="text-muted-foreground">About</Button>
                        <Button variant="link" size="sm" className="text-muted-foreground">Help</Button>
                        <Button variant="link" size="sm" className="text-muted-foreground">Privacy</Button>
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
                <div className="mt-4 text-center text-xs text-muted-foreground">
                    © 2025 EchoWall. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;