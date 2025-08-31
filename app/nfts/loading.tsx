import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageWrapper } from "@/components/ui/page-wrapper"

export default function NFTsLoading() {
  return (
    <PageWrapper>
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-6 w-32 mx-auto mb-4" />
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto mb-8" />

          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <Skeleton className="h-8 w-12 mx-auto mb-2" />
                <Skeleton className="h-4 w-16 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Filters Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results Count Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-32" />
        </div>

        {/* NFT Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <div className="flex gap-1">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
