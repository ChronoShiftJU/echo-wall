import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Settings,
    Search,
    Menu,
    LogOut,
    BarChart2,
    Home
} from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Home className="h-6 w-6" />
                    <span className="text-xl font-bold">EchoWall</span>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-4">
                    <Link to="/feed">
                        <Button variant="link" className="text-primary font-medium">Feed</Button>
                    </Link>
                    <Link to="/analytics">
                        <Button variant="link" className="text-muted-foreground">
                            <BarChart2 className="mr-1 h-4 w-4" /> Analytics
                        </Button>
                    </Link>
                    <Link to="/settings">
                        <Button variant="link" className="text-muted-foreground">
                            <Settings className="mr-1 h-4 w-4" /> Settings
                        </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                        <LogOut className="mr-1 h-4 w-4" /> Logout
                    </Button>
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex w-1/3 relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search posts..."
                        className="pl-8"
                    />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <Button variant="ghost" size="icon">
                        <Search />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link to="/feed" className="w-full">Feed</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/analytics" className="w-full">Analytics</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/settings" className="w-full">Settings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default Header;