<script lang="ts">
	import NavBar from './NavBar.svelte';
</script>

<div
	class="antialiased text-base-content h-full w-full mx-auto px-4 lg:px-12 xl:px-24 sm:max-w-xl  md:max-w-2xl lg:max-w-5xl xl:max-w-[100rem]"
>
	<NavBar />

	<main class="relative h-full overflow-y-auto overflow-x-hidden">
		<slot />
	</main>
</div>
