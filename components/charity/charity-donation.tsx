"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Globe } from "lucide-react"
import Image from "next/image"

interface Charity {
  id: string
  name: string
  description: string
  category: string
  image: string
  raised: number
  goal: number
  supporters: number
}

const charities: Charity[] = [
  {
    id: "charity-1",
    name: "Children's Education Fund",
    description: "Providing educational resources and scholarships to underprivileged children worldwide",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    raised: 125000,
    goal: 200000,
    supporters: 1247,
  },
  {
    id: "charity-2",
    name: "Youth Sports Initiative",
    description: "Supporting young athletes with equipment, training, and opportunities",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    raised: 89000,
    goal: 150000,
    supporters: 892,
  },
  {
    id: "charity-3",
    name: "Mental Health Awareness",
    description: "Promoting mental health resources and breaking stigma in communities",
    category: "Health",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    raised: 67000,
    goal: 100000,
    supporters: 634,
  },
]

interface CharityDonationProps {
  onDonationComplete?: (amount: number, charity: string) => void
}

export function CharityDonation({ onDonationComplete }: CharityDonationProps) {
  const [selectedCharity, setSelectedCharity] = useState("")
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const predefinedAmounts = [10, 25, 50, 100, 250, 500]

  const handleDonation = () => {
    const amount = donationAmount === "custom" ? Number(customAmount) : Number(donationAmount)
    const charity = charities.find((c) => c.id === selectedCharity)

    if (amount > 0 && charity) {
      setIsSubmitted(true)
      onDonationComplete?.(amount, charity.name)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-green-400">Thank You!</h3>
          <p className="text-green-700 dark:text-green-300">
            Your donation has been processed. You're making a real difference!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="w-5 h-5 mr-2 text-red-500" />
          Support a Cause
        </CardTitle>
        <p className="text-sm text-muted-foreground">Make your booking even more meaningful by supporting a charity</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Charity Selection */}
        <div className="space-y-4">
          <Label className="text-sm font-medium">Choose a Charity</Label>
          <div className="grid gap-4">
            {charities.map((charity) => (
              <div
                key={charity.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedCharity === charity.id
                    ? "border-cyan-400 bg-cyan-50 dark:bg-cyan-950/20"
                    : "border-border hover:border-cyan-300"
                }`}
                onClick={() => setSelectedCharity(charity.id)}
              >
                <div className="flex space-x-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={charity.image || "/placeholder.svg"} alt={charity.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <input
                        type="radio"
                        name="charity"
                        value={charity.id}
                        checked={selectedCharity === charity.id}
                        onChange={() => setSelectedCharity(charity.id)}
                        className="text-cyan-400"
                      />
                      <h4 className="font-semibold text-sm">{charity.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {charity.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{charity.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Target className="w-3 h-3" />
                        <span>
                          ${charity.raised.toLocaleString()} / ${charity.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{charity.supporters} supporters</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-cyan-400 h-2 rounded-full transition-all"
                        style={{ width: `${Math.min((charity.raised / charity.goal) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Amount */}
        {selectedCharity && (
          <div className="space-y-4">
            <Label className="text-sm font-medium">Donation Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount.toString())}
                  className={`p-3 text-sm font-medium rounded-lg border transition-colors ${
                    donationAmount === amount.toString()
                      ? "border-cyan-400 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600"
                      : "border-border hover:border-cyan-300"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDonationAmount("custom")}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  donationAmount === "custom"
                    ? "border-cyan-400 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600"
                    : "border-border hover:border-cyan-300"
                }`}
              >
                Custom
              </button>
              {donationAmount === "custom" && (
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="flex-1"
                />
              )}
            </div>
          </div>
        )}

        {/* Donation Button */}
        {selectedCharity && donationAmount && (
          <Button
            onClick={handleDonation}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
            disabled={donationAmount === "custom" && !customAmount}
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate ${donationAmount === "custom" ? customAmount : donationAmount}
          </Button>
        )}

        <div className="text-xs text-muted-foreground text-center">
          <Globe className="w-3 h-3 inline mr-1" />
          100% of your donation goes directly to the charity
        </div>
      </CardContent>
    </Card>
  )
}
