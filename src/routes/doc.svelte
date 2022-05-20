<script lang="ts">
	import SidebarLayout from '$lib/sidebar/SidebarLayout.svelte';
	import SidebarButton from '$lib/sidebar/SidebarButton.svelte';
	import SidebarCollapsible from '$lib/sidebar/SidebarCollapsible.svelte';
	import Download from '$lib/icons/Download.svelte';
	import Tune from '$lib/icons/Tune.svelte';
	import Person from '$lib/icons/Person.svelte';
	import SidebarDivider from '$lib/sidebar/SidebarDivider.svelte';
	import Sitation from '$lib/tags/Sitation.svelte';
	import Code from '$lib/tags/Code.svelte';
	import Paragraph from '$lib/tags/Paragraph.svelte';
	import Badge from '$lib/tags/Badge.svelte';
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
</script>

<SidebarLayout>
	<!-- Sidebar -->
	<div slot="sidebar">
		<SidebarButton>
			<div slot="icon">
				<Download />
			</div>
			<svelte:fragment slot="title">Install</svelte:fragment>
		</SidebarButton>
		<SidebarCollapsible>
			<div slot="icon">
				<Tune />
			</div>

			<svelte:fragment slot="title">Examples</svelte:fragment>
			<div slot="content">
				<SidebarButton collapsible
					><svelte:fragment slot="title">Basic</svelte:fragment></SidebarButton
				>
				<SidebarButton collapsible>
					<svelte:fragment slot="title">Advanced</svelte:fragment>
				</SidebarButton>
			</div>
		</SidebarCollapsible>

		<SidebarDivider />

		<SidebarCollapsible>
			<div slot="icon">
				<Person />
			</div>
			<svelte:fragment slot="title">
				Contribute
				<div class="flex-grow" />
				<Badge>New!</Badge>
			</svelte:fragment>
			<div slot="content">
				<SidebarButton collapsible
					><svelte:fragment slot="title">Basic</svelte:fragment></SidebarButton
				>
				<SidebarButton collapsible
					><svelte:fragment slot="title">
						Advanced
						<div class="flex-grow" />
						<Badge>New!</Badge>
					</svelte:fragment></SidebarButton
				>
			</div>
		</SidebarCollapsible>
	</div>
	<!-- Content with typo -->
	<div slot="content">
		<h1>This example has a h1 title</h1>

		<h2>And a 2h title with its own style!</h2>

		<Paragraph
			>You can use my svelte component to add the content, like this paragraph! You can use the html
			tags for headings directly has you can see above! You can put a
			<Badge>Badge</Badge> to accentuate important parts. Or you can add
			<i>italic</i>, <b>bold</b> and
			<strong>strong</strong>
			text! We made a
			<BoldItalic>bold and italic</BoldItalic> and
			<StrongItalic>strong and italic</StrongItalic>
			compotents too! You can use <Link
				href="google.com"
				link="a link to a webiste
			"
			/>. You can even add emojis! How cool is that?! 🤗
		</Paragraph>

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
		<Button content="A button" />
	</div>
</SidebarLayout>
