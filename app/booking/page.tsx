import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Star, Shield, CreditCard, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"

export default function BookingPage() {
  const celebrity = {
    name: "Emma Stone",
    category: "Hollywood Actress",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 127,
    tier: "Premium",
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StarConnect
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/celebrities" className="text-gray-700 hover:text-purple-600 transition-colors">
                Celebrities
              </Link>
              <Link href="/experiences" className="text-gray-700 hover:text-purple-600 transition-colors">
                Experiences
              </Link>
              <Link href="/membership" className="text-gray-700 hover:text-purple-600 transition-colors">
                Membership
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600">
                Home
              </Link>
              {" > "}
              <Link href="/celebrities" className="hover:text-purple-600">
                Celebrities
              </Link>
              {" > "}
              <span className="text-purple-600">Book {celebrity.name}</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Experience</CardTitle>
                  <CardDescription>Fill out the details for your celebrity booking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Select Service</Label>
                    <div className="grid gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="border rounded-lg p-4 hover:border-purple-300 cursor-pointer transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <input type="radio" name="service" value={service.id} className="text-purple-600" />
                                <h3 className="font-semibold">{service.name}</h3>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <Badge variant="secondary">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {service.duration}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-purple-600">
                                ${service.price.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Personal Information</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <Separator />

                  {/* Booking Details */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Booking Details</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select>
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
                      <Select>
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
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              {/* Celebrity Info */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={celebrity.image || "/placeholder.svg"}
                      alt={celebrity.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{celebrity.name}</h3>
                      <p className="text-purple-600 font-medium">{celebrity.category}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{celebrity.rating}</span>
                        <span className="text-xs text-gray-500">({celebrity.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {/* Get Membership Button & Modal */}
                  <div className="mt-6 text-center">
                    <MembershipModal celebrityTier={celebrity.tier} celebrityName={celebrity.name} />
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Personal Video Message</span>
                    <span>$500</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Platform Fee</span>
                    <span>$25</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Processing Fee</span>
                    <span>$15</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-purple-600">$540</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Secure Payment</span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>

              {/* Book Button */}
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                Complete Booking
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By completing this booking, you agree to our{" "}
                <Link href="/terms" className="text-purple-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/refund-policy" className="text-purple-600 hover:underline">
                  Refund Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// MembershipModal component
function MembershipModal({ celebrityTier, celebrityName }: { celebrityTier: string, celebrityName: string }) {
  type MembershipOption = {
    type: string;
    price: number;
    description: string;
    benefits: string[];
  };
  type MembershipOptionsMap = {
    [key: string]: MembershipOption[];
    Premium: MembershipOption[];
    VIP: MembershipOption[];
    Elite: MembershipOption[];
  };
  const membershipOptions: MembershipOptionsMap = {
    Premium: [
      { type: "Gold", price: 250, description: "Gold Membership", benefits: ["Access to exclusive content"] },
      { type: "Platinum", price: 750, description: "Platinum Membership", benefits: ["All Gold benefits", "Priority event invitations"] },
      { type: "Exclusive", price: 1250, description: "Exclusive Membership", benefits: ["All Platinum benefits", "Special fan bonuses"] },
    ],
    VIP: [
      { type: "Gold", price: 350, description: "Gold Membership", benefits: ["Access to exclusive content"] },
      { type: "Platinum", price: 1050, description: "Platinum Membership", benefits: ["All Gold benefits", "Priority event invitations"] },
      { type: "Exclusive", price: 1850, description: "Exclusive Membership", benefits: ["All Platinum benefits", "Special fan bonuses"] },
    ],
    Elite: [
      { type: "Gold", price: 550, description: "Gold Membership", benefits: ["Access to exclusive content"] },
      { type: "Platinum", price: 1550, description: "Platinum Membership", benefits: ["All Gold benefits", "Priority event invitations"] },
      { type: "Exclusive", price: 2550, description: "Exclusive Membership", benefits: ["All Platinum benefits", "Invite celebrity to dinner/holiday", "Special fan bonuses"] },
    ],
  };
  const options: MembershipOption[] = membershipOptions[celebrityTier] || [];
  const [selectedMembership, setSelectedMembership] = useState<MembershipOption | null>(null);
  const [formData, setFormData] = useState<{ name: string; email: string; paymentMethod: string }>({ name: "", email: "", paymentMethod: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedMembership || !formData.name || !formData.email || !formData.paymentMethod) return;
    setIsSubmitting(true);
    setIsSubmitted(false);
    try {
      // Build OrderDetails payload
      const orderPayload = {
        orderId: `ORD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        orderDate: new Date().toISOString(),
        customerName: formData.name,
        customerEmail: formData.email,
        celebrityName,
        celebrityId: 0, // If you have the ID, pass it here
        services: [
          {
            name: `${selectedMembership.type} Membership`,
            price: selectedMembership.price,
            duration: "1 Year",
          },
        ],
        totalServicePrice: selectedMembership.price,
        preferredDate: new Date().toISOString(),
        paymentMethod: formData.paymentMethod,
        platformFee: Math.round(selectedMembership.price * 0.05),
        processingFee: 10,
        totalAmount: selectedMembership.price + Math.round(selectedMembership.price * 0.05) + 10,
      };
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const error = await res.json();
        alert(error.error || "Failed to submit membership request.");
      }
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
    setIsSubmitting(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 w-full">Get Membership</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get a Fan Membership Card for {celebrityName}</DialogTitle>
          <DialogDescription>
            Select a membership type and fill in your details below.
          </DialogDescription>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-lg font-bold mb-2">Membership Request Submitted!</h3>
            <p className="text-muted-foreground mb-4">Thank you. We'll contact you soon to finalize your membership.</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="flex flex-col gap-2">
                {options.map((option: MembershipOption) => (
                  <Button
                    key={option.type}
                    variant={selectedMembership?.type === option.type ? "default" : "outline"}
                    className="w-full justify-between"
                    onClick={() => setSelectedMembership(option)}
                  >
                    <span>{option.type} - ${option.price}</span>
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  </Button>
                ))}
              </div>
              {selectedMembership && (
                <ul className="mt-2 text-sm text-muted-foreground list-disc ml-4">
                  {selectedMembership.benefits.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="border rounded px-3 py-2"
                required
              />
              <select
                value={formData.paymentMethod}
                onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="border rounded px-3 py-2"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="card">Card</option>
                <option value="paypal">PayPal</option>
                <option value="crypto">Crypto</option>
              </select>
              <DialogFooter>
                <Button type="submit" disabled={!selectedMembership || !formData.name || !formData.email || !formData.paymentMethod || isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Membership Request"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
