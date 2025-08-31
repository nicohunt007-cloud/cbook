import type { MembershipTier } from "@/components/membership/membership-card"

export const membershipTiers: MembershipTier[] = [
  {
    name: "Fan",
    price: "$29",
    period: "/month",
    features: [
      "Access to basic celebrity profiles",
      "Standard booking requests",
      "Community forum access",
      "Monthly newsletter",
      "Basic customer support",
    ],
    popular: false,
  },
  {
    name: "VIP",
    price: "$99",
    period: "/month",
    features: [
      "Priority booking requests",
      "Exclusive celebrity content",
      "VIP-only events access",
      "Personal concierge service",
      "Early access to new celebrities",
      "Premium customer support",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$299",
    period: "/month",
    features: [
      "Guaranteed booking responses",
      "Direct celebrity messaging",
      "Private meet & greet opportunities",
      "Custom experience planning",
      "24/7 premium support",
      "Exclusive backstage access",
    ],
    popular: false,
  },
]
