import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Skeleton className="h-6 w-24 bg-slate-700 mx-auto mb-4" />
              <Skeleton className="h-8 w-48 bg-slate-700 mx-auto mb-2" />
              <Skeleton className="h-6 w-64 bg-slate-700 mx-auto" />
            </CardHeader>

            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full bg-slate-700" />
              <Skeleton className="h-10 w-full bg-slate-700" />
              <Skeleton className="h-10 w-full bg-slate-700" />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

