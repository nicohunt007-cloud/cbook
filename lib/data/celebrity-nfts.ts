export interface CelebrityNFT {
  id: number
  celebrityId: number
  celebrityName: string
  name: string
  description: string
  image: string
  price: number // in ETH
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  edition: number
  totalSupply: number
  attributes: Record<string, string>
  unlockableContent: string[]
  membershipRequired?: "Fan" | "VIP" | "Elite"
  views: number
  likes: number
  createdAt: string
}

export const celebrityNFTs: CelebrityNFT[] = [
  // Taylor Swift NFTs
  {
    id: 1,
    celebrityId: 1,
    celebrityName: "Taylor Swift",
    name: "Eras Tour Exclusive",
    description: "Limited edition NFT from Taylor's record-breaking Eras Tour",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    price: 0.5,
    rarity: "Legendary",
    edition: 1,
    totalSupply: 100,
    attributes: {
      Tour: "Eras Tour",
      Year: "2024",
      Venue: "MetLife Stadium",
      Song: "Anti-Hero",
    },
    unlockableContent: [
      "Exclusive backstage footage",
      "Personal voice message",
      "Digital autograph",
      "VIP concert access",
    ],
    membershipRequired: "Elite",
    views: 15420,
    likes: 3240,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    celebrityId: 1,
    celebrityName: "Taylor Swift",
    name: "Folklore Sessions",
    description: "Intimate acoustic session from the Folklore era",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop&crop=center",
    price: 0.3,
    rarity: "Epic",
    edition: 45,
    totalSupply: 500,
    attributes: {
      Album: "Folklore",
      Setting: "Cabin Studio",
      Instrument: "Acoustic Guitar",
      Mood: "Intimate",
    },
    unlockableContent: ["Full acoustic performance", "Behind-the-scenes photos", "Handwritten lyrics snippet"],
    membershipRequired: "VIP",
    views: 8930,
    likes: 1820,
    createdAt: "2024-01-20",
  },

  // Dwayne Johnson NFTs
  {
    id: 3,
    celebrityId: 2,
    celebrityName: "Dwayne Johnson",
    name: "Rock's Workout Motivation",
    description: "Exclusive training session with The Rock himself",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: 0.4,
    rarity: "Rare",
    edition: 123,
    totalSupply: 1000,
    attributes: {
      Workout: "Iron Paradise",
      Duration: "45 minutes",
      Focus: "Chest & Back",
      Motivation: "Legendary",
    },
    unlockableContent: ["Personal workout routine", "Motivational video message", "Nutrition tips", "Gym playlist"],
    views: 12450,
    likes: 2890,
    createdAt: "2024-01-25",
  },

  // Emma Stone NFTs
  {
    id: 4,
    celebrityId: 3,
    celebrityName: "Emma Stone",
    name: "La La Land Memories",
    description: "Behind-the-scenes moments from the iconic musical",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop&crop=center",
    price: 0.35,
    rarity: "Epic",
    edition: 67,
    totalSupply: 300,
    attributes: {
      Movie: "La La Land",
      Scene: "Planetarium",
      Costume: "Yellow Dress",
      Emotion: "Dreamy",
    },
    unlockableContent: ["Deleted scene footage", "Personal reflection video", "Signed movie poster (digital)"],
    membershipRequired: "VIP",
    views: 9870,
    likes: 2340,
    createdAt: "2024-02-01",
  },

  // Ryan Reynolds NFTs
  {
    id: 5,
    celebrityId: 4,
    celebrityName: "Ryan Reynolds",
    name: "Deadpool's Comedy Hour",
    description: "Exclusive comedy content straight from Ryan's twisted mind",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    price: 0.25,
    rarity: "Rare",
    edition: 234,
    totalSupply: 750,
    attributes: {
      Character: "Deadpool",
      Genre: "Comedy",
      Rating: "R-Rated Humor",
      Duration: "10 minutes",
    },
    unlockableContent: ["Exclusive comedy sketch", "Blooper reel", "Personal joke for you"],
    views: 18920,
    likes: 4560,
    createdAt: "2024-02-05",
  },

  // Ariana Grande NFTs
  {
    id: 6,
    celebrityId: 5,
    celebrityName: "Ariana Grande",
    name: "Positions Studio Session",
    description: "Intimate recording session from the Positions album",
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=400&h=400&fit=crop&crop=face",
    price: 0.45,
    rarity: "Legendary",
    edition: 12,
    totalSupply: 150,
    attributes: {
      Album: "Positions",
      Studio: "Republic Records",
      "Vocal Range": "4 Octaves",
      Vibe: "Sultry",
    },
    unlockableContent: ["Raw vocal recording", "Studio diary entry", "Exclusive harmonies", "Personal thank you note"],
    membershipRequired: "Elite",
    views: 22340,
    likes: 5670,
    createdAt: "2024-02-10",
  },

  // More NFTs for other celebrities...
  {
    id: 7,
    celebrityId: 6,
    celebrityName: "Leonardo DiCaprio",
    name: "Environmental Warrior",
    description: "Climate change awareness campaign exclusive content",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    price: 0.6,
    rarity: "Legendary",
    edition: 8,
    totalSupply: 100,
    attributes: {
      Cause: "Climate Change",
      Location: "Amazon Rainforest",
      Mission: "Save Earth",
      Impact: "Global",
    },
    unlockableContent: [
      "Documentary footage",
      "Environmental action plan",
      "Personal climate message",
      "Foundation access",
    ],
    membershipRequired: "Elite",
    views: 16780,
    likes: 3890,
    createdAt: "2024-02-15",
  },

  {
    id: 8,
    celebrityId: 7,
    celebrityName: "Beyoncé",
    name: "Renaissance Tour Magic",
    description: "Exclusive moments from the Renaissance World Tour",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    price: 0.8,
    rarity: "Legendary",
    edition: 3,
    totalSupply: 50,
    attributes: {
      Tour: "Renaissance",
      Venue: "MetLife Stadium",
      Outfit: "Custom Versace",
      Energy: "Transcendent",
    },
    unlockableContent: [
      "Exclusive performance footage",
      "Backstage preparation video",
      "Personal message to fans",
      "VIP meet & greet access",
    ],
    membershipRequired: "Elite",
    views: 28950,
    likes: 7230,
    createdAt: "2024-02-20",
  },
]

export function getCelebrityNFTsByCelebrityId(celebrityId: number): CelebrityNFT[] {
  return celebrityNFTs.filter((nft) => nft.celebrityId === celebrityId)
}

export function getNFTById(id: number): CelebrityNFT | undefined {
  return celebrityNFTs.find((nft) => nft.id === id)
}

export function getNFTsByRarity(rarity: CelebrityNFT["rarity"]): CelebrityNFT[] {
  return celebrityNFTs.filter((nft) => nft.rarity === rarity)
}

export function getNFTsByMembership(membership: CelebrityNFT["membershipRequired"]): CelebrityNFT[] {
  return celebrityNFTs.filter((nft) => nft.membershipRequired === membership)
}
