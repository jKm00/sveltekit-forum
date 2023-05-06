<script lang="ts">
	import { theme } from '@/stores/theme';
</script>

<div class="grid h-screen place-items-center text-center">
	<div class="grid gap-4">
		<h1 class="text-4xl font-bold uppercase">404 not found</h1>
		<p>The page you are looking for does not exists</p>
		<a href="/" class={`${$theme.text}`}>Go back to home page</a>
	</div>
</div>
