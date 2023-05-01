export const GET = async () => {

  const AVAILABLE_THEMES = [
		{
			id: 0,
			name: 'Red',
			bg: 'bg-red-400',
			bgHover: 'bg-red-500',
			bgActive: 'bg-red-600',
			text: 'text-red-400'
		},
		{
			id: 1,
			name: 'Orange',
			bg: 'bg-orange-400',
			bgHover: 'bg-orange-500',
			bgActive: 'bg-orange-600',
			text: 'text-orange-400'
		},
		{
			id: 2,
			name: 'Amber',
			bg: 'bg-amber-400',
			bgHover: 'bg-amber-500',
			bgActive: 'bg-amber-600',
			text: 'text-amber-400'
		},
		{
			id: 3,
			name: 'Yellow',
			bg: 'bg-yellow-400',
			bgHover: 'bg-yellow-500',
			bgActive: 'bg-yellow-600',
			text: 'text-yellow-400'
		},
		{
			id: 4,
			name: 'Lime',
			bg: 'bg-lime-400',
			bgHover: 'bg-lime-500',
			bgActive: 'bg-lime-600',
			text: 'text-lime-400'
		},
		{
			id: 5,
			name: 'Green',
			bg: 'bg-green-400',
			bgHover: 'bg-green-500',
			bgActive: 'bg-green-600',
			text: 'text-green-400'
		},
		{
			id: 6,
			name: 'Emerald',
			bg: 'bg-emerald-400',
			bgHover: 'bg-emerald-500',
			bgActive: 'bg-emerald-600',
			text: 'text-emerald-400'
		},
		{
			id: 7,
			name: 'Teal',
			bg: 'bg-teal-400',
			bgHover: 'bg-teal-500',
			bgActive: 'bg-teal-600',
			text: 'text-teal-400'
		},
		{
			id: 8,
			name: 'Cyan',
			bg: 'bg-cyan-400',
			bgHover: 'bg-cyan-500',
			bgActive: 'bg-cyan-600',
			text: 'text-cyan-400'
		},
		{
			id: 9,
			name: 'Sky',
			bg: 'bg-sky-400',
			bgHover: 'bg-sky-500',
			bgActive: 'bg-sky-600',
			text: 'text-sky-400'
		},
		{
			id: 10,
			name: 'Blue',
			bg: 'bg-blue-400',
			bgHover: 'bg-blue-500',
			bgActive: 'bg-blue-600',
			text: 'text-blue-400'
		},
		{
			id: 11,
			name: 'Indigo',
			bg: 'bg-indigo-400',
			bgHover: 'bg-indigo-500',
			bgActive: 'bg-indigo-600',
			text: 'text-indigo-400'
		},
		{
			id: 12,
			name: 'Violet',
			bg: 'bg-violet-400',
			bgHover: 'bg-violet-500',
			bgActive: 'bg-violet-600',
			text: 'text-violet-400'
		},
		{
			id: 13,
			name: 'Purple',
			bg: 'bg-purple-400',
			bgHover: 'bg-purple-500',
			bgActive: 'bg-purple-600',
			text: 'text-purple-400'
		},
		{
			id: 14,
			name: 'Fuchsia',
			bg: 'bg-fuchsia-400',
			bgHover: 'bg-fuchsia-500',
			bgActive: 'bg-fuchsia-600',
			text: 'text-fuchsia-400'
		},
		{
			id: 15,
			name: 'Pink',
			bg: 'bg-pink-400',
			bgHover: 'bg-pink-500',
			bgActive: 'bg-pink-600',
			text: 'text-pink-400'
		},
		{
			id: 16,
			name: 'Rose',
			bg: 'bg-rose-400',
			bgHover: 'bg-rose-500',
			bgActive: 'bg-rose-600',
			text: 'text-rose-400'
		}
	];

  return new Response(JSON.stringify(AVAILABLE_THEMES), { status: 200 })
}