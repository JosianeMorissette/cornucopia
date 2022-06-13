<script lang="ts">
	import { BasicExampleLink, InstallLink, ContributeLink } from '$lib/utils/appState';
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
	import SidebarButton from '../sidebar/SidebarButton.svelte';

	import Tune from '$lib/icons/Tune.svelte';
	import SidebarTitle from '../sidebar/SidebarTitle.svelte';
</script>

<div class="text-zinc-200 space-y-12">
	<div>
		<SidebarTitle>Getting started</SidebarTitle>
		<SidebarButton link={InstallLink}>
			<DownloadIcon slot="icon" />
		</SidebarButton>
		<SidebarButton link={BasicExampleLink}>
			<Tune slot="icon" />
		</SidebarButton>
	</div>

	<div>
		<SidebarTitle>Contribute</SidebarTitle>
		<SidebarButton link={ContributeLink}>
			<DownloadIcon slot="icon" />
		</SidebarButton>
	</div>
</div>
