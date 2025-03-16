import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
} from "lucide-react";

const Header = () => {
  return (
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur w-full">
            <div className="container w-full max-w-none flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2 transition-colors hover:text-blue-400">
                    <Globe className="h-5 w-5" />
                    <span className="text-xl font-bold text-blue-400">EchoWall</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-4">
                    <Link to="/features">
                        <Button variant="link">Features</Button>
                    </Link>
                        {/* <Button variant="link">Pricing</Button> */}
                    <Link to="/about">
                        <Button variant="link">About Us</Button>
                    </Link>
                    <Link to="/faq">
                        <Button variant="link">FAQ</Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="outline" size="sm">Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button size="sm">Sign Up</Button>
                    </Link>
                </nav>
                <Button variant="outline" className="md:hidden">Menu</Button>
            </div>
        </header>
    );
};

export default Header;
