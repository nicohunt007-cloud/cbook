"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Users, Star, TrendingUp } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { CelebrityCard } from "@/components/celebrities/celebrity-card"
import { celebrities } from "@/lib/data/celebrities"

export default function CelebritiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [tierFilter, setTierFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(celebrities.map((c) => c.category))]
    return uniqueCategories.sort()
  }, [])

  const filteredCelebrities = useMemo(() => {
    return celebrities.filter((celebrity) => {
      const matchesSearch =
        celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        celebrity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        celebrity.bio.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = categoryFilter === "all" || celebrity.category === categoryFilter

      const price = Number.parseInt(celebrity.price.replace(/[$,]/g, ""))
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under-5k" && price < 5000) ||
        (priceFilter === "5k-10k" && price >= 5000 && price <= 10000) ||
        (priceFilter === "10k-15k" && price >= 10000 && price <= 15000) ||
        (priceFilter === "over-15k" && price > 15000)

      const matchesTier = tierFilter === "all" || celebrity.tier === tierFilter

      const matchesAvailability = availabilityFilter === "all" || celebrity.availability === availabilityFilter

      return matchesSearch && matchesCategory && matchesPrice && matchesTier && matchesAvailability
    })
  }, [searchTerm, categoryFilter, priceFilter, tierFilter, availabilityFilter])

  const clearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setPriceFilter("all")
    setTierFilter("all")
    setAvailabilityFilter("all")
  }

  // Stats
  const stats = useMemo(() => {
    return {
      total: celebrities.length,
      available: celebrities.filter((c) => c.availability === "Available").length,
      avgRating: (celebrities.reduce((sum, c) => sum + c.rating, 0) / celebrities.length).toFixed(1),
      topTier: celebrities.filter((c) => c.tier === "VIP").length,
    }
  }, [])

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
            <Users className="w-4 h-4 mr-2" />
            {stats.total}+ Celebrities
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Browse All Celebrities</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover and book exclusive experiences with your favorite stars from entertainment, sports, and social
            media
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{stats.available}</div>
            <div className="text-sm text-muted-foreground">Available Now</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="flex items-center justify-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">{stats.avgRating}</span>
            </div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-500">{stats.topTier}</div>
            <div className="text-sm text-muted-foreground">VIP Tier</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h3>
            <Button variant="outline" size="sm" onClick={clearFilters} className="bg-transparent">
              Clear All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search celebrities..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-5k">Under $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-15k">$10,000 - $15,000</SelectItem>
                <SelectItem value="over-15k">Over $15,000</SelectItem>
              </SelectContent>
            </Select>

            {/* Tier Filter */}
            <Select value={tierFilter} onValueChange={setTierFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
                <SelectItem value="Elite">Elite</SelectItem>
                <SelectItem value="VIP">VIP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Availability Filter */}
          <div className="mt-4">
            <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Availability</SelectItem>
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="Limited">Limited</SelectItem>
                <SelectItem value="Exclusive">Exclusive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCelebrities.length} of {celebrities.length} celebrities
          </p>
          {filteredCelebrities.length > 0 && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span>Sorted by popularity</span>
            </div>
          )}
        </div>

        {/* Celebrity Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredCelebrities.map((celebrity) => (
            <CelebrityCard key={celebrity.id} celebrity={celebrity} />
          ))}
        </div>

        {/* No Results */}
        {filteredCelebrities.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No celebrities found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria or clearing the filters</p>
            <Button onClick={clearFilters} className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More - Show if we have results but could show pagination */}
        {filteredCelebrities.length > 0 && filteredCelebrities.length >= 20 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Celebrities
            </Button>
          </div>
        )}

        {/* Popular Categories */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Hollywood Actress",
                count: celebrities.filter((c) => c.category === "Hollywood Actress").length,
              },
              { name: "Music Artist", count: celebrities.filter((c) => c.category === "Music Artist").length },
              {
                name: "Basketball Player",
                count: celebrities.filter((c) => c.category === "Basketball Player").length,
              },
              { name: "Actor", count: celebrities.filter((c) => c.category === "Actor").length },
              { name: "Content Creator", count: celebrities.filter((c) => c.category === "Content Creator").length },
              { name: "Football Player", count: celebrities.filter((c) => c.category === "Football Player").length },
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => setCategoryFilter(category.name)}
                className="bg-muted hover:bg-accent rounded-lg p-4 text-center transition-colors group"
              >
                <div className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">{category.count}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
