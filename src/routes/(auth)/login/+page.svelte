<script lang="ts">
	import { theme } from '@/stores/theme';

	export let form;
</script>

<div class="grid gap-10">
	<h2 class={`text-3xl ${$theme.text} font-bold uppercase`}>Login</h2>
	<form action="" method="POST" class="grid gap-4 w-80 text-neutral-950">
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="username"
				name="username"
				type="text"
				placeholder="Username"
			/>
			{#if form?.errors?.username}
				<label class="text-red-400 text-start text-xs" for="username"
					>{form?.errors?.username}</label
				>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="password"
				name="password"
				type="password"
				placeholder="Password"
			/>
			{#if form?.errors?.password}
				<label class="text-red-400 text-start text-xs" for="password"
					>{form?.errors?.password}</label
				>
			{/if}
		</div>
		<button
			class={`${$theme.bg} hover:${$theme.bgHover} active:${$theme.bgActive} text-white rounded p-2`}
			>Login</button
		>
	</form>
	<p class="text-sm text-neutral-300">
		Don't have an account? <a href="/register" class="underline">Register here</a>
	</p>
</div>
