<script lang="ts">
	export let collapsible = false;

	let button_class =
		'rounded-none h-11 border-0 text-gray-200 hover:bg-transparent hover:text-primary tracking-wider font-normal btn btn-ghost justify-start capitalize w-full flex items-center';
</script>

{#if collapsible}
	<button class="{button_class} px-8 text-lg hover:text-xl ">
		<div class="flex items-center flex-grow text-left">
			<slot name="title">Empty title</slot>
		</div>
	</button>
{:else}
	<button class="{button_class} text-lg  ">
		<div class="mr-2 h-6 w-6">
			<slot name="icon" />
		</div>
		<div class="pr-8 flex items-center flex-grow text-left">
			<slot name="title">Empty title</slot>
		</div>
	</button>
{/if}
