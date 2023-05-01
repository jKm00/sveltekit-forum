<script lang="ts">
	type User = {
		uuid: string;
		username: string;
		avatar: string;
	};

	let user: undefined | User = {
		uuid: 'a3094d9e-e79a-11ed-a05b-0242ac120003',
		username: 'Joakim',
		avatar: 'https://picsum.photos/20/20',
	};
</script>

<nav class="mb-10">
	<div class="m-auto max-w-7xl flex justify-between border-b border-neutral-500 py-5">
		<div class="flex gap-4">
			<h1 class="font-bold"><a href="/">SvelteKit Forum</a></h1>
			<ul class="flex gap-4">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/support">Support</a></li>
			</ul>
		</div>
		{#if user !== undefined}
			<ul class="flex gap-4">
				<li>
					<a href={`/users/${user.uuid}`} class="flex gap-2 items-center">
						<img class="rounded-full" src={user.avatar} alt="avatar" />
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

<div class="max-w-7xl m-auto">
	<slot />
</div>
