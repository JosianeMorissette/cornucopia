<script>
	import NavLayout from '../NavLayout.svelte';
	import DocSidebar from './DocSidebar.svelte';
</script>

<NavLayout sidebar>
	<DocSidebar slot="sidebar" />

	<div class="flex" slot="content">
		<section>
			<slot />
		</section>
	</div>
</NavLayout>
