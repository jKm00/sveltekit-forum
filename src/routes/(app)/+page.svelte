<script lang="ts">
	import PostCard from '@/lib/components/containers/PostCard.svelte';
	import PostSocial from '@/lib/components/design/PostSocial.svelte';
	import Dropdown from '@/lib/components/inputs/Dropdown.svelte';
	import { theme } from '@/stores/theme';
	import type { Post } from '@prisma/client';

	export let data;

	$: ({ posts } = data);
</script>

<header class={`flex justify-between items-center mb-10`}>
	<!-- TODO: hide until feature is working -->
	{#if false}
		<!-- <Dropdown
			placeholder="Order by"
			options={filterOptions}
			on:update={(event) => sortPosts(event)}
		/> -->
	{/if}
	<a href="/posts" class={`${$theme.bg} rounded p-2 text-sm`}>New Thread</a>
</header>

<main class="grid gap-4">
	{#each posts as post}
		<PostCard user={data.user} {post} author={post.user} likes={post.likes} />
	{/each}
</main>
