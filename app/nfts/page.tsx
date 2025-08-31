"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Zap, TrendingUp, Crown, Star } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { CelebrityNFTCard } from "@/components/nft/celebrity-nft-card"
import { celebrityNFTs } from "@/lib/data/celebrity-nfts"

export default function NFTsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rarityFilter, setRarityFilter] = useState("all")
  const [membershipFilter, setMembershipFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const filteredNFTs = celebrityNFTs
    .filter((nft) => {
      const matchesSearch =
        nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nft.celebrityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nft.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRarity = rarityFilter === "all" || nft.rarity === rarityFilter
      const matchesMembership = membershipFilter === "all" || nft.membershipRequired === membershipFilter

      return matchesSearch && matchesRarity && matchesMembership
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-high":
          return b.price - a.price
        case "price-low":
          return a.price - b.price
        case "popular":
          return b.likes - a.likes
        case "newest":
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })

  const stats = {
    total: celebrityNFTs.length,
    legendary: celebrityNFTs.filter((nft) => nft.rarity === "Legendary").length,
    totalViews: celebrityNFTs.reduce((sum, nft) => sum + nft.views, 0),
    avgPrice: (celebrityNFTs.reduce((sum, nft) => sum + nft.price, 0) / celebrityNFTs.length).toFixed(2),
  }

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl -z-10" />
          <Badge className="mb-4 bg-purple-400/10 text-purple-400 border-purple-400/20">
            <Zap className="w-4 h-4 mr-2" />
            Digital Collectibles
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Celebrity <span className="text-purple-400">NFT Collection</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Own exclusive digital collectibles from your favorite celebrities with unlockable content and special perks
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total NFTs</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">{stats.legendary}</div>
              <div className="text-sm text-muted-foreground">Legendary</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400">{(stats.totalViews / 1000).toFixed(0)}K</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">{stats.avgPrice}</div>
              <div className="text-sm text-muted-foreground">Avg Price (ETH)</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 border border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Filter className="w-5 h-5 mr-2" />
              Filter NFT Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search NFTs, celebrities..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={rarityFilter} onValueChange={setRarityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="Common">Common</SelectItem>
                  <SelectItem value="Rare">Rare</SelectItem>
                  <SelectItem value="Epic">Epic</SelectItem>
                  <SelectItem value="Legendary">Legendary</SelectItem>
                </SelectContent>
              </Select>

              <Select value={membershipFilter} onValueChange={setMembershipFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Membership" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Access</SelectItem>
                  <SelectItem value="Fan">Fan Access</SelectItem>
                  <SelectItem value="VIP">VIP Only</SelectItem>
                  <SelectItem value="Elite">Elite Only</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredNFTs.length} of {celebrityNFTs.length} NFTs
          </p>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Trending collectibles</span>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredNFTs.map((nft) => (
            <CelebrityNFTCard
              key={nft.id}
              nft={nft}
              canPurchase={!nft.membershipRequired || nft.membershipRequired === "Fan"}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredNFTs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No NFTs found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setRarityFilter("all")
                setMembershipFilter("all")
                setSortBy("newest")
              }}
              className="bg-purple-400 text-black hover:bg-purple-300"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* How NFTs Work */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How Celebrity NFTs Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Own exclusive digital collectibles with real utility and unlockable content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400/10 border border-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Purchase NFT</h3>
              <p className="text-muted-foreground">
                Buy exclusive digital collectibles from your favorite celebrities using cryptocurrency
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unlock Content</h3>
              <p className="text-muted-foreground">
                Access exclusive content, behind-the-scenes footage, and special perks only available to NFT holders
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Benefits</h3>
              <p className="text-muted-foreground">
                Get VIP access to events, exclusive merchandise, and direct interaction opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
