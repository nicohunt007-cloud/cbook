"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Heart, Star, Calendar, Plus, Sparkles } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { FanCardComponent } from "@/components/fan-cards/fan-card"
import { fanCards } from "@/lib/data/fan-cards"

export default function FanCardsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [designFilter, setDesignFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")

  const filteredCards = fanCards.filter((card) => {
    const matchesSearch =
      card.celebrityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.fanName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.experienceType.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDesign = designFilter === "all" || card.cardDesign === designFilter
    const matchesRating = ratingFilter === "all" || card.rating >= Number(ratingFilter)

    return matchesSearch && matchesDesign && matchesRating
  })

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl -z-10" />
          <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
            <Heart className="w-4 h-4 mr-2" />
            Fan Experiences
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Personalized <span className="text-cyan-400">Fan Cards</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Discover authentic fan experiences and create your own personalized memory cards from celebrity encounters
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400">{fanCards.length}</div>
              <div className="text-sm text-muted-foreground">Fan Cards</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-muted-foreground">Satisfied</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-muted-foreground">Memories</div>
            </div>
          </div>
        </div>

        {/* Create Your Own Card CTA */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-950/20 dark:to-purple-950/20 border-cyan-200 dark:border-cyan-800">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Create Your Own Fan Card</h3>
                  <p className="text-sm text-muted-foreground">
                    Book an experience and get a personalized digital fan card to commemorate your moment
                  </p>
                </div>
              </div>
              <Button className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Booking
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8 border border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Filter className="w-5 h-5 mr-2" />
              Filter Fan Cards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by celebrity, fan, or experience..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={designFilter} onValueChange={setDesignFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Card Design" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Designs</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Minimum Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars Only</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCards.length} of {fanCards.length} fan cards
          </p>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Latest experiences</span>
          </div>
        </div>

        {/* Fan Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCards.map((fanCard) => (
            <FanCardComponent key={fanCard.id} fanCard={fanCard} />
          ))}
        </div>

        {/* No Results */}
        {filteredCards.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No fan cards found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setDesignFilter("all")
                setRatingFilter("all")
              }}
              className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Featured Section */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How Fan Cards Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every celebrity experience comes with a personalized digital fan card
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Book Experience</h3>
              <p className="text-muted-foreground">
                Complete your celebrity booking and enjoy your personalized experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400/10 border border-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rate & Review</h3>
              <p className="text-muted-foreground">
                Share your experience and rate your interaction with the celebrity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Card</h3>
              <p className="text-muted-foreground">
                Receive a beautiful digital fan card to commemorate your special moment
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
