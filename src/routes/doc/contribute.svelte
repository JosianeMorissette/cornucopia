<script lang="ts">
	import Citation from '$lib/tags/Citation.svelte';
	import Button from '$lib/tags/Button.svelte';
	import { appState } from '$lib/utils/appState';
	import { ContributeLink } from '$lib/utils/appState';
	import DocLayout from '$lib/navigation/doc/DocLayout.svelte';
	import H1 from '$lib/tags/H1.svelte';
	import H3 from '$lib/tags/H3.svelte';
	import Ul from '$lib/tags/Ul.svelte';
	import Li from '$lib/tags/Li.svelte';

	$appState.sidebar = ContributeLink;
</script>

<svelte:head>
	<title>Install Cornucopia</title>
</svelte:head>

<DocLayout>
	<H1>Contribute</H1>

	<H3>We can do a title h3 for a list</H3>
	<Ul>
		<Li>And have items with li</Li>
		<Li>There is no limit to the number of items ! 🤯</Li>
	</Ul>
	<Citation>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione nulla aspernatur fugit
		tenetur harum sint in quis! Esse reprehenderit voluptas laborum ea consequatur et! Ducimus at
		consequuntur obcaecati! Labore.</Citation
	>

	<Button>Button</Button>
</DocLayout>
