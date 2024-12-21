<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="ghost" color="primary" title="Primary" />
	<IconButton {icon} variant="ghost" color="secondary" title="Secondary" />
	<IconButton {icon} variant="ghost" color="success" title="Success" />
	<IconButton {icon} variant="ghost" color="info" title="Info" />
	<IconButton {icon} variant="ghost" color="warning" title="Warning" />
	<IconButton {icon} variant="ghost" color="danger" title="Danger" />
</HStack>
