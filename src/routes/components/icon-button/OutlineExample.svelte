<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} variant="outline" color="primary" title="Primary" />
	<IconButton {icon} variant="outline" color="secondary" title="Secondary" />
	<IconButton {icon} variant="outline" color="success" title="Success" />
	<IconButton {icon} variant="outline" color="info" title="Info" />
	<IconButton {icon} variant="outline" color="warning" title="Warning" />
	<IconButton {icon} variant="outline" color="danger" title="Danger" />
</HStack>
