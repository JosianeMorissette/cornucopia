<script lang="ts">
	import Citation from '$lib/tags/Citation.svelte';
	import Paragraph from '$lib/tags/Paragraph.svelte';
	import Table from '$lib/tags/table/Table.svelte';
	import Th from '$lib/tags/table/Th.svelte';
	import Td from '$lib/tags/table/Td.svelte';
	import Tr from '$lib/tags/table/Tr.svelte';
	import BoldItalic from '$lib/tags/BoldItalic.svelte';
	import StrongItalic from '$lib/tags/StrongItalic.svelte';
	import Link from '$lib/tags/Link.svelte';
	import Button from '$lib/tags/Button.svelte';
	import Tc from '$lib/tags/table/Tc.svelte';
	import Tcode from '$lib/tags/table/Tcode.svelte';
	import { appState } from '$lib/utils/appState';
	import { InstallLink } from '$lib/utils/appState';
	import DocLayout from '$lib/navigation/doc/DocLayout.svelte';
	import H1 from '$lib/tags/H1.svelte';
	import H2 from '$lib/tags/H2.svelte';
	import Strong from '$lib/tags/Strong.svelte';
	import H3 from '$lib/tags/H3.svelte';
	import Ul from '$lib/tags/Ul.svelte';
	import Li from '$lib/tags/Li.svelte';

	$appState.sidebar = InstallLink;
</script>

<svelte:head>
	<title>Install Cornucopia</title>
</svelte:head>

<DocLayout>
	<H1>Install : This is a h1 title</H1>

	<H2>And a 2h title with its own style!</H2>

	<Paragraph
		>We can use my svelte component to add the content, like this paragraph! We can use the html
		tags for headings directly! Or you can add<i>italic</i>, <b>bold</b> and
		<Strong>strong</Strong> text! We made a <BoldItalic>bold and italic</BoldItalic> and
		<StrongItalic>strong and italic</StrongItalic> compotents too! You can use
		<Link href="/">a link</Link>. You can even add emojis! How cool is that?! 🤗
	</Paragraph>

	<div class="my-12">
		<img
			alt="Diagram showing an example"
			aria-hidden="true"
			class="w-full h-full"
			src="/CornucopiaDiagram.svg"
		/>
	</div>

	<!-- Grid-->
	<H3>This grid is easy to use!</H3>
	<Table>
		<svelte:fragment slot="th">
			<Th />
			<Th />
			<Th />
		</svelte:fragment>
		<svelte:fragment slot="tbody">
			<tbody>
				<Tr>
					<Td>
						<Tcode>
							<Tc>code</Tc>, <Tc>code with a long name</Tc>
						</Tcode>
					</Td>
					<Td />
					<Td />
				</Tr>
			</tbody>
			<tbody>
				<Tr>
					<Td />
					<Td />
					<Td />
				</Tr>
			</tbody>
			<tbody>
				<Tr>
					<Td />
					<Td />
					<Td />
				</Tr>
			</tbody>
		</svelte:fragment>
	</Table>
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
