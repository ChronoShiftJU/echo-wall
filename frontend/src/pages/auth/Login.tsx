import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                // Save token and navigate to feed page
                localStorage.setItem("token", data.token);
                // console.log("token", data.token);
                navigate("/feed");
            } else {
                alert(data.message || "Login failed.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-svh w-full bg-background flex flex-col items-center justify-center px-4">
            <div className="mb-6 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EchoWall</span>
            </div>

            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Sign in to your account to continue
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Tabs defaultValue="email" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="email">Email</TabsTrigger>
                            <TabsTrigger value="social">Social Login</TabsTrigger>
                        </TabsList>
                        <TabsContent value="email">
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-muted-foreground"
                                    >
                                        Remember me for 30 days
                                    </label>
                                </div>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Signing in..." : "Sign in"}
                                </Button>
                            </form>
                        </TabsContent>
                        <TabsContent value="social" className="space-y-4">
                            <Button variant="outline" className="w-full">
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Sign in with Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mr-2 h-4 w-4">
                                    <path fill="#1877F2" d="M15 8a7 7 0 0 0-7-7a7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724c.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.141.54-1.141 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0 0 15 8z" />
                                </svg>
                                Sign in with Facebook
                            </Button>
                            <Button variant="outline" className="w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mr-2 h-4 w-4">
                                    <path fill="#000000" d="M6.29 13.381c0-2.307 1.781-3.4 1.838-3.4a3.346 3.346 0 0 1 2.841 1.419l.693-1.117a3.651 3.651 0 0 0-1.007-.818c-.479-.273-.989-.417-1.509-.428c-.7-.037-1.397.131-2.017.484a3.623 3.623 0 0 0-1.517 1.394a3.661 3.661 0 0 0-.542 1.951c.01.678.196 1.343.543 1.924c.346.582.847 1.058 1.456 1.379c.61.32 1.295.482 1.987.471c.587 0 1.163-.16 1.667-.461c.505-.302.91-.733 1.173-1.244l-.735-.967a2.788 2.788 0 0 1-.902.967a2.69 2.69 0 0 1-1.276.367c-.596.033-1.177-.202-1.609-.65a2.35 2.35 0 0 1-.594-1.718l4.923.002v-.591c.022-.728-.142-1.449-.476-2.094a3.613 3.613 0 0 0-1.382-1.445a3.798 3.798 0 0 0-1.981-.518c-.764 0-1.307.235-1.307.235c-.464.219-.869.539-1.19.937c-.322.398-.552.865-.671 1.364c-.119.5-.124 1.017-.015 1.518c.11.502.334.973.652 1.377c.318.403.719.731 1.179.959c.461.227.971.349 1.488.356c.691 0 1.332-.207 1.332-.207V11.26s-.496.207-1.093.207a1.835 1.835 0 0 1-1.364-.539a1.891 1.891 0 0 1-.518-1.364h3.991c.033-.185.033-.365.033-.55c0-.068-.058-1.976-1.55-3.335a3.265 3.265 0 0 0-2.194-.87c-.885.012-1.726.387-2.33 1.04c-.603.654-.93 1.526-.905 2.425c-.025.898.301 1.77.905 2.423c.603.654 1.445 1.03 2.33 1.042c.593.003 1.173-.172 1.668-.502v2.057a3.551 3.551 0 0 1-1.62.375a3.568 3.568 0 0 1-1.987-.633a3.64 3.64 0 0 1-1.396-1.683c-.32-.7-.428-1.47-.313-2.229c.115-.758.444-1.465.944-2.029c.5-.563 1.156-.968 1.879-1.16a3.647 3.647 0 0 1 2.184.136c.694.285 1.282.793 1.687 1.455l.672-1.019a4.067 4.067 0 0 0-1.49-1.443a4.098 4.098 0 0 0-2.044-.546a4.899 4.899 0 0 0-2.232.539a4.899 4.899 0 0 0-1.78 1.548a4.899 4.899 0 0 0-.927 2.212A4.899 4.899 0 0 0 .3 10.505a4.899 4.899 0 0 0 1.315 1.949a4.899 4.899 0 0 0 2.128 1.062a4.899 4.899 0 0 0 2.361.088L6.29 13.381z" />
                                </svg>
                                Sign in with Apple
                            </Button>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <div className="text-center text-sm text-muted-foreground mt-2">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;