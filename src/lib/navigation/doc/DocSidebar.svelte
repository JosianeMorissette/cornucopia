<script lang="ts">
	import { BasicExampleLink, InstallLink } from '$lib/utils/appState';
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
	import Tune from '$lib/icons/Tune.svelte';
	import SidebarButton from '../sidebar/SidebarButton.svelte';
	import SidebarCollapsible from '../sidebar/SidebarCollapsible.svelte';
</script>

<div class="space-y-2">
	<SidebarButton link={InstallLink}>
		<DownloadIcon slot="icon" />
		<h1 slot="title">Install</h1>
	</SidebarButton>

	<SidebarCollapsible>
		<Tune slot="icon" />
		<h1 slot="title">Examples</h1>
		<div slot="content">
			<SidebarButton link={BasicExampleLink} collapsible />
		</div>
	</SidebarCollapsible>
</div>
