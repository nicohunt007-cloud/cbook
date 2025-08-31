import type { CelebrityMembership } from "@/components/membership/celebrity-membership-card"

export const celebrityMemberships: CelebrityMembership[] = [
  {
    id: "cm-001",
    celebrityId: 21,
    celebrityName: "JuJu Watkins",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=JuJu",
    membershipTier: "Gold",
    joinDate: "Jan 2024",
    totalBookings: 89,
    rating: 4.9,
    specialPerks: [
      "Monthly exclusive training videos",
      "Priority booking access",
      "Signed merchandise discounts",
      "Virtual Q&A sessions",
    ],
    exclusiveContent: 24,
    fanClubSize: 3420,
    nextEvent: "Live Training Session - Feb 15, 2024",
  },
  {
    id: "cm-002",
    celebrityId: 22,
    celebrityName: "Caitlin Clark",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Caitlin",
    membershipTier: "Platinum",
    joinDate: "Dec 2023",
    totalBookings: 156,
    rating: 5.0,
    specialPerks: [
      "Weekly behind-the-scenes content",
      "First access to new experiences",
      "Exclusive merchandise",
      "Personal milestone celebrations",
      "VIP event invitations",
    ],
    exclusiveContent: 45,
    fanClubSize: 8750,
    nextEvent: "Championship Watch Party - Feb 20, 2024",
  },
  {
    id: "cm-003",
    celebrityId: 23,
    celebrityName: "Angel Reese",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Angel",
    membershipTier: "Gold",
    joinDate: "Jan 2024",
    totalBookings: 67,
    rating: 4.8,
    specialPerks: [
      "Exclusive workout routines",
      "Member-only live streams",
      "Discounted personal training",
      "Early access to announcements",
    ],
    exclusiveContent: 18,
    fanClubSize: 2890,
    nextEvent: "Rebounding Masterclass - Feb 18, 2024",
  },
  {
    id: "cm-004",
    celebrityId: 13,
    celebrityName: "Taylor Swift",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Taylor",
    membershipTier: "Platinum",
    joinDate: "Oct 2023",
    totalBookings: 234,
    rating: 4.8,
    specialPerks: [
      "Exclusive acoustic performances",
      "Songwriting insights",
      "First listen to new music",
      "VIP concert experiences",
      "Personal voice messages",
    ],
    exclusiveContent: 67,
    fanClubSize: 15600,
    nextEvent: "Secret Session - Feb 25, 2024",
  },
  {
    id: "cm-005",
    celebrityId: 27,
    celebrityName: "LeBron James",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=LeBron",
    membershipTier: "Platinum",
    joinDate: "Nov 2023",
    totalBookings: 189,
    rating: 4.9,
    specialPerks: [
      "Exclusive training footage",
      "Business mentorship content",
      "Family foundation updates",
      "Championship celebrations",
      "Personal motivation messages",
    ],
    exclusiveContent: 52,
    fanClubSize: 12400,
    nextEvent: "Leadership Workshop - Feb 22, 2024",
  },
]

export function getCelebrityMembershipById(id: string): CelebrityMembership | undefined {
  return celebrityMemberships.find((membership) => membership.id === id)
}

export function getCelebrityMembershipByCelebrityId(celebrityId: number): CelebrityMembership | undefined {
  return celebrityMemberships.find((membership) => membership.celebrityId === celebrityId)
}
