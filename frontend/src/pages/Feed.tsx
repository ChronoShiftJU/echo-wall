import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    AlertCircle,
    Settings,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    MessageSquare,
    ThumbsUp,
    Share2,
    Grid,
    List,
    RefreshCw,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const Feed = () => {
    const [layoutType, setLayoutType] = useState("grid");
    const [showNotification, setShowNotification] = useState(true);

    const posts = [
        {
            id: 1,
            platform: "twitter",
            icon: <Twitter size={16} />,
            username: "@techuser",
            timestamp: "2 hours ago",
            content: "Just launched our new product! Check it out at our website #technology #innovation",
            likes: 24,
            shares: 8
        },
        {
            id: 2,
            platform: "facebook",
            icon: <Facebook size={16} />,
            username: "Jane Smith",
            timestamp: "3 hours ago",
            content: "Had an amazing experience at the tech conference today. Met so many brilliant minds!",
            likes: 45,
            shares: 12
        },
        {
            id: 3,
            platform: "instagram",
            icon: <Instagram size={16} />,
            username: "@photomaestro",
            timestamp: "5 hours ago",
            content: "New photo series dropping next week. Here's a sneak peek! #photography",
            likes: 132,
            shares: 28
        },
        {
            id: 4,
            platform: "youtube",
            icon: <Youtube size={16} />,
            username: "TechTutorials",
            timestamp: "1 day ago",
            content: "Learn how to build a React app with shadcn UI in our latest tutorial",
            likes: 87,
            shares: 34
        }
    ];

    return (
        <MainLayout>
            <div className="container w-full max-w-none px-4 py-6 md:grid md:grid-cols-[1fr_250px] gap-6">
                {/* Main Content Area */}
                <div className="w-full">
                    {/* Notification Banner */}
                    {showNotification && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg mb-6 p-3 flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <AlertCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">New posts are available!</span>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowNotification(false)}
                                >
                                    Dismiss
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Feed Header */}
                    <div className="flex justify-between items-center mb-6 w-full">
                        <h2 className="text-2xl font-bold">Your Feed</h2>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                                <RefreshCw className="h-4 w-4 mr-1" /> Refresh
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        {layoutType === "grid" ? <Grid className="h-4 w-4" /> : <List className="h-4 w-4" />}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setLayoutType("grid")}>
                                        <Grid className="h-4 w-4 mr-2" /> Grid View
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLayoutType("list")}>
                                        <List className="h-4 w-4 mr-2" /> List View
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    {/* Feed Container */}
                    <div className={`w-full ${layoutType === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4"}`}>
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden w-full">
                                <CardHeader className="p-4 pb-2 flex flex-row justify-between">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="flex items-center gap-1 px-2">
                                            {post.icon}
                                        </Badge>
                                        <div>
                                            <CardTitle className="text-sm font-medium">{post.username}</CardTitle>
                                            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                                        <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                    </svg>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>View Original</DropdownMenuItem>
                                                <DropdownMenuItem>Copy Link</DropdownMenuItem>
                                                <DropdownMenuItem>Hide</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </Button>
                                </CardHeader>
                                <CardContent className="p-4 pt-2">
                                    <p className="text-sm">{post.content}</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-2 flex justify-between">
                                    <div className="flex gap-4">
                                        <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1">
                                            <ThumbsUp className="h-4 w-4" />
                                            <span className="text-xs">{post.likes}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1">
                                            <MessageSquare className="h-4 w-4" />
                                            <span className="text-xs">Reply</span>
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1">
                                        <Share2 className="h-4 w-4" />
                                        <span className="text-xs">{post.shares}</span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-6 flex justify-center w-full">
                        <Button variant="outline">Load More</Button>
                    </div>
                </div>

                {/* Sidebar / Filter Panel */}
                <aside className="mt-6 md:mt-0 w-full">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-lg">Filters</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium">Platforms</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="twitter" defaultChecked />
                                        <label htmlFor="twitter" className="text-sm flex items-center gap-1">
                                            <Twitter size={14} /> Twitter
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="facebook" defaultChecked />
                                        <label htmlFor="facebook" className="text-sm flex items-center gap-1">
                                            <Facebook size={14} /> Facebook
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="instagram" defaultChecked />
                                        <label htmlFor="instagram" className="text-sm flex items-center gap-1">
                                            <Instagram size={14} /> Instagram
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="youtube" defaultChecked />
                                        <label htmlFor="youtube" className="text-sm flex items-center gap-1">
                                            <Youtube size={14} /> YouTube
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-medium">Layout</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <Button
                                        variant={layoutType === "grid" ? "default" : "outline"}
                                        size="sm"
                                        className="w-full"
                                        onClick={() => setLayoutType("grid")}
                                    >
                                        <Grid className="h-4 w-4 mr-1" /> Grid
                                    </Button>
                                    <Button
                                        variant={layoutType === "list" ? "default" : "outline"}
                                        size="sm"
                                        className="w-full"
                                        onClick={() => setLayoutType("list")}
                                    >
                                        <List className="h-4 w-4 mr-1" /> List
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Auto Update</h4>
                                <Tabs defaultValue="5min">
                                    <TabsList className="grid grid-cols-3 w-full">
                                        <TabsTrigger value="off">Off</TabsTrigger>
                                        <TabsTrigger value="5min">5 min</TabsTrigger>
                                        <TabsTrigger value="1min">1 min</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="off">
                                        <p className="text-xs text-muted-foreground pt-2">Auto updates are disabled.</p>
                                    </TabsContent>
                                    <TabsContent value="5min">
                                        <p className="text-xs text-muted-foreground pt-2">Feed will refresh every 5 minutes.</p>
                                    </TabsContent>
                                    <TabsContent value="1min">
                                        <p className="text-xs text-muted-foreground pt-2">Feed will refresh every minute.</p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                <Settings className="h-4 w-4 mr-1" /> Advanced Settings
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="mt-4 w-full">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Popular Hashtags</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-40">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">#technology</Badge>
                                    <Badge variant="secondary">#design</Badge>
                                    <Badge variant="secondary">#webdev</Badge>
                                    <Badge variant="secondary">#ux</Badge>
                                    <Badge variant="secondary">#ai</Badge>
                                    <Badge variant="secondary">#productivity</Badge>
                                    <Badge variant="secondary">#innovation</Badge>
                                    <Badge variant="secondary">#startup</Badge>
                                    <Badge variant="secondary">#programming</Badge>
                                    <Badge variant="secondary">#marketing</Badge>
                                    <Badge variant="secondary">#business</Badge>
                                    <Badge variant="secondary">#future</Badge>
                                    <Badge variant="secondary">#creativity</Badge>
                                    <Badge variant="secondary">#growth</Badge>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </MainLayout>
    );
}

export default Feed;