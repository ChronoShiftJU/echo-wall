// import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  User,
  Settings,
  Edit,
  LogOut,
  Trash2,
  Save,
  AlertCircle,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";


const ProfileSettings = () => {
//   const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <MainLayout>
    <div className="min-h-svh w-full bg-background text-foreground flex items-center justify-center">
      {/* Using your Header component
      <Header /> */}

      {/* Profile & Settings Content */}
      <div className="container max-w-4xl py-12 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Account</h1>
          <p className="text-muted-foreground">Manage your profile and settings</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile details and public information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src="/api/placeholder/150/150"
                      alt="Profile"
                      className="rounded-full h-32 w-32 object-cover"
                    />
                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 w-full md:w-auto">
                    <div className="space-y-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="displayName" className="text-sm font-medium">Display Name</label>
                          <Input id="displayName" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                        <Input
                          id="bio"
                          placeholder="Tell us about yourself"
                          defaultValue="Social media enthusiast and digital content creator passionate about connecting online communities."
                          className="min-h-20 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connected Social Accounts</CardTitle>
                <CardDescription>Manage your connected social media platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-muted-foreground">John Doe</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-muted-foreground">@johndoe_official</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                <div className="mt-4">
                  <Button variant="secondary" className="w-full">Connect New Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates and alerts via email</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emailNotifications" defaultChecked />
                      <label htmlFor="emailNotifications" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="darkMode" />
                      <label htmlFor="darkMode" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Auto-refresh feeds</p>
                      <p className="text-sm text-muted-foreground">Automatically update your feeds with new content</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="autoRefresh" defaultChecked />
                      <label htmlFor="autoRefresh" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and visibility options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Public Profile</p>
                      <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="publicProfile" defaultChecked />
                      <label htmlFor="publicProfile" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Show Connected Accounts</p>
                      <p className="text-sm text-muted-foreground">Display your connected social media accounts</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="showAccounts" defaultChecked />
                      <label htmlFor="showAccounts" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-base font-medium">Activity Tracking</p>
                      <p className="text-sm text-muted-foreground">Allow us to collect usage data to improve the service</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="activityTracking" defaultChecked />
                      <label htmlFor="activityTracking" className="text-sm font-medium">
                        Enabled
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-500 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Danger Zone
                </CardTitle>
                <CardDescription>Actions that cannot be undone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-100 rounded-lg mb-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-700">Warning</p>
                      <p className="text-sm text-red-600">
                        These actions are permanent and cannot be reversed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="font-medium">Log Out From All Devices</p>
                      <p className="text-sm text-muted-foreground">End all active sessions on other devices</p>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Log Out Everywhere
                    </Button>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                    </div>
                    <Button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white">
                      <Trash2 className="h-4 w-4" />
                      Delete Account
                      </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </MainLayout>
  );
};

export default ProfileSettings;