<script lang="ts">
	import { theme } from '@/stores/theme';
	import { createEventDispatcher, onMount } from 'svelte';
	import { clickOutside } from 'svelte-use-click-outside';

	interface Option {
		value: string;
		label: string;
	}

	const dispatch = createEventDispatcher<{ update: { value: string } }>();

	export let placeholder: string;
	export let options: Option[];

	let selected: Option | null = null;

	let dropDown: HTMLElement;
	let showDropDown = false;

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			showDropDown = false;
		}
	};

	const updateSelected = (option: Option | null) => {
		selected = option;
		showDropDown = false;
	};

	$: dispatch('update', { value: selected?.value ?? '' });
</script>

<div
	class="relative w-40 text-sm"
	use:clickOutside={() => (showDropDown = false)}
	bind:this={dropDown}
	on:keyup={handleKeyUp}
>
	<!-- Selected value or placeholder -->
	<button
		class="flex justify-between min-w-full items-center p-2 rounded bg-neutral-800 hover:bg-neutral-700 focus-within:bg-neutral-700 active:bg-neutral-600"
		on:click|preventDefault={() => (showDropDown = !showDropDown)}
		>{selected !== null ? selected.label : placeholder}
		<svg
			class={`${showDropDown ? '' : '-rotate-90'} fill-white h-3 transition-transform`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
			/></svg
		></button
	>
	<!-- Options -->
	<div
		class={`${
			showDropDown ? '' : 'hidden'
		} absolute grid gap-2 bg-neutral-800 py-2 rounded min-w-full shadow`}
	>
		<button
			on:click|preventDefault={() => updateSelected(null)}
			class={`text-left p-2 hover:bg-neutral-700 focus-within:bg-neutral-700 active:bg-neutral-600`}
			>No filter</button
		>
		{#each options as option}
			<button
				on:click|preventDefault={() => updateSelected(option)}
				class={`text-left p-2 hover:bg-neutral-700 focus-within:bg-neutral-700 active:bg-neutral-600`}
				>{option.label}</button
			>
		{/each}
	</div>
</div>
