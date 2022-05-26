<script>
	import Collapsible from '$lib/layout/Collapsible.svelte';
</script>

<Collapsible
	titleClass="py-3 rounded-md mb-2"
	class=" collapsible-arrow text-zinc-200 hover:text-primary capitalize w-full text-lg tracking-wide font-normal"
>
	<div slot="title">
		<div class=" flex items-center">
			<div class="h-6 w-6 mx-3">
				<slot name="icon" />
			</div>

			<div class="ml-1 tracking-wider flex items-center flex-grow text-left">
				<slot name="title">Empty title</slot>
			</div>
		</div>
	</div>

	<div slot="content">
		<div class="space-y-2">
			<slot name="content">Empty content</slot>
		</div>
	</div>
</Collapsible>
