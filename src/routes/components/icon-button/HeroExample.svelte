<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="hero" color="primary" title="Primary" />
	<IconButton {icon} variant="hero" color="secondary" title="Secondary" />
	<IconButton {icon} variant="hero" color="success" title="Success" />
	<IconButton {icon} variant="hero" color="info" title="Info" />
	<IconButton {icon} variant="hero" color="warning" title="Warning" />
	<IconButton {icon} variant="hero" color="danger" title="Danger" />
</HStack>
