import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute =  createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transcation(.*)",
]);
  
export default clerkMiddleware(async(auth, req) => {
  const { userId } = auth;

  if (!!userId && isProtectedRoute(req)) {
      const {redirectedToSignin} = await auth();
      return redirectedToSignin();
  }

  return null;
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};