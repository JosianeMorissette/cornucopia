<script>
	import Collapsible from '$lib/Collapsible.svelte';
</script>

<Collapsible
	class="collapsible-arrow text-gray-200 hover:text-primary capitalize w-full text-lg tracking-wide font-normal"
>
	<div slot="title">
		<div class="flex items-center space-x-2  ">
			<div class="h-6 w-6">
				<slot name="icon" />
			</div>

			<div class=" tracking-wider flex items-center flex-grow text-left">
				<slot name="title">Empty title</slot>
			</div>
		</div>
	</div>

	<div slot="content">
		<slot name="content">Empty content</slot>
	</div>
</Collapsible>
