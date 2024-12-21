<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} disabled color="primary" title="Primary" />
	<IconButton {icon} disabled color="secondary" title="Secondary" />
	<IconButton {icon} disabled color="success" title="Success" />
	<IconButton {icon} disabled color="info" title="Info" />
	<IconButton {icon} disabled color="warning" title="Warning" />
	<IconButton {icon} disabled color="danger" title="Danger" />
</HStack>
