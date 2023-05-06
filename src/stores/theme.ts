import { browser } from "$app/environment";
import type { Theme } from "@/models/Theme";
import { writable } from "svelte/store";

const defaultValue = {
			id: 0,
			name: 'Violet',
			bg: 'bg-violet-400',
			text: 'text-violet-400'
		}
const storedValue = browser ? window.localStorage.getItem('theme') : null
const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue

export const theme = writable<Theme>(initialValue)

theme.subscribe((value: Theme) => {
  if (browser) {
    window.localStorage.setItem('theme', JSON.stringify(value))
  }
})

export { theme as default }