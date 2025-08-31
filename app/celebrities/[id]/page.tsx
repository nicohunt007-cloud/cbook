import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Clock, MessageCircle, Video, Users, Calendar, Award, Heart, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getCelebrityById } from "@/lib/data/celebrities"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { CelebrityMembershipCard } from "@/components/membership/celebrity-membership-card"
import { getCelebrityMembershipByCelebrityId } from "@/lib/data/celebrity-memberships"
import { getCelebrityNFTsByCelebrityId } from "@/lib/data/celebrity-nfts"
import { CelebrityNFTCard } from "@/components/nft/celebrity-nft-card"

interface CelebrityProfilePageProps {
  params: {
    id: string
  }
}

export default function CelebrityProfilePage({ params }: CelebrityProfilePageProps) {
  const celebrity = getCelebrityById(Number.parseInt(params.id))

  if (!celebrity) {
    notFound()
  }

  const services = [
    {
      id: "personal-message",
      name: "Personal Video Message",
      price: 500,
      duration: "2-3 minutes",
      description: "A personalized video message for you or someone special",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      id: "video-call",
      name: "Private Video Call",
      price: 2500,
      duration: "15 minutes",
      description: "One-on-one video call session",
      icon: <Video className="w-5 h-5" />,
    },
    {
      id: "meet-greet",
      name: "Meet & Greet",
      price: 5000,
      duration: "30 minutes",
      description: "In-person meet and greet experience",
      icon: <Users className="w-5 h-5" />,
    },
  ]

  const achievements = [
    "Academy Award Winner",
    "Golden Globe Winner",
    "BAFTA Award Winner",
    "Screen Actors Guild Award",
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Amazing experience! Emma was so genuine and kind. Worth every penny!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 5,
      comment: "The video message was perfect for my daughter's birthday. She cried happy tears!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Jessica L.",
      rating: 4,
      comment: "Great experience overall. Emma was professional and sweet.",
      date: "2 months ago",
    },
  ]

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-cyan-600">
              Home
            </Link>
            {" > "}
            <Link href="/celebrities" className="hover:text-cyan-600">
              Celebrities
            </Link>
            {" > "}
            <span className="text-cyan-600">{celebrity.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Celebrity Header */}
            <Card className="border">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <Image
                      src={celebrity.image || "/placeholder.svg"}
                      alt={celebrity.name}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        celebrity.tier === "VIP"
                          ? "bg-yellow-500"
                          : celebrity.tier === "Elite"
                            ? "bg-cyan-600"
                            : "bg-blue-500"
                      }`}
                    >
                      {celebrity.tier}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2 text-foreground">{celebrity.name}</h1>
                        <p className="text-cyan-600 font-medium text-lg">{celebrity.category}</p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          celebrity.availability === "Available"
                            ? "bg-green-100 text-green-800"
                            : celebrity.availability === "Limited"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {celebrity.availability}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{celebrity.rating}</span>
                        <span className="text-gray-500">({celebrity.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-gray-600">1.2k fans</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{celebrity.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center">
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-2xl">Available Services</CardTitle>
                <CardDescription>Choose from these exclusive experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="border rounded-lg p-6 hover:border-cyan-300 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                              {service.icon}
                            </div>
                            <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
                          </div>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <Badge variant="secondary">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration}
                          </Badge>
                        </div>
                        <div className="text-right ml-6">
                          <span className="text-2xl font-bold text-cyan-600">${service.price.toLocaleString()}</span>
                          <div className="mt-2">
                            <Link href={`/booking/${celebrity.id}?service=${service.id}`}>
                              <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700">
                                Book Now
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-2xl">Fan Reviews</CardTitle>
                <CardDescription>What fans are saying about their experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-cyan-600">{review.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-foreground">{review.name}</span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                      {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </CardContent>
            </Card>

            {/* Celebrity NFTs */}
            {(() => {
              const celebrityNFTs = getCelebrityNFTsByCelebrityId(celebrity.id)
              return celebrityNFTs.length > 0 ? (
                <Card className="border">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="w-6 h-6 mr-2 text-purple-400" />
                      Exclusive NFT Collection
                    </CardTitle>
                    <CardDescription>Own unique digital collectibles with exclusive unlockable content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {celebrityNFTs.map((nft) => (
                        <CelebrityNFTCard
                          key={nft.id}
                          nft={nft}
                          canPurchase={!nft.membershipRequired || nft.membershipRequired === "Fan"}
                        />
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Link href="/nfts">
                        <Button variant="outline">View All Celebrity NFTs</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ) : null
            })()}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Book */}
            <Card className="border sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Quick Book
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-cyan-600">From ${celebrity.price.replace("$", "")}</span>
                    <p className="text-gray-600 text-sm">Starting price</p>
                  </div>
                  <Link href={`/booking/${celebrity.id}`}>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700">
                      Book Experience
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-500 text-center">Response within 24-48 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Celebrity Membership */}
            {(() => {
              const membership = getCelebrityMembershipByCelebrityId(celebrity.id)
              return membership ? <CelebrityMembershipCard membership={membership} /> : null
            })()}

            {/* Stats */}
            <Card className="border">
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Bookings</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Response Time</span>
                    <span className="font-medium">6 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fan Rating</span>
                    <span className="font-medium">{celebrity.rating}/5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
