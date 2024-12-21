<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} color="primary" title="Primary" />
	<IconButton {icon} color="secondary" title="Secondary" />
	<IconButton {icon} color="success" title="Success" />
	<IconButton {icon} color="info" title="Info" />
	<IconButton {icon} color="warning" title="Warning" />
	<IconButton {icon} color="danger" title="Danger" />
</HStack>
