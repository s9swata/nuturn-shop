import { createClient } from '@supabase/supabase-js'

/**
 * Admin client for privileged operations
 * 
 * Use this client for server-side operations that need to bypass
 * Row-Level Security (RLS), such as:
 * - Bulk operations
 * - Admin dashboard functionality
 * - System-level operations
 * 
 * WARNING: This client bypasses RLS entirely. Use with caution!
 * Never expose the service role key in client-side code.
 * 
 * Environment variables required:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY (must be set in server environment)
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
