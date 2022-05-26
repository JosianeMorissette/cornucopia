import type { Readable } from 'svelte/store';

export type ImmutableStore<T> = Readable<T> & { update: () => void };
