<script lang="ts">
	import { theme } from '@/stores/theme';
	import { clickOutside } from 'svelte-use-click-outside';

	export let data;

	let showUserOptions = false;

	const hideAccountOptions = () => {
		showUserOptions = false;
	};

	let dialog: HTMLDialogElement;

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.ctrlKey && event.code === 'Slash') {
			dialog.showModal();
		}
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<!-- Main navigation -->
<nav class={`mb-10`}>
	<!-- left nav -->
	<div class="m-auto max-w-4xl flex justify-between items-center py-5">
		<div class="flex gap-4">
			<h1 class="font-bold"><a href="/">SvelteKit Forum</a></h1>
			<ul class="flex gap-4">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/support">Support</a></li>
			</ul>
		</div>
		<!-- right nav -->
		<div class="flex gap-2 items-center">
			<!-- Search bar -->
			<div
				class={`flex items-center gap-2 px-4 py-1 border rounded-full focus-within:${$theme.borderColor} group`}
			>
				<svg class="h-3 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
					/></svg
				>
				<input
					class="bg-transparent text-sm w-40 focus:outline-none"
					type="text"
					placeholder="Search..."
				/>
				<p class="text-[10px] bg-neutral-700 p-1 rounded">ctrl + /</p>
			</div>
			<!-- Account icon -->
			<div class="relative" use:clickOutside={hideAccountOptions}>
				<button on:click={() => (showUserOptions = !showUserOptions)}>
					<svg
						class={`h-6 ${$theme.bg} rounded-full p-1 aspect-square cursor-pointer`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
						/></svg
					>
				</button>
				{#if showUserOptions}
					<ul
						class="grid gap-4 absolute right-0 top-full bg-neutral-800 p-4 rounded text-sm w-44 shadow-lg"
					>
						{#if data.user !== null}
							<li>
								<a
									class={`hover:underline hover:${$theme.text} focus-within:underline focus-within:${$theme.text}`}
									href={`/users/${data.user.username}`}
									on:click={() => (showUserOptions = false)}
									>{data.user.username}
								</a>
							</li>
							<li>
								<a
									class={`hover:underline hover:${$theme.text} focus-within:underline focus-within:${$theme.text}`}
									href={`/users/${data.user.username}/settings`}
									on:click={() => (showUserOptions = false)}>Settings</a
								>
							</li>
							<li>
								<form action="/logout" method="POST">
									<button
										type="submit"
										class={`hover:underline hover:${$theme.text} focus-within:underline focus-within:${$theme.text}`}
										>Logout</button
									>
								</form>
							</li>
						{:else}
							<li>
								<a
									class={`hover:underline hover:${$theme.text} focus-within:underline focus-within:${$theme.text}`}
									href="/login"
									on:click={() => (showUserOptions = false)}>Login</a
								>
							</li>
							<li>
								<a
									class={`hover:underline hover:${$theme.text} focus-within:underline focus-within:${$theme.text}`}
									href="/register"
									on:click={() => (showUserOptions = false)}>Register</a
								>
							</li>
						{/if}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</nav>

<!-- Search spotlight -->
<dialog
	class="bg-transparent backdrop:bg-neutral-900 backdrop:bg-opacity-70 p-0 -top-2/3"
	bind:this={dialog}
>
	<input
		class="bg-neutral-700 text-white p-2 w-[500px] rounded shadow focus:outline-none"
		type="text"
		placeholder="Search..."
	/>
</dialog>

<div class="max-w-4xl m-auto w-full flex-grow">
	<slot />
</div>
