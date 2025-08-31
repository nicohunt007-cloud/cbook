import type { FanCard } from "@/components/fan-cards/fan-card"

export const fanCards: FanCard[] = [
  {
    id: "fc-001",
    celebrityId: 21,
    celebrityName: "JuJu Watkins",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=JuJu",
    fanName: "Sarah M.",
    experienceType: "Personal Video Message",
    date: "2024-01-15",
    rating: 5,
    message:
      "JuJu's message for my daughter's birthday was absolutely perfect! She was so genuine and inspiring. My daughter cried happy tears!",
    isPublic: true,
    likes: 47,
    cardDesign: "premium",
  },
  {
    id: "fc-002",
    celebrityId: 22,
    celebrityName: "Caitlin Clark",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Caitlin",
    fanName: "Mike R.",
    experienceType: "Video Call",
    date: "2024-01-20",
    rating: 5,
    message:
      "15 minutes with Caitlin talking basketball strategy was incredible. She gave me tips that I'm already using in my coaching!",
    isPublic: true,
    likes: 63,
    cardDesign: "modern",
  },
  {
    id: "fc-003",
    celebrityId: 23,
    celebrityName: "Angel Reese",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Angel",
    fanName: "Jessica L.",
    experienceType: "Basketball Training",
    date: "2024-01-25",
    rating: 5,
    message:
      "Angel's rebounding techniques are game-changing! She's not just an amazing player but an incredible teacher too.",
    isPublic: true,
    likes: 38,
    cardDesign: "classic",
  },
  {
    id: "fc-004",
    celebrityId: 13,
    celebrityName: "Taylor Swift",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Taylor",
    fanName: "Emma K.",
    experienceType: "Personal Message",
    date: "2024-01-10",
    rating: 5,
    message: "Taylor's surprise message for my graduation was beyond my wildest dreams. I'll treasure this forever!",
    isPublic: true,
    likes: 156,
    cardDesign: "premium",
  },
  {
    id: "fc-005",
    celebrityId: 6,
    celebrityName: "Ryan Reynolds",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=Ryan",
    fanName: "David P.",
    experienceType: "Video Call",
    date: "2024-01-18",
    rating: 5,
    message:
      "Ryan had me laughing the entire 15 minutes. His humor is even better one-on-one. Absolutely worth every penny!",
    isPublic: true,
    likes: 89,
    cardDesign: "modern",
  },
  {
    id: "fc-006",
    celebrityId: 27,
    celebrityName: "LeBron James",
    celebrityImage: "/placeholder.svg?height=100&width=100&text=LeBron",
    fanName: "Marcus T.",
    experienceType: "Basketball Clinic",
    date: "2024-01-22",
    rating: 5,
    message:
      "Learning from the GOAT himself was surreal. LeBron's basketball IQ and leadership advice will stay with me forever.",
    isPublic: true,
    likes: 234,
    cardDesign: "premium",
  },
]

export function getFanCardById(id: string): FanCard | undefined {
  return fanCards.find((card) => card.id === id)
}

export function getFanCardsByCelebrity(celebrityId: number): FanCard[] {
  return fanCards.filter((card) => card.celebrityId === celebrityId)
}

export function getPublicFanCards(): FanCard[] {
  return fanCards.filter((card) => card.isPublic)
}
