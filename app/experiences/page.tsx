"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Star, Search, Filter, Calendar, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"

interface Experience {
  id: number
  title: string
  category: string
  price: string
  duration: string
  capacity: string
  rating: number
  reviews: number
  image: string
  location: string
  date: string
  description: string
  highlights: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Hollywood Acting Masterclass",
    category: "Acting",
    price: "$299",
    duration: "3 hours",
    capacity: "12 people",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=400&fit=crop",
    location: "Los Angeles, CA",
    date: "March 15, 2024",
    description: "Learn from industry professionals in this intensive acting workshop",
    highlights: ["Scene work", "Character development", "Industry insights", "Networking"],
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Music Production Workshop",
    category: "Music",
    price: "$199",
    duration: "4 hours",
    capacity: "8 people",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    location: "Nashville, TN",
    date: "March 20, 2024",
    description: "Create your own track with Grammy-winning producers",
    highlights: ["Beat making", "Vocal recording", "Mixing basics", "Industry tips"],
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Basketball Training Camp",
    category: "Sports",
    price: "$149",
    duration: "2 hours",
    capacity: "20 people",
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    location: "Chicago, IL",
    date: "March 25, 2024",
    description: "Train with professional athletes and improve your game",
    highlights: ["Skill drills", "Scrimmage games", "Nutrition tips", "Mental coaching"],
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Comedy Writing Workshop",
    category: "Comedy",
    price: "$179",
    duration: "3 hours",
    capacity: "15 people",
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    location: "New York, NY",
    date: "April 2, 2024",
    description: "Learn the art of comedy writing from stand-up professionals",
    highlights: ["Joke structure", "Timing techniques", "Performance tips", "Open mic opportunity"],
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Fashion Design Intensive",
    category: "Fashion",
    price: "$399",
    duration: "6 hours",
    capacity: "10 people",
    rating: 4.9,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
    location: "Milan, Italy",
    date: "April 10, 2024",
    description: "Design and create your own fashion piece with industry experts",
    highlights: ["Sketching techniques", "Fabric selection", "Pattern making", "Portfolio building"],
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Culinary Arts Experience",
    category: "Culinary",
    price: "$249",
    duration: "4 hours",
    capacity: "12 people",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    location: "Paris, France",
    date: "April 15, 2024",
    description: "Cook alongside Michelin-starred chefs in this hands-on experience",
    highlights: ["French techniques", "Plating artistry", "Wine pairing", "Recipe collection"],
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "Photography Masterclass",
    category: "Photography",
    price: "$189",
    duration: "5 hours",
    capacity: "8 people",
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
    location: "San Francisco, CA",
    date: "April 22, 2024",
    description: "Master the art of photography with award-winning photographers",
    highlights: ["Composition rules", "Lighting techniques", "Post-processing", "Portfolio review"],
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Dance Performance Workshop",
    category: "Dance",
    price: "$129",
    duration: "3 hours",
    capacity: "25 people",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop",
    location: "Miami, FL",
    date: "May 1, 2024",
    description: "Learn choreography from professional dancers and performers",
    highlights: ["Hip-hop basics", "Performance skills", "Stage presence", "Group routine"],
    difficulty: "Beginner",
  },
]

export default function ExperiencesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const categories = ["all", "Acting", "Music", "Sports", "Comedy", "Fashion", "Culinary", "Photography", "Dance"]
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredExperiences = experiences
    .filter((exp) => {
      const matchesSearch =
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || exp.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || exp.difficulty === selectedDifficulty
      return matchesSearch && matchesCategory && matchesDifficulty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return Number.parseInt(a.price.replace("$", "")) - Number.parseInt(b.price.replace("$", ""))
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Celebrity Experiences</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join exclusive workshops, masterclasses, and experiences led by your favorite celebrities and industry
              professionals
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search experiences..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty === "all" ? "All Levels" : difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredExperiences.length} of {experiences.length} experiences
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {experience.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge
                      variant={
                        experience.difficulty === "Beginner"
                          ? "default"
                          : experience.difficulty === "Intermediate"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {experience.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{experience.title}</CardTitle>
                    <span className="text-xl font-bold text-orange-500">{experience.price}</span>
                  </div>
                  <CardDescription className="line-clamp-2">{experience.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{experience.capacity}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{experience.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{experience.rating}</span>
                      <span className="text-sm text-muted-foreground">({experience.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {experience.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{experience.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-orange-500 text-white hover:bg-orange-600">Book Now</Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No experiences found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms to find more experiences.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
