<script lang="ts">
	import type { AboutLayoutLink } from '$lib/utils/appState';
	import { appState } from '$lib/utils/appState';
	import Button from '$lib/actions/Button.svelte';
	import { goto } from '$app/navigation';

	export let link: AboutLayoutLink;

	export let collapsible = false;

	function handleClick() {
		$appState.sidebar.index = link.index;
		$appState.sidebarOpen = false;
		goto(link.href);
		console.log($appState.sidebar.index);
	}

	let selected = link.index === $appState.sidebar.index;

	let btnClass =
		' font-normal text-left text-lg rounded-none border-0 tracking-wider font-normal p-3 justify-start capitalize w-full flex items-center';

	let componentClass: string;

	$: if (selected) {
		componentClass = 'text-primary';
	} else {
		componentClass = 'text-zinc-200 hover:text-zinc-100 hover:text-white ';
	}
</script>

{#if collapsible}
	<Button componentClass=" pl-[3.25rem] {componentClass} {btnClass}" {handleClick}>
		<div class="flex items-center flex-grow text-left">
			{link.label}
		</div>
	</Button>
{:else}
	<Button componentClass=" {btnClass} {componentClass}" {handleClick}>
		<div class="mr-4 h-6 w-6 ">
			<slot name="icon" />
		</div>
		<div class="pr-8 flex items-center flex-grow ">
			{link.label}
		</div>
	</Button>
{/if}
