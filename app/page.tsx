import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, Shield, Sparkles, Play, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { CelebrityCard } from "@/components/celebrities/celebrity-card"
import { MembershipCard } from "@/components/membership/membership-card"
import { getFeaturedCelebrities } from "@/lib/data/celebrities"
import { membershipTiers } from "@/lib/data/membership"
import { CelebrityNFTCard } from "@/components/nft/celebrity-nft-card"
import { celebrityNFTs } from "@/lib/data/celebrity-nfts"

export default function HomePage() {
  const featuredCelebrities = getFeaturedCelebrities()

  return (
    <PageWrapper>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1700529043649-a04da2914062?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Celebrity event background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-cyan-400/20 text-cyan-400 border-cyan-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Exclusive Celebrity Access
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Connect with Your <span className="text-cyan-400 text-glow">Favorite Stars</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book exclusive experiences, personal messages, and meet & greets with A-list celebrities. Join our premium
              membership for VIP access to the stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan text-lg px-8 py-4 w-full sm:w-auto"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/celebrities">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Browse Celebrities
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-white/70">Celebrities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">50K+</div>
                <div className="text-sm text-white/70">Happy Fans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">4.9</div>
                <div className="text-sm text-white/70">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Celebrities */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-cyan-400/20">Featured Stars</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Meet Our Top Celebrities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Book exclusive experiences with top-tier talent from around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredCelebrities.map((celebrity) => (
              <CelebrityCard key={celebrity.id} celebrity={celebrity} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/celebrities">
              <Button variant="outline" size="lg" className="px-8 border-border bg-transparent group">
                View All Celebrities
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Showcase */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop"
            alt="VIP Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-400/20 text-cyan-400 border-cyan-400/30 backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2" />
                Premium Experiences
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Unforgettable Celebrity Encounters</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                From personal video messages to exclusive meet & greets, create memories that last a lifetime with your
                favorite celebrities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Personal video messages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>One-on-one video calls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Exclusive meet & greets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Private performances</span>
                </div>
              </div>
              <Link href="/experiences">
                <Button className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan">
                  Explore Experiences
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop"
                  alt="Video call experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-400/10 text-cyan-400 border-cyan-400/20">Membership Plans</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Choose Your Access Level
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unlock exclusive benefits with our premium memberships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <MembershipCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* NFT Showcase */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-400/10 text-purple-400 border-purple-400/20">
              <Zap className="w-4 h-4 mr-2" />
              Digital Collectibles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Exclusive Celebrity <span className="text-purple-400">NFTs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Own unique digital collectibles with exclusive unlockable content and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {celebrityNFTs.slice(0, 3).map((nft) => (
              <CelebrityNFTCard
                key={nft.id}
                nft={nft}
                canPurchase={!nft.membershipRequired || nft.membershipRequired === "Fan"}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/nfts">
              <Button variant="outline" size="lg" className="px-8 border-border bg-transparent group">
                Explore All NFTs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Why Choose ÉtoileLien?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The ultimate platform for celebrity fan experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Verified Celebrities</h3>
              <p className="text-muted-foreground">
                All celebrities are verified and authenticated for genuine experiences
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Secure Booking</h3>
              <p className="text-muted-foreground">Safe and secure payment processing with full booking protection</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Exclusive Access</h3>
              <p className="text-muted-foreground">Members-only events and experiences not available anywhere else</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 bg-cyan-400/10 border-y border-cyan-400/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Ready to Meet Your Heroes?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fans who have already connected with their favorite celebrities
          </p>
          <Link href="/membership">
            <Button size="lg" className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan text-lg px-8 py-4">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Membership Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
