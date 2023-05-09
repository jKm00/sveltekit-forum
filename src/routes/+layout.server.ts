import { auth } from '@/lib/server/lucia';
import { fail } from '@sveltejs/kit';

export const load = async ({ fetch, locals }) => {
  const fetchVersion = async () => {
    const res = await fetch('/api/versions')
    const version = await res.json()
    return version
  }

  const { user, session } = await locals.auth.validateUser();
  
  return { 
    user,
    version: fetchVersion()
  }
};