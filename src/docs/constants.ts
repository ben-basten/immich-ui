import {
	mdiAccountCircle,
	mdiAlertCircleOutline,
	mdiApplicationOutline,
	mdiButtonCursor,
	mdiCardOutline,
	mdiCheckboxMarked,
	mdiCheckboxMultipleMarked,
	mdiCloseCircle,
	mdiCodeBraces,
	mdiDotsCircle,
	mdiFormatHeaderPound,
	mdiFormDropdown,
	mdiFormTextbox,
	mdiFormTextboxPassword,
	mdiHelpBoxOutline,
	mdiHomeCircle,
	mdiImage,
	mdiKeyboardVariant,
	mdiLink,
	mdiListBoxOutline,
	mdiMenu,
	mdiNumeric,
	mdiPanVertical,
	mdiPartyPopper,
	mdiThemeLightDark,
	mdiToggleSwitch,
	mdiViewSequential,
	mdiWindowMaximize,
} from '@mdi/js';
import type { Component } from 'svelte';

export enum DisplayOption {
	Both = 'both',
	Light = 'light',
	Dark = 'dark',
}

export type ExampleItem = {
	title: string;
	code: string;
	component: Component;
};

export type ExampleCardProps = ExampleItem;

export const componentGroups = [
	{
		title: 'Layout',
		components: [
			{ name: 'Alert', icon: mdiAlertCircleOutline },
			{ name: 'AppShell', icon: mdiApplicationOutline },
			{ name: 'Card', icon: mdiCardOutline },
			{ name: 'Navbar', icon: mdiMenu },
			{ name: 'Modal', icon: mdiWindowMaximize },
			{ name: 'Scrollable', icon: mdiPanVertical },
			{ name: 'Stack', icon: mdiViewSequential },
		],
	},
	{
		title: 'Forms',
		components: [
			{ name: 'Button', icon: mdiButtonCursor },
			{ name: 'IconButton', icon: mdiHomeCircle },
			{ name: 'Checkbox', icon: mdiCheckboxMarked },
			{ name: 'CloseButton', icon: mdiCloseCircle },
			{ name: 'Field', icon: mdiListBoxOutline },
			{ name: 'HelperText', icon: mdiHelpBoxOutline },
			{ name: 'Input', icon: mdiFormTextbox },
			{ name: 'LoadingSpinner', icon: mdiDotsCircle },
			{ name: 'MultiSelect', icon: mdiCheckboxMultipleMarked },
			{ name: 'PasswordInput', icon: mdiFormTextboxPassword },
			{ name: 'Select', icon: mdiFormDropdown },
			{ name: 'Switch', icon: mdiToggleSwitch },
		],
	},
	{
		title: 'Text',
		components: [
			{ name: 'Code', icon: mdiCodeBraces },
			{ name: 'Kbd', icon: mdiKeyboardVariant },
			{ name: 'Text', icon: mdiFormatHeaderPound },
			{ name: 'Heading', icon: mdiFormTextbox },
			{ name: 'Link', icon: mdiLink },
			{ name: 'FormatBytes', icon: mdiNumeric },
		],
	},
	{
		title: 'Miscellaneous',
		components: [
			{ name: 'Avatar', icon: mdiAccountCircle },
			{ name: 'Logo', icon: mdiImage },
			{ name: 'SupporterBadge', icon: mdiPartyPopper },
			{ name: 'ThemeSwitcher', icon: mdiThemeLightDark },
		],
	},
];
