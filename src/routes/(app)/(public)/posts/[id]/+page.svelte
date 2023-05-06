<script lang="ts">
	export let data;

	$: post = data.post;
</script>

<article class="grid gap-8 bg-neutral-800 p-4 rounded shadow">
	<header class="grid gap-2">
		<h1 class="text-xl font-bold">{post.title}</h1>
		<p class="text-sm text-neutral-500">{post.author}</p>
	</header>
	<p>{post.body}</p>
</article>
