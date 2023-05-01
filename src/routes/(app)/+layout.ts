import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const fetchVersion = async () => {
    const res = await fetch('/api/versions')
    const version = await res.json()
    return version
  }

  return {
    version: fetchVersion()
  }
};