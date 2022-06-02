<script lang="ts">
	import Person from '$lib/icons/Person.svelte';

	export let title = 'Shooting';
	export let content = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
</script>

<div
	class="normal-case text-base-content px-6 py-8 xl:p-8 xl:w-1/3 md:w-1/2 flex flex-col xl:flex-row text-start "
>
	<div
		class="w-20 h-20 mt-2 inline-flex items-center justify-center rounded-full bg-primary-focus text-neutral mb-5 xl:mb-0 xl:mr-6 flex-shrink-0"
	>
		<div class="h-10 w-10 flex items-center justify-center text-center text-2xl">
			<slot>
				<Person />
			</slot>
		</div>
	</div>
	<div class="flex-grow">
		<h3>{title}</h3>
		<p>
			{content}
		</p>
	</div>
</div>
