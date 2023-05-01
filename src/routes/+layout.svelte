<script lang="ts">
	import '../app.css';

	export let data;
</script>

<div class="min-h-screen flex flex-col bg-neutral-900 text-white">
	<slot />

	<footer class="py-4 text-center text-neutral-600 text-sm">
		<p>Joakim Edvardsen &copy 2023. All rights reserved</p>
		<p>Version {data.version}</p>
	</footer>
</div>
