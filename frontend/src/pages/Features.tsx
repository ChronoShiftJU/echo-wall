import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Youtube, Layers, Filter, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import HeaderLanding from "@/components/HeaderLanding";

const Features = () => {
  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* Navigation */}
      <HeaderLanding />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary/5 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to simplify your social media experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 md:py-24 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Unified Social Feed</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Connect multiple social media accounts</p>
                      <p className="text-muted-foreground">Seamlessly integrate all your accounts from major platforms in one place.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">View all posts in a single timeline</p>
                      <p className="text-muted-foreground">See updates from all platforms chronologically arranged for easy browsing.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">No need to switch between apps</p>
                      <p className="text-muted-foreground">Save time and stay focused by managing everything in one application.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6 md:p-8 order-1 md:order-2">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
                    <div className="bg-background rounded-lg p-3 shadow-sm">
                      <Twitter className="h-5 w-5 text-primary mb-2" />
                      <div className="h-2 bg-muted-foreground/20 rounded-full mb-2"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded-full w-3/4"></div>
                    </div>
                    <div className="bg-background rounded-lg p-3 shadow-sm">
                      <Facebook className="h-5 w-5 text-primary mb-2" />
                      <div className="h-2 bg-muted-foreground/20 rounded-full mb-2"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded-full w-3/4"></div>
                    </div>
                    <div className="bg-background rounded-lg p-3 shadow-sm">
                      <Instagram className="h-5 w-5 text-primary mb-2" />
                      <div className="h-2 bg-muted-foreground/20 rounded-full mb-2"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded-full w-3/4"></div>
                    </div>
                    <div className="bg-background rounded-lg p-3 shadow-sm">
                      <Youtube className="h-5 w-5 text-primary mb-2" />
                      <div className="h-2 bg-muted-foreground/20 rounded-full mb-2"></div>
                      <div className="h-2 bg-muted-foreground/20 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-muted rounded-lg p-6 md:p-8">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="p-4 w-full max-w-md">
                    <div className="flex items-center gap-2 mb-4">
                      <Button size="sm" variant="default" className="rounded-full">All</Button>
                      <Button size="sm" variant="outline" className="rounded-full">Twitter</Button>
                      <Button size="sm" variant="outline" className="rounded-full">Facebook</Button>
                      <Button size="sm" variant="outline" className="rounded-full">Instagram</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-background rounded-lg shadow-sm"></div>
                      <div className="h-12 bg-background rounded-lg shadow-sm"></div>
                      <div className="h-12 bg-background rounded-lg shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Filter by Platform</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Filter className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Toggle between social media sources</p>
                      <p className="text-muted-foreground">Switch between different platforms with a single click to find what you're looking for.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Filter className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Customize your feed</p>
                      <p className="text-muted-foreground">Show only the platforms that matter to you and hide the rest.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Filter className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Reduce clutter and focus</p>
                      <p className="text-muted-foreground">Eliminate distractions and concentrate on the content that matters most to you.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Fast & Minimalist UI</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Simple, distraction-free design</p>
                      <p className="text-muted-foreground">Clean interface that lets you focus on the content without visual clutter.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Optimized for speed</p>
                      <p className="text-muted-foreground">Quick load times and smooth scrolling for a seamless browsing experience.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">No unnecessary bloat</p>
                      <p className="text-muted-foreground">Just what you need without the extras that slow you down.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6 md:p-8 order-1 md:order-2">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-full max-w-md p-4">
                    <div className="h-8 w-2/3 mx-auto bg-background rounded-full shadow-sm mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-14 bg-background rounded-md shadow-sm flex items-center p-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 mr-3"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-muted-foreground/20 rounded-full mb-2 w-1/3"></div>
                          <div className="h-2 bg-muted-foreground/20 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div className="h-14 bg-background rounded-md shadow-sm flex items-center p-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 mr-3"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-muted-foreground/20 rounded-full mb-2 w-1/3"></div>
                          <div className="h-2 bg-muted-foreground/20 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 w-full">
        <div className="container w-full max-w-none px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl mb-4">Ready to simplify your social media?</h2>
            <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of users who are already enjoying a clutter-free social media experience.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features;