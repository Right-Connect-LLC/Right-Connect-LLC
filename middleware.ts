import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup')
  
  // Optionally protect certain routes
  // For now, we allow all routes to be accessible
  // You can uncomment and modify this to protect specific routes
  
  /*
  const protectedRoutes = ['/dashboard', '/profile']
  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))
  
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
  
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
  */
  
  return NextResponse.next()
})

// Specify which routes should be checked by the middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

