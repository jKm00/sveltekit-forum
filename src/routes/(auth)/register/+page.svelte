<script lang="ts">
	import { theme } from '@/stores/theme';

	export let form;
</script>

<div class="grid gap-10">
	<h2 class={`text-3xl ${$theme.text} font-bold uppercase`}>Register</h2>
	<form action="?/register" method="POST" class="grid gap-4 w-80 text-neutral-950">
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded {form?.errors?.email ? 'outline outline-red-400 outline-2' : ''}"
				id="email"
				name="email"
				type="text"
				placeholder="Email"
				value={form?.data?.email ?? ''}
			/>
			{#if form?.errors?.email}
				<label class="text-red-400 text-start text-xs" for="email">{form?.errors?.email[0]}</label>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded {form?.errors?.username
					? 'outline outline-red-400 outline-2'
					: ''}"
				id="username"
				name="username"
				type="text"
				placeholder="Username"
				value={form?.data?.username ?? ''}
			/>
			{#if form?.errors?.username}
				<label class="text-red-400 text-start text-xs" for="username"
					>{form?.errors?.username[0]}</label
				>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded {form?.errors?.password
					? 'outline outline-red-400 outline-2'
					: ''}"
				id="password"
				name="password"
				type="password"
				placeholder="Password"
			/>
			{#if form?.errors?.password}
				<label class="text-red-400 text-start text-xs" for="password"
					>{form?.errors?.password[0]}</label
				>
			{/if}
		</div>
		<div class="grid gap-1">
			<input
				class="px-2 py-1 rounded {form?.errors?.passwordConfirm
					? 'outline outline-red-400 outline-2'
					: ''}"
				id="passwordConfirm"
				name="passwordConfirm"
				type="password"
				placeholder="Confirm password"
			/>
			{#if form?.errors?.passwordConfirm}
				<label class="text-red-400 text-start text-xs" for="confirmPassword"
					>{form?.errors?.passwordConfirm[0]}</label
				>
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
