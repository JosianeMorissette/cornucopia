<script lang="ts">
	import type { LayoutLink } from '$lib/utils/appState';
	import { appState } from '$lib/utils/appState';
	import Button from '$lib/actions/Button.svelte';
	import { goto } from '$app/navigation';
	export let link: LayoutLink;

	function handleClick() {
		console.log($appState);
		$appState.sidebarOpen = false;
		goto(link.href);
		console.log($appState);
	}

	let selected = link.index === $appState.sidebar.index;

	let btnClass =
		' font-normal text-left text-lg rounded-none border-0 tracking-wider font-normal py-4 justify-start capitalize w-full flex items-center';

	export let componentClass = '';

	$: if (selected) {
		componentClass = 'text-primary';
	} else {
		componentClass = 'text-zinc-300 hover:text-white hover:text-white ';
	}
</script>

<Button componentClass=" {btnClass} {componentClass}" {handleClick}>
	<div class="mr-4 h-6 w-6 opacity-80">
		<slot name="icon" />
	</div>
	<div class="pr-8 flex items-center flex-grow ">
		{link.label}
	</div>
</Button>
