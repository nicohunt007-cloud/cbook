import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { MembershipCard } from "@/components/membership/membership-card"
import { membershipTiers } from "@/lib/data/membership"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Crown, Users, Shield, Star, Calendar } from "lucide-react"

export default function MembershipPage() {
  const benefits = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Exclusive Access",
      description: "Get priority access to new celebrities and limited-time experiences",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Support",
      description: "Dedicated customer support with faster response times",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Early Booking",
      description: "Book experiences before they're available to the general public",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "VIP Events",
      description: "Access to exclusive member-only events and meet & greets",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Enhanced security features and booking protection",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Special Perks",
      description: "Receive exclusive content, discounts, and surprise experiences",
    },
  ]

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-secondary text-secondary-foreground border">
            <Crown className="w-4 h-4 mr-2" />
            ÉtoileLien Premium Membership
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Unlock Exclusive Access</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect membership tier to connect with your favorite celebrities and access exclusive
            experiences
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {membershipTiers.map((tier, index) => (
            <MembershipCard key={index} tier={tier} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl border p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Membership Benefits</h2>
            <p className="text-muted-foreground text-lg">Discover what makes our ÉtoileLien platform special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our memberships</p>
          </div>
          <div className="space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your membership at any time. Your access will continue until the end of your current
                billing period.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Do I get refunds for unused bookings?</h3>
              <p className="text-muted-foreground">
                Refund policies vary by celebrity and experience type. Most bookings can be cancelled up to 48 hours in
                advance for a full refund.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">How quickly do celebrities respond?</h3>
              <p className="text-muted-foreground">
                Response times vary by celebrity and membership tier. VIP and Elite members typically receive responses
                within 24 hours.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Can I upgrade or downgrade my membership?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your membership tier at any time. Upgrades take effect immediately, while downgrades
                take effect at your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
