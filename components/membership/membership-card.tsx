import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export interface MembershipTier {
  name: string
  price: string
  period: string
  features: string[]
  popular: boolean
}

interface MembershipCardProps {
  tier: MembershipTier
}

export function MembershipCard({ tier }: MembershipCardProps) {
  return (
    <Card className={`relative border border-border bg-card ${tier.popular ? "border-cyan-400 glow-cyan" : ""}`}>
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
          <span className="text-muted-foreground">{tier.period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-8">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${
            tier.popular
              ? "bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan"
              : "bg-muted text-foreground hover:bg-accent border border-border"
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
