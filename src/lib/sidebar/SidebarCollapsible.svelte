<script>
	import Collapsible from '$lib/Collapsible.svelte';

	export let title = 'title';
</script>

<Collapsible
	class="collapsible-arrow text-gray-200 hover:text-primary capitalize w-full text-lg tracking-wide font-normal"
>
	<div slot="title">
		<div class="flex items-center space-x-2  ">
			<div class="h-6 w-6">
				<slot name="icon" />
			</div>

			<div>{title}</div>
		</div>
	</div>

	<div slot="content">
		<slot name="content" />
	</div>
</Collapsible>
