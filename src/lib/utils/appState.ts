import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface AboutLayoutLink {
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

export type AppState = {
	sidebarOpen: boolean;
	sidebar: AboutLayoutLink;

};

export const appState: Writable<AppState> = writable({
	sidebarOpen: false,
	sidebar: InstallLink
});