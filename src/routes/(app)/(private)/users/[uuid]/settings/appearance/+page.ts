import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  
  const fetchThemes = async () => {
    const res = await fetch('/api/themes')
    const themes = await res.json()
    return themes;
  }

  return {
    themes: fetchThemes()
  }

};