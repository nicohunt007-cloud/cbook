import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Video, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Celebrity {
  id: number
  name: string
  category: string
  price: string
  rating: number
  reviews: number
  image: string
  availability: "Available" | "Limited" | "Exclusive"
  tier: "Premium" | "Elite" | "VIP"
  services: string[]
  bio: string
}

interface CelebrityCardProps {
  celebrity: Celebrity
}

export function CelebrityCard({ celebrity }: CelebrityCardProps) {
  const getServiceIcon = (service: string) => {
    switch (service) {
      case "Personal Message":
        return <MessageCircle className="w-3 h-3" />
      case "Video Call":
        return <Video className="w-3 h-3" />
      case "Meet & Greet":
        return <Users className="w-3 h-3" />
      default:
        return <Calendar className="w-3 h-3" />
    }
  }

  return (
    <Card className="group hover:border-cyan-400 transition-all duration-300 border border-border overflow-hidden bg-card h-full">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={celebrity.image || "/placeholder.svg"}
          alt={celebrity.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge
            className={`${
              celebrity.tier === "VIP"
                ? "bg-cyan-400 text-black"
                : celebrity.tier === "Elite"
                  ? "bg-cyan-300 text-black"
                  : "bg-cyan-200 text-black"
            } font-medium`}
          >
            {celebrity.tier}
          </Badge>
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              celebrity.availability === "Available"
                ? "bg-green-500/90 text-white"
                : celebrity.availability === "Limited"
                  ? "bg-yellow-500/90 text-white"
                  : "bg-red-500/90 text-white"
            }`}
          >
            {celebrity.availability}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-1 mb-2">
            <Star className="w-4 h-4 fill-cyan-400 text-cyan-400" />
            <span className="text-sm font-medium">{celebrity.rating}</span>
            <span className="text-xs text-white/70">({celebrity.reviews})</span>
          </div>

          <h3 className="text-xl font-bold mb-1">{celebrity.name}</h3>
          <p className="text-cyan-400 font-medium text-sm mb-3">{celebrity.category}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {celebrity.services.slice(0, 2).map((service, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                {getServiceIcon(service)}
                <span className="ml-1">{service}</span>
              </Badge>
            ))}
            {celebrity.services.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm">
                +{celebrity.services.length - 2} more
              </Badge>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-cyan-400">{celebrity.price}</span>
            <div className="flex space-x-2">
              <Link href={`/celebrities/${celebrity.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-xs"
                >
                  View
                </Button>
              </Link>
              <Link href={`/booking/${celebrity.id}`}>
                <Button className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan text-xs" size="sm">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
