import { writable } from 'svelte/store';
import type { ImmutableStore } from './utils';

export type ScreenSizeType = 'Small' | 'Medium' | 'Large';

export type ScreenSize = ImmutableStore<ScreenSizeType>;

export function createScreenSize(): ScreenSize {
	function computeScreenSize(): ScreenSizeType {
		const myOuterWidth = window.outerWidth;
		if (myOuterWidth < 768) {
			return 'Small';
		} else if (myOuterWidth < 1280) {
			return 'Medium';
		} else {
			return 'Large';
		}
	}

	const { subscribe, set } = writable(computeScreenSize());

	return {
		subscribe,
		update: () => {
			set(computeScreenSize());
		}
	};
}
