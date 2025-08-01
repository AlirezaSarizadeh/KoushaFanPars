import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  const isAuthPage = pathname === '/auth/login' || pathname === '/auth/signup'
  const isProtectedPage = pathname.startsWith('/account') || pathname.startsWith('/cart')

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/account', request.url))
  }

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/auth/login',
    '/auth/signup',
    '/account/:path*',
    '/cart/:path*',
  ],
}
