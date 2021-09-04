import { writable } from 'svelte/store';

export const counter = writable(0);

export const increment = (): void => counter.update((prev) => prev + 1);
export const decrement = (): void => counter.update((prev) => prev - 1);
export const reset = (): void => counter.set(0);
