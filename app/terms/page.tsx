"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function TermsPage() {
  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Welcome to ETOILELIEN ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our
                celebrity booking platform and services. By accessing or using our platform, you agree to be bound by
                these Terms.
              </p>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Service Description</h3>
                <p>
                  ETOILELIEN is a premium platform that connects users with celebrities for exclusive experiences
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Personal video messages</li>
                  <li>Private video calls</li>
                  <li>Meet and greet experiences</li>
                  <li>Signed autographs</li>
                  <li>Social media shoutouts</li>
                  <li>Exclusive workshops and masterclasses</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2. Account Registration</h3>
                <p>
                  Account creation is exclusively available to premium members who have completed at least one celebrity
                  booking experience. Login credentials are provided via email after successful payment completion.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">3. Booking Process</h3>
                <p>When you make a booking request:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your request is sent to our agent team for processing</li>
                  <li>You will receive confirmation within 24-48 hours</li>
                  <li>Payment is processed upon booking submission</li>
                  <li>Experiences are subject to celebrity availability</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">4. Payment Terms</h3>
                <p>All payments are processed securely through our platform. Fees include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service fee (varies by celebrity and service type)</li>
                  <li>Platform fee (5% of service cost)</li>
                  <li>Processing fee ($15 per transaction)</li>
                  <li>Optional charity donations</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">5. Cancellation Policy</h3>
                <p>Cancellation policies vary by service type and celebrity. Generally:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cancellations made 48+ hours in advance: Full refund minus processing fees</li>
                  <li>Cancellations made 24-48 hours in advance: 50% refund</li>
                  <li>Cancellations made less than 24 hours: No refund</li>
                  <li>Celebrity-initiated cancellations: Full refund</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6. User Conduct</h3>
                <p>Users agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate and truthful information</li>
                  <li>Respect celebrities' time and boundaries</li>
                  <li>Not record or share private interactions without consent</li>
                  <li>Use the platform for lawful purposes only</li>
                  <li>Not engage in harassment or inappropriate behavior</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">7. Intellectual Property</h3>
                <p>
                  All content on the platform, including celebrity images, videos, and promotional materials, are
                  protected by intellectual property rights. Users may not reproduce, distribute, or use this content
                  without explicit permission.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">8. Privacy and Data</h3>
                <p>
                  Your privacy is important to us. Please review our{" "}
                  <Link href="/privacy" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  to understand how we collect, use, and protect your information.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">9. Disclaimers</h3>
                <p>ETOILELIEN acts as an intermediary platform. We do not guarantee:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Celebrity availability or response times</li>
                  <li>The quality or content of celebrity interactions</li>
                  <li>That all booking requests will be fulfilled</li>
                  <li>Uninterrupted platform availability</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">10. Limitation of Liability</h3>
                <p>
                  ETOILELIEN's liability is limited to the amount paid for the specific service. We are not liable for
                  indirect, incidental, or consequential damages arising from platform use.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">11. Modifications</h3>
                <p>
                  We reserve the right to modify these Terms at any time. Users will be notified of significant changes
                  via email or platform notifications.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">12. Contact Information</h3>
                <p>For questions about these Terms, please contact us at:</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p>
                    <strong>Email:</strong> nicolashunt@ettoile-lien.online
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>

              <Separator />

              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground">
                  By using ETOILELIEN, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
