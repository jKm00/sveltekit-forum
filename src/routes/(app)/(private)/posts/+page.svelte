<script lang="ts">
	import { theme } from '@/stores/theme';
</script>

<form action="" class="grid gap-4">
	<input class="p-4 rounded bg-neutral-800 shadow" id="title" type="text" placeholder="Title" />
	<textarea
		class="p-4 rounded bg-neutral-800 shadow"
		name="body"
		cols="30"
		rows="10"
		placeholder="What do you want to discuss?"
	/>
	<button class={`${$theme.bg} hover:${$theme.bgHover} active:${$theme.bgActive} p-3 rounded`}
		>Create post</button
	>
</form>
