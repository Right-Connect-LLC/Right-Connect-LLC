import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OnboardingLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Bar Skeleton */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-4 w-20 bg-slate-800" />
              <Skeleton className="h-4 w-24 bg-slate-800" />
            </div>
            <Skeleton className="w-full h-2 bg-slate-800 rounded-full" />
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <Skeleton className="h-6 w-32 bg-slate-700 mb-2" />
              <Skeleton className="h-8 w-64 bg-slate-700 mb-2" />
              <Skeleton className="h-6 w-full bg-slate-700" />
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-10 w-full bg-slate-700" />
                <Skeleton className="h-10 w-full bg-slate-700" />
                <Skeleton className="h-10 w-full bg-slate-700" />
              </div>

              <div className="flex justify-between pt-6 border-t border-slate-700">
                <Skeleton className="h-10 w-24 bg-slate-700" />
                <Skeleton className="h-10 w-32 bg-slate-700" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

