<script lang="ts">
	import { Heading, HStack, IconButton, Stack } from '@immich/ui';
	import { mdiMagnify } from '@mdi/js';

	const icon = mdiMagnify;
</script>

<HStack gap={4}>
	<Stack>
		<Heading size="tiny">Semi-Round</Heading>
		<div>
			<IconButton {icon} size="tiny" title="Tiny" />
		</div>
		<div>
			<IconButton {icon} size="small" title="Small" />
		</div>
		<div>
			<IconButton {icon} size="medium" title="Medium" />
		</div>
		<div>
			<IconButton {icon} size="large" title="Large" />
		</div>
		<div>
			<IconButton {icon} size="giant" title="Giant" />
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Round</Heading>
		<div>
			<IconButton {icon} shape="round" size="tiny" title="Tiny" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="small" title="Small" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="medium" title="Medium" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="large" title="Large" />
		</div>
		<div>
			<IconButton {icon} shape="round" size="giant" title="Giant" />
		</div>
	</Stack>

	<Stack>
		<Heading size="tiny">Rectangle</Heading>
		<div>
			<IconButton {icon} shape="rectangle" size="tiny" title="Tiny" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="small" title="Small" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="medium" title="Medium" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="large" title="Large" />
		</div>
		<div>
			<IconButton {icon} shape="rectangle" size="giant" title="Giant" />
		</div>
	</Stack>
</HStack>
