"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                At ETOILELIEN, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
                celebrity booking platform.
              </p>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Information We Collect</h3>

                <h4 className="text-lg font-medium">Personal Information</h4>
                <p>When you use our platform, we may collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Booking preferences and special requests</li>
                  <li>Communication history with celebrities and our team</li>
                </ul>

                <h4 className="text-lg font-medium">Technical Information</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage patterns and platform interactions</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Process and fulfill your celebrity booking requests</li>
                  <li>Communicate with you about your bookings and account</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our platform and services</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3. Information Sharing</h3>
                <p>We may share your information with:</p>

                <h4 className="text-lg font-medium">Celebrities and Their Teams</h4>
                <p>
                  We share necessary booking information with celebrities and their representatives to fulfill your
                  requests.
                </p>

                <h4 className="text-lg font-medium">Service Providers</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Email service providers (Resend)</li>
                  <li>Cloud storage and hosting services</li>
                  <li>Analytics and marketing platforms</li>
                </ul>

                <h4 className="text-lg font-medium">Legal Requirements</h4>
                <p>We may disclose information when required by law or to protect our rights and safety.</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4. Data Security</h3>
                <p>We implement industry-standard security measures including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure payment processing (PCI DSS compliant)</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">5. Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Object to certain data processing activities</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6. Cookies and Tracking</h3>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Enable social media features</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">7. Data Retention</h3>
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide our services and support</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our platform and services</li>
                </ul>
                <p>You may request deletion of your data at any time, subject to legal requirements.</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8. International Transfers</h3>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your data during international transfers.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">9. Children's Privacy</h3>
                <p>
                  Our platform is not intended for users under 18 years of age. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">10. Third-Party Links</h3>
                <p>
                  Our platform may contain links to third-party websites. We are not responsible for the privacy
                  practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">11. Updates to This Policy</h3>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or
                  platform notifications. Your continued use of the platform constitutes acceptance of the updated
                  policy.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">12. Contact Us</h3>
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p>
                    <strong>Email:</strong> ockiyacliffc@gmail.com
                  </p>
                  <p>
                    <strong>Subject Line:</strong> Privacy Policy Inquiry
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>

              <Separator />

              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground">
                  By using ETOILELIEN, you acknowledge that you have read and understood this Privacy Policy and consent
                  to our data practices as described herein.
                </p>
                <div className="mt-4">
                  <Link href="/terms" className="text-orange-500 hover:underline">
                    View Terms of Service
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
