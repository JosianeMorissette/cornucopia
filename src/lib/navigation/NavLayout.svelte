<script lang="ts">
	import { onMount } from 'svelte';
	import { createScreenSize, type ScreenSize } from '$lib/utils/screenSize';
	import NavBar from './NavBar.svelte';
	import { appState } from '$lib/utils/appState';
	import Footer from './Footer.svelte';

	export let sidebar = false;

	let sidebar_w = 'w-[22rem]';

	let screenSize: ScreenSize;
	onMount(() => {
		screenSize = createScreenSize();
	});
	function sidebarState() {
		$appState.sidebarOpen = !$appState.sidebarOpen;
	}
</script>

<svelte:window on:resize={screenSize.update} />

<div
	class="antialiased text-base-content overflow-h-hidden w-full mx-auto px-4 lg:px-12 xl:px-24 sm:max-w-xl  md:max-w-2xl lg:max-w-5xl xl:max-w-[100rem]"
>
	<NavBar {sidebar}>
		<!-- If sidebar-->
		{#if sidebar}
			{#if $screenSize !== 'Large'}
				<!-- Small screen-->
				<slot name="sidebar" />
			{/if}
		{/if}
	</NavBar>

	<main class="relative mt-8 md:mt-10 h-full overflow-y-auto overflow-x-hidden">
		<!-- If sidebar-->
		{#if sidebar}
			<!--Small screen when sidebar-->
			{#if $screenSize !== 'Large'}
				<!-- If sidebar open -->
				{#if $appState.sidebarOpen}
					<div
						on:click={sidebarState}
						class="relative brightness-50 opacity-50 bg-base-300 saturate-50 grayscale h-full"
					>
						<slot name="content" />
					</div>
				{:else}
					<!-- If sidebar close-->
					<slot name="content" />
				{/if}
			{:else}
				<!--Large screen when sidebar-->
				<div class="lg:flex fixed top-0 antialiased h-full w-full items-center">
					<div class="{sidebar_w} flex-none -ml-2 h-3/4 mt-20 overflow-y-auto">
						<div class="px-2 space-y-3">
							<slot name="sidebar" />
						</div>
					</div>
				</div>

				<div class="w-full h-full flex justify-center lg:justify-start ">
					<div
						class="{sidebar_w} xl:mr-20 {$screenSize === 'Large' ? 'block' : 'hidden'}  flex-none"
					/>
					<div class="flex flex-col items-center overflow-x-hidden">
						<div class="z-10 w-full ">
							<slot name="content" />
						</div>
						<div class="self-start  w-full">
							<Footer />
						</div>
					</div>
				</div>
			{/if}
		{:else}
			<!-- Without sidebar-->
			<slot />
		{/if}
	</main>
</div>
