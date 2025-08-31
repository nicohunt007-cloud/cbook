import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Heart, Share2, Download } from "lucide-react"
import Image from "next/image"

export interface FanCard {
  id: string
  celebrityId: number
  celebrityName: string
  celebrityImage: string
  fanName: string
  experienceType: string
  date: string
  rating: number
  message: string
  isPublic: boolean
  likes: number
  cardDesign: "classic" | "modern" | "premium"
}

interface FanCardProps {
  fanCard: FanCard
  showActions?: boolean
}

export function FanCardComponent({ fanCard, showActions = true }: FanCardProps) {
  const cardStyles = {
    classic:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800",
    modern:
      "bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-cyan-200 dark:border-cyan-800",
    premium:
      "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800",
  }

  return (
    <Card className={`overflow-hidden ${cardStyles[fanCard.cardDesign]} transition-all hover:shadow-lg`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={fanCard.celebrityImage || "/placeholder.svg"}
                alt={fanCard.celebrityName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{fanCard.celebrityName}</CardTitle>
              <p className="text-sm text-muted-foreground">{fanCard.experienceType}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {fanCard.cardDesign}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-sm">Fan: {fanCard.fanName}</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{fanCard.date}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < fanCard.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">({fanCard.rating}/5)</span>
          </div>

          <p className="text-sm text-foreground italic">"{fanCard.message}"</p>
        </div>

        {showActions && (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
                <span>{fanCard.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
            <Button size="sm" variant="outline" className="text-xs bg-transparent">
              <Download className="w-3 h-3 mr-1" />
              Download
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
