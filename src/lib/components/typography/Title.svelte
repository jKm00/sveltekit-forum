<script lang="ts">
	import { theme } from '@/stores/theme';

	export let _class: string;
</script>

<h class={`${$theme.text} ${_class} font-bold`}><slot /></h>
