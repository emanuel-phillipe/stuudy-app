import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const user_token = request.cookies.get('user_token')?.value
 
  if (user_token && request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/', request.url))
  }
 
  if (!user_token && !request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/auth', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}