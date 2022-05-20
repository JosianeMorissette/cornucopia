<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header
	class="sticky top-0 z-40 w-full backdrop-blur-md supports-backdrop-blur:bg-transparent bg-black bg-opacity-70 shadow-2xl shadow-neutral-content flex-none items-center "
>
	<div class="py-4 md:py-8 ">
		<div class="relative flex items-center">
			<div class="mr-3">
				<Logo />
			</div>

			<div class="flex-grow" />
			<a
				href="/doc"
				class="text-2xl btn btn-sm font-normal normal-case btn-ghost align-right w-14 h-14 flex items-center justify-center mx-10 hover:text-neutral hover:bg-transparent"
			>
				Docs
			</a>

			<a
				class="h-15 w-15 btn-circle btn-ghost hover:bg-neutral flex items-center justify-center p-1"
				href="https://github.com/LouisGariepy/cornucopia"
			>
				<img
					alt="Office"
					aria-hidden="true"
					class=" w-12 h-12 md:w-11 md:h-11"
					src="/static/WhiteGithub.svg"
				/>
			</a>
		</div>
	</div>
</header>
