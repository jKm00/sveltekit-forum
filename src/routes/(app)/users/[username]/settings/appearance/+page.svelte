<script lang="ts">
	import ThemeSelector from '@/lib/components/ThemeSelector.svelte';

	export let data;
</script>

<ThemeSelector availableThemes={data.themes} />
