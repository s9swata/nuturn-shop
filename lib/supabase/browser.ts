import { createBrowserClient } from '@supabase/ssr'

/**
 * Browser client for Client Components
 * 
 * Use this client in browser-based React components (Client Components)
 * that need to interact with Supabase (e.g., login forms, auth state checks).
 * 
 * Environment variables required:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
