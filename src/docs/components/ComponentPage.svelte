<script lang="ts">
	import { Heading, Scrollable } from '@immich/ui';
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		children?: Snippet;
	};

	const { name, children }: Props = $props();
</script>

<div class="flex h-full flex-col">
	<!-- TODO replace with breadcrumb component -->
	<nav class="flex shrink-0 justify-between border-b bg-light p-4 text-dark">
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<a href="/" class="underline">Components</a>
			<span>/</span>
			<span class="capitalize">{name}</span>
		</div>
	</nav>

	<Scrollable>
		<div class="flex max-w-screen-md flex-col p-4">
			<Heading size="large">{name}</Heading>
			{@render children?.()}
		</div>
	</Scrollable>
</div>
