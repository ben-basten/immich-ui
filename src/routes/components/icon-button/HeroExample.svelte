<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="hero" color="primary" aria-label="Primary" />
	<IconButton {icon} variant="hero" color="secondary" aria-label="Secondary" />
	<IconButton {icon} variant="hero" color="success" aria-label="Success" />
	<IconButton {icon} variant="hero" color="info" aria-label="Info" />
	<IconButton {icon} variant="hero" color="warning" aria-label="Warning" />
	<IconButton {icon} variant="hero" color="danger" aria-label="Danger" />
</HStack>
