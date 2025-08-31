"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Search, Menu, Star, Heart, Zap, Crown, Calendar } from "lucide-react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigationItems = [
    {
      title: "Celebrities",
      href: "/celebrities",
      description: "Browse our exclusive roster of celebrities",
      icon: <Star className="w-4 h-4" />,
    },
    {
      title: "Experiences",
      href: "/experiences",
      description: "Discover unique celebrity experiences",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      title: "Fan Cards",
      href: "/fan-cards",
      description: "Personalized digital fan experiences",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      title: "NFT Collection",
      href: "/nfts",
      description: "Exclusive digital collectibles",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Membership",
      href: "/membership",
      description: "Join our exclusive membership tiers",
      icon: <Crown className="w-4 h-4" />,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold  text-white bg-clip-text text-transparent">
              EtoileLien
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Browse</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {navigationItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              {item.icon}
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search celebrities..."
                className="pl-10 bg-muted/50 border-border"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-4 h-4" />
            </Button>

            <ThemeToggle />

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm">
                  Sign In
                </Button>
              </Link>
              {/* <Link href="/signup">
                <Button size="sm" className="bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan text-sm">
                  Join Now
                </Button>
              </Link> */}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-2 mb-6">
                    {/* <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div> */}
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                      EtoileLien
                    </span>
                  </Link>

                  {/* Mobile Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search celebrities..." className="pl-10" />
                  </div>

                  {/* Mobile Navigation */}
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        {item.icon}
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Auth */}
                  <div className="pt-6 border-t border-border space-y-2">
                    <Link href="/login">
                      <Button variant="outline" className="w-full bg-transparent">
                        Sign In
                      </Button>
                    </Link>
                    {/* <Link href="/signup">
                      <Button className="w-full bg-cyan-400 text-black hover:bg-cyan-300 glow-cyan">Join Now</Button>
                    </Link> */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
