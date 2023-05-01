<script lang="ts">
	import { theme } from '@/stores/theme';
</script>

<div class="grid gap-10">
	<h2 class={`text-3xl ${$theme.text} font-bold uppercase`}>Register</h2>
	<form action="" class="grid gap-4 w-80">
		<input class="px-2 py-1 rounded" id="email" type="text" placeholder="Email" />
		<input class="px-2 py-1 rounded" id="username" type="text" placeholder="Username" />
		<input class="px-2 py-1 rounded" id="password" type="password" placeholder="Password" />
		<button class={`${$theme.bg} hover:${$theme.bgHover} active:${$theme.bgActive} rounded p-2`}
			>Sign up</button
		>
	</form>
	<p class="text-sm text-neutral-300">
		Already have an account? <a href="/login" class="underline">Sign in here</a>
	</p>
</div>
