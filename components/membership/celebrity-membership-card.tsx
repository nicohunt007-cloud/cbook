import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Crown, Calendar, Users, Award, Sparkles } from "lucide-react"
import Image from "next/image"

export interface CelebrityMembership {
  id: string
  celebrityId: number
  celebrityName: string
  celebrityImage: string
  membershipTier: "Bronze" | "Silver" | "Gold" | "Platinum"
  joinDate: string
  totalBookings: number
  rating: number
  specialPerks: string[]
  exclusiveContent: number
  fanClubSize: number
  nextEvent?: string
}

interface CelebrityMembershipCardProps {
  membership: CelebrityMembership
  isOwned?: boolean
}

export function CelebrityMembershipCard({ membership, isOwned = false }: CelebrityMembershipCardProps) {
  const tierColors = {
    Bronze: "from-amber-600 to-amber-800",
    Silver: "from-gray-400 to-gray-600",
    Gold: "from-yellow-400 to-yellow-600",
    Platinum: "from-purple-400 to-purple-600",
  }

  const tierIcons = {
    Bronze: <Award className="w-5 h-5" />,
    Silver: <Star className="w-5 h-5" />,
    Gold: <Crown className="w-5 h-5" />,
    Platinum: <Sparkles className="w-5 h-5" />,
  }

  return (
    <Card className="overflow-hidden border-2 border-border bg-card relative">
      {/* Tier Badge */}
      <div
        className={`absolute top-4 right-4 bg-gradient-to-r ${tierColors[membership.membershipTier]} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 z-10`}
      >
        {tierIcons[membership.membershipTier]}
        <span>{membership.membershipTier}</span>
      </div>

      {/* Header with Celebrity Info */}
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={membership.celebrityImage || "/placeholder.svg"}
              alt={membership.celebrityName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl">{membership.celebrityName}</CardTitle>
            <p className="text-sm text-muted-foreground">Member since {membership.joinDate}</p>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{membership.rating}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{membership.totalBookings}</div>
            <div className="text-xs text-muted-foreground">Bookings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{membership.exclusiveContent}</div>
            <div className="text-xs text-muted-foreground">Exclusive</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{membership.fanClubSize.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Fans</div>
          </div>
        </div>

        {/* Special Perks */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Member Perks</h4>
          <div className="space-y-1">
            {membership.specialPerks.map((perk, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span className="text-muted-foreground">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Event */}
        {membership.nextEvent && (
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Upcoming Event</span>
            </div>
            <p className="text-xs text-muted-foreground">{membership.nextEvent}</p>
          </div>
        )}

        {/* Action Button */}
        <Button
          className={`w-full ${
            isOwned
              ? "bg-green-600 hover:bg-green-700"
              : `bg-gradient-to-r ${tierColors[membership.membershipTier]} hover:opacity-90`
          }`}
          disabled={isOwned}
        >
          {isOwned ? (
            <>
              <Users className="w-4 h-4 mr-2" />
              Active Member
            </>
          ) : (
            <>
              <Crown className="w-4 h-4 mr-2" />
              Join Fan Club
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
