<script lang="ts">
	import Github from '$lib/icons/companies/Github.svelte';
	import Logo from '$lib/navigation/Logo.svelte';
	import { onMount } from 'svelte';
	import { createScreenSize, type ScreenSize } from '$lib/utils/screenSize';
	import Hamburger from '$lib/icons/actions/Hamburger.svelte';
	import { appState } from '$lib/utils/appState';
	import Button from '$lib/actions/Button.svelte';
	import LinkButton from '$lib/actions/LinkButton.svelte';
	import CloseIcon from '$lib/icons/actions/CloseIcon.svelte';

	function handleClick() {}

	export let sidebar: boolean;

	function sidebarState() {
		$appState.sidebarOpen = !$appState.sidebarOpen;
	}

	let screenSize: ScreenSize;
	onMount(() => {
		screenSize = createScreenSize();
	});
</script>

<svelte:window on:resize={screenSize.update} />

<header
	class="sticky top-0 z-40 w-full backdrop-blur-md supports-backdrop-blur:bg-transparent bg-black bg-opacity-70 shadow-2xl shadow-neutral-content flex-none items-center "
>
	<div class="py-4 md:py-8 ">
		<div class="relative flex items-center">
			<!-- If sidebar -->
			{#if sidebar}
				{#if $screenSize !== 'Large'}
					<Button
						handleClick={sidebarState}
						componentClass="text-zinc-300 z-50 mr-4 p-3 over:text-white border-none"
					>
						<div class="w-full h-full">
							{#if $appState.sidebarOpen}
								<CloseIcon class="h-7 w-7" />
							{:else}
								<Hamburger class="h-7 w-7" />
							{/if}
						</div>
					</Button>
				{/if}
			{/if}
			<div>
				<Logo />
			</div>

			<div class="flex-grow" />
			<div class="flex items-center space-x-5 md:space-x-4">
				<LinkButton
					componentClass=" md:px-4 text-xl md:text-2xl font-normal normal-case "
					href="/doc/install"
					>Doc
				</LinkButton>

				<LinkButton
					componentClass=" md:px-4 text-xl md:text-2xl font-normal normal-case "
					href="/blogList"
					>Blog
				</LinkButton>

				<LinkButton
					componentClass=" md:px-4 text-xl md:text-2xl font-normal normal-case "
					href="/blogList"
				>
					<Github class="w-12 h-12 mb-[1px] md:w-10 md:h-10" />
				</LinkButton>
			</div>
		</div>
	</div>
	{#if sidebar}
		{#if $screenSize !== 'Large'}
			{#if $appState.sidebarOpen}
				<div
					class=" absolute mt-[5.2rem] md:mt-[5.5rem] top-0 h-screen w-[320px] sm:w-[21rem] z-10 flex shadow-xl bg-base-100 py-14"
				>
					<div class=" overflow-y-auto text-base-content">
						<slot />
					</div>
				</div>
			{/if}
		{/if}
	{/if}
</header>
