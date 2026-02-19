import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Server client for Server Components, Server Actions, and Route Handlers
 * 
 * Use this client in code that runs exclusively on the server.
 * It properly handles cookie reading/writing in the Next.js App Router.
 * 
 * Environment variables required:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Called from Server Component - this can happen when
            // cookies are set during render but the component
            // was not wrapped in a Suspense boundary
          }
        },
      },
    }
  )
}
