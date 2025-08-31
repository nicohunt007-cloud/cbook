import { Star } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Star className="h-6 w-6 text-cyan-400 fill-cyan-400 glow-cyan" />
                <div className="absolute inset-0 animate-pulse">
                  <Star className="h-6 w-6 text-cyan-300 fill-cyan-300" />
                </div>
              </div>
              <span className="text-xl font-bold text-cyan-400 text-glow">ÉtoileLien</span>
            </div>
            <p className="text-muted-foreground">
              Connecting fans with their favorite celebrities through exclusive experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/celebrities" className="hover:text-cyan-400 transition-colors">
                  Browse Celebrities
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-cyan-400 transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-cyan-400 transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-cyan-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ÉtoileLien. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
