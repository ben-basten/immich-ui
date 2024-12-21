<script lang="ts">
	import Button from '$lib/internal/Button.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import type { IconButtonProps } from '$lib/types.js';

	type InternalIconButton = IconButtonProps & {
		title: string;
	};

	const { icon, title, flipped, flopped, ...buttonProps }: InternalIconButton = $props();
</script>

<Button icon {...buttonProps} aria-label={title} {title}>
	<Icon {icon} {flipped} {flopped} aria-hidden="true" size="66%"></Icon>
</Button>
