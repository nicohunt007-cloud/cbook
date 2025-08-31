"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Bitcoin, Wallet } from "lucide-react"

interface PaymentMethodsProps {
  onMethodChange?: (method: string) => void
}

export function PaymentMethods({ onMethodChange }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState("card")

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method)
    onMethodChange?.(method)
  }

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <Wallet className="w-5 h-5" />,
      description: "Pay with your PayPal account",
    },
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Touch ID or Face ID",
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: <Bitcoin className="w-5 h-5" />,
      description: "Bitcoin, Ethereum, USDC",
      badge: "New",
    },
  ]

  return (
    <Card className="border border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? "border-cyan-400 bg-cyan-50 dark:bg-cyan-950/20"
                  : "border-border hover:border-cyan-300"
              }`}
              onClick={() => handleMethodChange(method.id)}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment-method"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={() => handleMethodChange(method.id)}
                  className="text-cyan-400"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {method.icon}
                    <span className="font-medium">{method.name}</span>
                    {method.badge && <Badge className="bg-cyan-400 text-black text-xs">{method.badge}</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Details */}
        {selectedMethod === "card" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date *</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV *</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card *</Label>
              <Input id="cardName" placeholder="John Doe" />
            </div>
          </div>
        )}

        {selectedMethod === "crypto" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cryptoType">Cryptocurrency *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select cryptocurrency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                  <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
                  <SelectItem value="usdt">Tether (USDT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> After clicking "Complete Booking", you'll be redirected to our secure crypto
                payment processor to complete the transaction. The payment will be processed at the current exchange
                rate.
              </p>
            </div>
          </div>
        )}

        {selectedMethod === "paypal" && (
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              You'll be redirected to PayPal to complete your payment securely.
            </p>
          </div>
        )}

        {selectedMethod === "apple-pay" && (
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              Use Touch ID or Face ID to complete your payment with Apple Pay.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
