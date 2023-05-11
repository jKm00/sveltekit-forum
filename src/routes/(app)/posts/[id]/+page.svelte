<script lang="ts">
	import { enhance } from '$app/forms';
	import { MONTH_NAMES } from '@/lib/util/months.js';
	import { theme } from '@/stores/theme.js';
	import type { Likes } from '@prisma/client';

	export let data;

	$: post = data.post;
	$: date = new Date(data.post.createdAt);
	$: dateString = `${date.getDate()}. ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;

	$: hasLikedPost = data.post.likes.map((l) => l.userId).includes(data.user?.userId);
</script>

<div class="grid gap-4">
	<article class="grid gap-8 bg-neutral-800 p-4 rounded shadow">
		<header class="grid gap-2">
			<h1 class="text-xl font-bold">{post.title}</h1>
			<p class="text-sm text-neutral-500">
				<span>{dateString}</span> -
				<a href={`/users/tmp-author-id`} class="underline hover:text-white focus-within:text-white"
					>{post.user.username}</a
				>
			</p>
		</header>
		<p>{post.content}</p>
	</article>
	<section class="flex items-center justify-between">
		<form action="?/likePost&id={post.id}" method="POST" use:enhance>
			<button
				class="flex items-center gap-2 {hasLikedPost ? 'fill-red-400' : 'fill-white'}"
				type="submit"
				><svg class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
					/></svg
				> Like</button
			>
		</form>
		{#if data.user?.userId === post.user.id}
			<form action={`?/deletePost&id=${post.id}`} method="POST">
				<button
					class={`${$theme.bg} hover:${$theme.bgHover} focus-within:${$theme.bgHover} active:${$theme.bgActive} rounded p-2`}
					type="submit">Delete post</button
				>
			</form>
		{/if}
	</section>
	<form class="grid gap-2" action="?/createComment&id={post.id}" method="POST">
		<textarea
			class="p-4 rounded bg-neutral-800 shadow"
			name="content"
			cols="30"
			rows="2"
			placeholder="What do you want to discuss?"
		/>
		<button
			class="p-2 justify-self-start rounded shadow {$theme.bg} hover:{$theme.bgHover} focus-within:{$theme.bgHover} active:{$theme.bgActive}"
			>Post comment</button
		>
	</form>
</div>
