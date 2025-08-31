"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Star, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"

interface FanCardBookingProps {
  celebrityName: string
  celebrityImage: string
  onBookingComplete: (bookingData: any) => void
}

export function FanCardBooking({ celebrityName, celebrityImage, onBookingComplete }: FanCardBookingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fanName: "",
    email: "",
    experienceType: "",
    message: "",
    cardDesign: "modern",
    occasion: "",
  })

  const experienceTypes = [
    { value: "video-message", label: "Video Message", price: 150 },
    { value: "meet-greet", label: "Meet & Greet", price: 500 },
    { value: "photo-session", label: "Photo Session", price: 300 },
    { value: "autograph", label: "Signed Autograph", price: 100 },
  ]

  const cardDesigns = [
    { value: "classic", label: "Classic Design" },
    { value: "modern", label: "Modern Design" },
    { value: "premium", label: "Premium Design" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const bookingData = {
      ...formData,
      celebrityName,
      celebrityImage,
      bookingDate: new Date().toISOString(),
      id: Date.now(),
    }

    onBookingComplete(bookingData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFormData({
        fanName: "",
        email: "",
        experienceType: "",
        message: "",
        cardDesign: "modern",
        occasion: "",
      })
    }, 2000)
  }

  const selectedExperience = experienceTypes.find((exp) => exp.value === formData.experienceType)

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Create Fan Card
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fan Card Booked!</h3>
            <p className="text-muted-foreground">
              Your personalized fan card experience has been requested. You'll receive your digital card after the
              experience!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
          <Heart className="w-4 h-4 mr-2" />
          Create Fan Card
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create Your Fan Card Experience</DialogTitle>
          <DialogDescription>
            Book an experience with {celebrityName} and get a personalized digital fan card
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Celebrity Info */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={celebrityImage || "/placeholder.svg"} alt={celebrityName} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">{celebrityName}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fanName">Your Name *</Label>
              <Input
                id="fanName"
                placeholder="Enter your name"
                required
                value={formData.fanName}
                onChange={(e) => setFormData({ ...formData, fanName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceType">Experience Type *</Label>
              <Select
                value={formData.experienceType}
                onValueChange={(value) => setFormData({ ...formData, experienceType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceTypes.map((exp) => (
                    <SelectItem key={exp.value} value={exp.value}>
                      {exp.label} - ${exp.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardDesign">Card Design</Label>
              <Select
                value={formData.cardDesign}
                onValueChange={(value) => setFormData({ ...formData, cardDesign: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cardDesigns.map((design) => (
                    <SelectItem key={design.value} value={design.value}>
                      {design.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occasion">Occasion (Optional)</Label>
              <Select
                value={formData.occasion}
                onValueChange={(value) => setFormData({ ...formData, occasion: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                  <SelectItem value="fan-appreciation">Fan Appreciation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Special Message</Label>
              <Textarea
                id="message"
                placeholder="Any special requests or messages for your fan card..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {selectedExperience && (
              <div className="bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Cost:</span>
                  <span className="text-xl font-bold text-cyan-600">${selectedExperience.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Includes experience + personalized digital fan card
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              disabled={!formData.fanName || !formData.email || !formData.experienceType}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Fan Card Experience
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
