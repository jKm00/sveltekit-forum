<script lang="ts">
	import { theme } from '@/stores/theme';

	type User = {
		uuid: string;
		username: string;
		avatar: string;
	};

	export let data;

	let user: undefined | User = {
		uuid: 'a3094d9e-e79a-11ed-a05b-0242ac120003',
		username: 'Joakim',
		avatar: 'https://picsum.photos/30/30'
	};
</script>

<nav class={`mb-10 ${$theme.bg}`}>
	<div class="m-auto max-w-5xl flex justify-between items-center py-5">
		<div class="flex gap-4">
			<h1 class="font-bold"><a href="/">SvelteKit Forum</a></h1>
			<ul class="flex gap-4">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/support">Support</a></li>
			</ul>
		</div>
		{#if user !== undefined}
			<ul class="flex items-center gap-4">
				<li>
					<a href={`/users/${user.uuid}`} class="flex gap-2 items-center">
						<img class="rounded-lg" src={user.avatar} alt="avatar" />
						{user.username}
					</a>
				</li>
				<li><a href={`/users/${user.uuid}/settings`}>Settings</a></li>
			</ul>
		{:else}
			<ul class="flex gap-4">
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
			</ul>
		{/if}
	</div>
</nav>

<div class="max-w-5xl m-auto w-full flex-grow">
	<slot />
</div>

<footer class="py-4 text-center text-neutral-600 text-sm">
	<p>Joakim Edvardsen &copy 2023. All rights reserved</p>
	<p>Version {data.version}</p>
</footer>
