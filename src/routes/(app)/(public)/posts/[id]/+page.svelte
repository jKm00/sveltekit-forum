<script lang="ts">
	import { theme } from '@/stores/theme.js';
	import type { Post } from '@prisma/client';

	export let data;

	const MONTH_NAMES = [
		'Jan',
		'Feb',
		'Mars',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	$: post = data.post as Post;
	$: date = new Date(data.post.createdAt);
	$: dateString = `${date.getDate()}. ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
</script>

<div class="grid gap-4">
	<article class="grid gap-8 bg-neutral-800 p-4 rounded shadow">
		<header class="grid gap-2">
			<h1 class="text-xl font-bold">{post.title}</h1>
			<p class="text-sm text-neutral-500">
				<span>{dateString}</span> -
				<a href={`/users/tmp-author-id`} class="underline hover:text-white focus-within:text-white"
					>tmp author</a
				>
			</p>
		</header>
		<p>{post.content}</p>
	</article>
	<form action={`?/deletePost&id=${post.id}`} method="POST">
		<button
			class={`${$theme.bg} hover:${$theme.bgHover} focus-within:${$theme.bgHover} active:${$theme.bgActive} rounded p-2`}
			type="submit">Delete post</button
		>
	</form>
</div>
