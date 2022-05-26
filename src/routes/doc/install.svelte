<script lang="ts">
	import Sitation from '$lib/tags/Sitation.svelte';
	import Code from '$lib/tags/Code.svelte';
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
	$appState.sidebar = InstallLink;
</script>

<svelte:head>
	<title>Install Cornucopia</title>
</svelte:head>

<DocLayout>
	<!-- Content with typo -->
	<h1>Install : This is a h1 title</h1>

	<h2>And a 2h title with its own style!</h2>

	<Paragraph
		>We can use my svelte component to add the content, like this paragraph! We can use the html
		tags for headings directly! Or you can add<i>italic</i>, <b>bold</b> and
		<strong>strong</strong> text! We made a <BoldItalic>bold and italic</BoldItalic> and
		<StrongItalic>strong and italic</StrongItalic>compotents too! You can use
		<Link href="/">a link</Link>. You can even add emojis! How cool is that?! 🤗
	</Paragraph>

	<div class="my-12">
		<img
			alt="Diagram of a use case of cornucopia"
			aria-hidden="true"
			class="w-full h-full"
			src="/static/CornucopiaDiagram.svg"
		/>
	</div>

	<!-- Grid-->
	<h3>This grid is easy to use!</h3>
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
	<h3>We can do a title h3 for a list</h3>
	<ul>
		<li>And have items with li</li>
		<li>There is no limit to the number of items ! 🤯</li>
	</ul>
	<Sitation>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione nulla aspernatur fugit
		tenetur harum sint in quis! Esse reprehenderit voluptas laborum ea consequatur et! Ducimus at
		consequuntur obcaecati! Labore.</Sitation
	>
	<Code
		>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas beatae distinctio at
		necessitatibus modi consectetur dolorem numquam laborum provident amet!</Code
	>
	<Button>
		<img
			alt="Office"
			aria-hidden="true"
			class="w-4 h-4 mr-2  "
			src="/static/BoldBlackIcon44x44.svg"
		/>

		button
	</Button>
</DocLayout>
