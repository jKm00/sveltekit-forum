<script lang="ts">
	import { theme, type Theme } from '@/stores/theme';

	export let availableThemes: Theme[];

	const updateTheme = (id: number) => {
		const newTheme = availableThemes.find((t) => t.id === id);
		if (newTheme === undefined) return;

		theme.set(newTheme);
	};
</script>

<section class="grid gap-4">
	<h2 class="text-2xl font-bold text-neutral-400">Select theme</h2>
	<div class="flex flex-wrap gap-x-4 gap-y-8">
		{#each availableThemes as _theme}
			<div class="grid gap-1 text-center">
				<button
					class={`${_theme.bg} ${
						$theme.id === _theme.id ? 'outline outline-4' : ''
					} py-6 rounded w-40`}
					on:click={() => updateTheme(_theme.id)}
				/>
				<p class="text-sm">
					{_theme.name}
				</p>
			</div>
		{/each}
	</div>
</section>
