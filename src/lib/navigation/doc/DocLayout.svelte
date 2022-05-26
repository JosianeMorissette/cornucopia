<script>
	import { appState } from '$lib/utils/appState';
	import NavLayout from '../NavLayout.svelte';
	import DocSidebar from './DocSidebar.svelte';

	function sidebarState() {
		$appState.sidebarOpen = !$appState.sidebarOpen;
	}
</script>

<NavLayout sidebar>
	<DocSidebar slot="sidebar" />

	<section class="py-6 prose max-w-none" slot="content">
		<slot />
	</section>
</NavLayout>
