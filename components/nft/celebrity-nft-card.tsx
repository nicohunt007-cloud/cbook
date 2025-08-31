"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Zap, Eye, Heart, Lock, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import type { CelebrityNFT } from "@/lib/data/celebrity-nfts"

interface CelebrityNFTCardProps {
  nft: CelebrityNFT
  canPurchase?: boolean
}

export function CelebrityNFTCard({ nft, canPurchase = true }: CelebrityNFTCardProps) {
  const [isPurchased, setIsPurchased] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handlePurchase = () => {
    setIsPurchased(true)
    setTimeout(() => {
      setIsDialogOpen(false)
      setIsPurchased(false)
    }, 2000)
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-500"
      case "Rare":
        return "bg-blue-500"
      case "Epic":
        return "bg-purple-500"
      case "Legendary":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "shadow-gray-500/20"
      case "Rare":
        return "shadow-blue-500/20"
      case "Epic":
        return "shadow-purple-500/20"
      case "Legendary":
        return "shadow-yellow-500/20"
      default:
        return "shadow-gray-500/20"
    }
  }

  return (
    <Card
      className={`group hover:border-cyan-400 transition-all duration-300 border border-border overflow-hidden bg-card ${getRarityGlow(nft.rarity)} hover:shadow-lg`}
    >
      <div className="relative">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 right-3 ${getRarityColor(nft.rarity)} text-white`}>{nft.rarity}</Badge>
        {nft.membershipRequired && (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-black">
            <Lock className="w-3 h-3 mr-1" />
            {nft.membershipRequired}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{nft.name}</CardTitle>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">#{nft.edition}</div>
          </div>
        </div>
        <CardDescription className="text-sm">{nft.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span>{nft.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span>{nft.likes}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Unlockable Content:</div>
          <div className="flex flex-wrap gap-1">
            {nft.unlockableContent.slice(0, 2).map((content, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {content}
              </Badge>
            ))}
            {nft.unlockableContent.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{nft.unlockableContent.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400">{nft.price} ETH</div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={!canPurchase}
              >
                <Zap className="w-4 h-4 mr-1" />
                {canPurchase ? "Buy NFT" : "Locked"}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              {isPurchased ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">NFT Purchased!</h3>
                  <p className="text-muted-foreground">
                    Your {nft.name} NFT has been added to your collection. Check your wallet for the digital asset.
                  </p>
                </div>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{nft.name}</DialogTitle>
                    <DialogDescription>
                      {nft.rarity} NFT by {nft.celebrityName}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Image
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-sm text-muted-foreground">{nft.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Attributes</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(nft.attributes).map(([key, value]) => (
                            <div key={key} className="bg-muted p-2 rounded text-sm">
                              <div className="font-medium">{key}</div>
                              <div className="text-muted-foreground">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Unlockable Content</h4>
                        <div className="space-y-1">
                          {nft.unlockableContent.map((content, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <Star className="w-3 h-3 text-yellow-400" />
                              <span>{content}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Price:</span>
                          <span className="text-xl font-bold text-cyan-600">{nft.price} ETH</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Edition #{nft.edition} • {nft.views} views • {nft.likes} likes
                        </div>
                      </div>

                      <Button
                        onClick={handlePurchase}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={!canPurchase}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Purchase NFT
                      </Button>

                      {!canPurchase && (
                        <p className="text-sm text-muted-foreground text-center">
                          This NFT requires {nft.membershipRequired} membership or higher
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
