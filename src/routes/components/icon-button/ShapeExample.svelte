<script lang="ts">
	import { IconButton, HStack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack wrap>
	<IconButton {icon} shape="rectangle" title="Rectangle" />
	<IconButton {icon} shape="semi-round" title="Semi-Round" />
	<IconButton {icon} shape="round" title="Round" />
</HStack>
