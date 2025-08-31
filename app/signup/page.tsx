"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Join ETOILELIEN</CardTitle>
            <CardDescription>Premium membership required for account creation</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-semibold text-orange-800 mb-2">Exclusive Access</h3>
            <p className="text-sm text-orange-700 mb-4">
              Account creation is available only to premium members after completing a celebrity booking experience.
            </p>
            <div className="space-y-2 text-xs text-orange-600">
              <p>✓ Book your first celebrity experience</p>
              <p>✓ Complete payment process</p>
              <p>✓ Receive login credentials via email</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/celebrities">
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Browse Celebrities</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="w-full bg-transparent">
                Already a Member? Sign In
              </Button>
            </Link>
          </div>

          <div className="text-center text-sm">
            <Link href="/" className="text-orange-500 hover:underline font-medium">
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
