<script lang="ts">
	import DocLayout from '$lib/navigation/doc/DocLayout.svelte';
	import { appState } from '$lib/utils/appState';

	import { InstallLink } from '$lib/utils/appState';
	$appState.sidebar = InstallLink;
</script>

<svelte:head>
	<title>Basic example</title>
</svelte:head>

<DocLayout>
	<h1>Basic Example</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, optio ullam? Architecto
		placeat corporis natus amet in a laudantium doloremque?
	</p>

	<img class="w-full h-full" alt="Basic example" aria-hidden="true" src="/CornucopiaDiagram.svg" />
</DocLayout>
