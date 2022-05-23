<script lang="ts">
	import Footer from '$lib/Footer.svelte';

	import NavLayout from '$lib/NavLayout.svelte';

	let sidebar_w = 'w-[22rem]';
</script>

<div class="relative flex w-full h-full">
	<NavLayout>
		<div class="lg:flex fixed hidden top-0 antialiased h-full w-full items-center">
			<div class="{sidebar_w}  flex-none -ml-2 h-3/4 mt-24 overflow-y-auto">
				<div class="h-full px-2"><slot name="sidebar" /></div>
			</div>
		</div>

		<div class="w-full h-full flex justify-center lg:justify-start mt-[3.1rem]">
			<div class="{sidebar_w} lg:mr-16 xl:mr-20 hidden lg:block flex-none" />
			<div class="flex flex-col items-center overflow-x-hidden">
				<div class="prose max-w-none z-10 w-full ">
					<slot name="content" />
				</div>
				<div class="self-start  w-full">
					<Footer />
				</div>
			</div>
		</div>
	</NavLayout>
</div>
