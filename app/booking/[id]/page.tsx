"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Star, Shield, CheckCircle, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { PaymentMethods } from "@/components/payment/payment-methods"
import { getCelebrityById } from "@/lib/data/celebrities"
import { notFound } from "next/navigation"
import { CharityDonation } from "@/components/charity/charity-donation"
import { generateOrderId, type OrderDetails } from "@/lib/email-service"
import { getCelebrityNFTsByCelebrityId } from "@/lib/data/celebrity-nfts"
import { CelebrityNFTCard } from "@/components/nft/celebrity-nft-card"

interface BookingPageProps {
  params: {
    id: string
  }
}

export default function BookingPage({ params }: BookingPageProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [donationAmount, setDonationAmount] = useState(0)
  const [donationCharity, setDonationCharity] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    occasion: "",
    message: "",
  })

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
    },
    {
      id: "video-call",
      name: "Private Video Call",
      price: 2500,
      duration: "15 minutes",
      description: "One-on-one video call session",
    },
    {
      id: "meet-greet",
      name: "Meet & Greet",
      price: 5000,
      duration: "30 minutes",
      description: "In-person meet and greet experience",
    },
    {
      id: "autograph",
      name: "Signed Autograph",
      price: 200,
      duration: "Physical item",
      description: "Personalized signed photo or item",
    },
    {
      id: "shoutout",
      name: "Social Media Shoutout",
      price: 300,
      duration: "1 post",
      description: "Public mention on celebrity's social media",
    },
  ]

  const selectedServicesData = services.filter((s) => selectedServices.includes(s.id))
  const totalServicePrice = selectedServicesData.reduce((sum, service) => sum + service.price, 0)
  const platformFee = Math.round(totalServicePrice * 0.05)
  const processingFee = 15
  const total = totalServicePrice + platformFee + processingFee + donationAmount

  // Fix for infinite loop: Use useCallback and avoid direct state updates in render
  const handleServiceToggle = useCallback((serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }, [])

  const handleFormChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      selectedServices.length === 0 ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.date
    ) {
      alert("Please fill in all required fields and select at least one service")
      return
    }

    setIsSubmitting(true)

    const orderId = generateOrderId()
    const orderDetails: OrderDetails = {
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      celebrityName: celebrity.name,
      celebrityId: celebrity.id,
      services: selectedServicesData.map((service) => ({
        name: service.name,
        price: service.price,
        duration: service.duration,
      })),
      totalServicePrice: totalServicePrice,
      preferredDate: formData.date,
      preferredTime: formData.time,
      occasion: formData.occasion,
      specialMessage: formData.message,
      paymentMethod: paymentMethod,
      platformFee: platformFee,
      processingFee: processingFee,
      totalAmount: total,
      charityDonation:
        donationAmount > 0
          ? {
              amount: donationAmount,
              charityName: donationCharity,
            }
          : undefined,
      orderDate: new Date().toISOString(),
      orderId: orderId,
    }

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        alert(`Failed to submit order: ${errorData.error}`)
      }
    } catch (error) {
      console.error("Order submission error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <PageWrapper>
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Booking Request Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your booking request. We've sent the details to our agent at Nicolas Hunt. You'll
              receive a confirmation email within 24-48 hours to finalize your experience with {celebrity.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/celebrities">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  Browse More Celebrities
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-orange-500 text-white hover:bg-orange-600 w-full sm:w-auto">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
              {" > "}
              <Link href="/celebrities" className="hover:text-orange-500">
                Celebrities
              </Link>
              {" > "}
              <Link href={`/celebrities/${celebrity.id}`} className="hover:text-orange-500">
                {celebrity.name}
              </Link>
              {" > "}
              <span className="text-orange-500">Book Experience</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Book Your Experience</CardTitle>
                  <CardDescription>Fill out the details for your celebrity booking</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Select Services * (Choose one or more)</Label>
                      <div className="grid gap-4">
                        {services.map((service) => {
                          const isSelected = selectedServices.includes(service.id)
                          return (
                            <div
                              key={service.id}
                              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                                isSelected
                                  ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
                                  : "border-border hover:border-orange-300"
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => handleServiceToggle(service.id)}
                                      className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                    />
                                    <h3 className="font-semibold">{service.name}</h3>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                                  <Badge variant="secondary" className="text-xs">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {service.duration}
                                  </Badge>
                                </div>
                                <div className="text-right">
                                  <span className="text-xl md:text-2xl font-bold text-orange-500">
                                    ${service.price.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Personal Information</Label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleFormChange("firstName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleFormChange("lastName", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => handleFormChange("email", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleFormChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Booking Details */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Booking Details</Label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => handleFormChange("date", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time</Label>
                          <Select value={formData.time} onValueChange={(value) => handleFormChange("time", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="occasion">Occasion (Optional)</Label>
                        <Select
                          value={formData.occasion}
                          onValueChange={(value) => handleFormChange("occasion", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select occasion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="graduation">Graduation</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Special Message/Instructions</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your request, any special instructions, or what you'd like the celebrity to mention..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleFormChange("message", e.target.value)}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Payment Methods */}
                    <PaymentMethods onMethodChange={setPaymentMethod} />

                    <Separator />

                    {/* Charity Donation */}
                    <CharityDonation
                      onDonationComplete={(amount, charity) => {
                        setDonationAmount(amount)
                        setDonationCharity(charity)
                      }}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 text-white hover:bg-orange-600 text-lg py-6 font-medium"
                      disabled={selectedServices.length === 0 || isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Complete Booking"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="space-y-6">
              {/* Celebrity Info */}
              <Card className="border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={celebrity.image || "/placeholder.svg"}
                        alt={celebrity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{celebrity.name}</h3>
                      <p className="text-orange-500 font-medium">{celebrity.category}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{celebrity.rating}</span>
                        <span className="text-xs text-muted-foreground">({celebrity.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NFT Collection */}
              {(() => {
                const celebrityNFTs = getCelebrityNFTsByCelebrityId(celebrity.id)
                return celebrityNFTs.length > 0 ? (
                  <Card className="border">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-orange-500" />
                        Exclusive NFTs
                      </CardTitle>
                      <CardDescription>Own unique digital collectibles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {celebrityNFTs.slice(0, 2).map((nft) => (
                          <CelebrityNFTCard
                            key={nft.id}
                            nft={nft}
                            canPurchase={!nft.membershipRequired || nft.membershipRequired === "Fan"}
                          />
                        ))}
                      </div>
                      {celebrityNFTs.length > 2 && (
                        <div className="mt-4 text-center">
                          <Link href="/nfts">
                            <Button variant="outline" size="sm">
                              View All NFTs
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ) : null
              })()}

              {/* Order Summary */}
              <Card className="border border-border bg-card">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedServicesData.length > 0 ? (
                    <>
                      {selectedServicesData.map((service) => (
                        <div key={service.id} className="flex justify-between">
                          <span className="text-sm">{service.name}</span>
                          <span className="text-sm">${service.price.toLocaleString()}</span>
                        </div>
                      ))}
                      <Separator />
                      <div className="flex justify-between">
                        <span>Services Total</span>
                        <span>${totalServicePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Platform Fee (5%)</span>
                        <span>${platformFee}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Processing Fee</span>
                        <span>${processingFee}</span>
                      </div>
                      {donationAmount > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Charity Donation</span>
                          <span>${donationAmount}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-orange-500">${total.toLocaleString()}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">Please select services to see pricing</p>
                  )}
                </CardContent>
              </Card>

              {/* Security Notice */}
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-400">Secure Payment</span>
                </div>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By completing this booking, you agree to our{" "}
                <Link href="/terms" className="text-orange-500 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-orange-500 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
