<script lang="ts">
	import { theme } from '@/stores/theme';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { newUserSchema } from '@/lib/validations/newUserSchema';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="grid gap-10">
	<h2 class={`text-3xl ${$theme.text} font-bold uppercase`}>Register</h2>
	<form action="?/register" method="POST" class="grid gap-4 w-80 text-neutral-950" use:enhance>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="email"
				name="email"
				type="text"
				placeholder="Email"
				bind:value={$form.email}
			/>
			{#if $errors.email}
				<p class="text-xs text-red-400 text-left">{$errors.email[0]}</p>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="username"
				name="username"
				type="text"
				placeholder="Username"
				bind:value={$form.username}
			/>
			{#if $errors.username}
				<p class="text-xs text-red-400 text-left">{$errors.username[0]}</p>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="password"
				name="password"
				type="password"
				placeholder="Password"
				bind:value={$form.password}
			/>
			{#if $errors.password}
				<p class="text-xs text-red-400 text-left">{$errors.password[0]}</p>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded"
				id="passwordConfirm"
				name="passwordConfirm"
				type="password"
				placeholder="Confirm password"
				bind:value={$form.passwordConfirm}
			/>
			{#if $errors.passwordConfirm}
				<p class="text-xs text-red-400 text-left">{$errors.passwordConfirm[0]}</p>
			{/if}
		</div>
		<button
			class={`${$theme.bg} hover:${$theme.bgHover} active:${$theme.bgActive} text-white rounded p-2`}
			type="submit">Sign up</button
		>
	</form>
	<p class="text-sm text-neutral-300">
		Already have an account? <a href="/login" class="underline">Sign in here</a>
	</p>
</div>
