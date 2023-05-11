<script lang="ts">
	import PostCard from '@/lib/components/containers/PostCard.svelte';

	export let data;

	$: ({ author, userPosts } = data);
</script>

<h2 class="text-2xl font-bold p-6">{author?.username}'s posts:</h2>

{#if author}
	<section class="grid gap-4">
		{#each userPosts as post}
			<PostCard user={data.user} {post} {author} likes={post.likes} />
		{/each}
	</section>
{/if}
