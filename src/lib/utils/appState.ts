import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface LayoutLink {
	label: string;
	href: string;
	index: number;

}
export const InstallLink = {
	label: 'Install',
	href: '/doc/install',
	index: 0,
}

export const BasicExampleLink = {
	label: 'Basic Example',
	href: '/doc/basic_example',
	index: 1,
}
export const TestLink = {
	label: 'Test',
	href: '/doc/test',
	index: 2,
}

export type AppState = {
	sidebarOpen: boolean;
	sidebar: LayoutLink;

};

export const appState: Writable<AppState> = writable({
	sidebarOpen: false,
	sidebar: InstallLink
});