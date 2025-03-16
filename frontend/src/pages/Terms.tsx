import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { FileText, ShieldAlert } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const Terms = () => {
  return (
    <MainLayout>
        <div className="min-h-svh w-full bg-background text-foreground flex items-center justify-center">
        {/* Terms & Privacy Content */}
        <div className="container max-w-4xl py-12 px-4">
            <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Terms & Privacy</h1>
            <p className="text-muted-foreground">Please read our terms of service and privacy policy</p>
            </div>

            <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="terms" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Terms of Service</span>
                </TabsTrigger>
                <TabsTrigger value="privacy" className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                <span>Privacy Policy</span>
                </TabsTrigger>
            </TabsList>

            {/* Terms of Service Tab */}
            <TabsContent value="terms" className="mt-6">
                <Card>
                <CardHeader>
                    <CardTitle>Terms of Service</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                    <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-medium">1. Acceptance of Terms</h3>
                        <p>
                        By accessing or using EchoWall ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">2. Description of Service</h3>
                        <p>
                        EchoWall is a social media aggregator platform that allows users to connect and display content from various third-party social media services in one unified feed.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">3. Third-Party Services</h3>
                        <p>
                        EchoWall interfaces with third-party social media platforms. By using EchoWall:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>You authorize us to access your accounts on these platforms on your behalf.</li>
                        <li>You acknowledge that we are not responsible for the availability, content, or practices of these third-party services.</li>
                        <li>You agree to comply with the terms of service of each third-party platform you connect to EchoWall.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">4. User Accounts</h3>
                        <p>
                        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">5. Intellectual Property</h3>
                        <p>
                        All trademarks, service marks, logos, and trade names displayed on EchoWall are the property of their respective owners. The Service and its original content are the property of EchoWall team and are protected by copyright and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">6. Service Availability</h3>
                        <p>
                        As a hackathon project, EchoWall is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee continuous, uninterrupted access to the Service, and operation may be affected by factors beyond our control.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">7. Limitation of Liability</h3>
                        <p>
                        To the fullest extent permitted by law, EchoWall and its team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">8. Modifications to Terms</h3>
                        <p>
                        We reserve the right to modify these Terms at any time. We will notify users of any significant changes by posting a notice on our website or sending an email. Your continued use of EchoWall after changes to the Terms constitutes your acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">9. Governing Law</h3>
                        <p>
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EchoWall is based, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <div className="p-4 bg-muted/50 rounded-lg mt-6">
                        <p className="text-sm text-muted-foreground italic">
                        Last updated: March 15, 2025
                        </p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            {/* Privacy Policy Tab */}
            <TabsContent value="privacy" className="mt-6">
                <Card>
                <CardHeader>
                    <CardTitle>Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                    <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-medium">1. Information We Collect</h3>
                        <p>
                        EchoWall collects the following types of information:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Account Information:</strong> When you register, we collect your email address, name, and login credentials.</li>
                        <li><strong>Social Media Access:</strong> With your permission, we access your connected social media accounts to display your content in your EchoWall feed.</li>
                        <li><strong>Usage Data:</strong> We collect information about how you interact with our Service, including actions you take and features you use.</li>
                        <li><strong>Device Information:</strong> We collect information about the device you use to access EchoWall, including browser type, IP address, and operating system.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">2. How We Use Your Information</h3>
                        <p>
                        We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>To provide and maintain our Service</li>
                        <li>To authenticate your identity and manage your account</li>
                        <li>To display your social media content within EchoWall</li>
                        <li>To improve and optimize our Service</li>
                        <li>To respond to your requests or inquiries</li>
                        <li>To detect and prevent fraud or abuse</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">3. Data Sharing and Disclosure</h3>
                        <p>
                        We do not sell your personal information to third parties. We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Third-Party Service Providers:</strong> We use certain service providers to help us operate EchoWall, who may have access to your information solely to perform tasks on our behalf.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights or the safety of users.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">4. Data Security</h3>
                        <p>
                        We implement appropriate security measures to protect your personal information. However, no internet transmission is completely secure, and we cannot guarantee the security of information transmitted to or from EchoWall.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">5. Social Media Permissions</h3>
                        <p>
                        When you connect your social media accounts to EchoWall, we request permission to access specific data from those platforms. You can review and modify these permissions at any time through your account settings.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">6. Your Rights and Choices</h3>
                        <p>
                        You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Access and update your personal information through your account settings</li>
                        <li>Disconnect any linked social media accounts at any time</li>
                        <li>Request deletion of your account and associated data</li>
                        <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">7. Analytics and Cookies</h3>
                        <p>
                        We use analytics tools and cookies to understand how users interact with our Service. You can manage cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">8. Children's Privacy</h3>
                        <p>
                        EchoWall is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">9. Changes to this Privacy Policy</h3>
                        <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-medium">10. Contact Us</h3>
                        <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@echowall.com.
                        </p>
                    </section>

                    <div className="p-4 bg-muted/50 rounded-lg mt-6">
                        <p className="text-sm text-muted-foreground italic">
                        Last updated: March 15, 2025
                        </p>
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

export default Terms;