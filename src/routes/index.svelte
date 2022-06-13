<script lang="ts">
	import Feature from '$lib/layout/Feature.svelte';
	import Footer from '$lib/navigation/Footer.svelte';
	import Autorenew from '$lib/icons/actions/Autorenew.svelte';
	import Github from '$lib/icons/companies/Github.svelte';
	import DataArray from '$lib/icons/DataArray.svelte';
	import ElectricBolt from '$lib/icons/ElectricBolt.svelte';
	import Person from '$lib/icons/Person.svelte';
	import PrecisionManifacturing from '$lib/icons/PrecisionManifacturing.svelte';
	import Storage from '$lib/icons/Storage.svelte';
	import Timer from '$lib/icons/Timer.svelte';
	import Tune from '$lib/icons/Tune.svelte';
	import NavLayout from '$lib/navigation/NavLayout.svelte';
	import Badge from '$lib/tags/Badge.svelte';
	import LinkButton from '$lib/actions/LinkButton.svelte';

	let classButton = 'py-4 w-full rounded-full flex-1 ';
</script>

<svelte:head>
	<title>About Cornucopia</title>
</svelte:head>

<NavLayout>
	<section
		class=" mt-40 lg:mt-40 w-full flex flex-col items-center sm:items-start text-center sm:text-left"
	>
		<div
			class="uppercase sm:normal-case text-xl sm:text-4xl md:text-5xl lg:text-7xl space-y-2 lg:space-y-5 text-neutral italic"
		>
			<h1 class="font-semibold ">
				Generate <b
					class="font-semibold underline underline-offset-2 lg:underline-offset-4 text-neutral "
					>type checked</b
				> Rust
			</h1>
			<h2 class="tracking-tight md:tracking-wide font-light">from your PostgreSQL</h2>
		</div>
		<div class="max-w-xs sm:max-w-xl xl:max-w-2xl w-full ">
			<h3 class="mt-3 mb-10 w-full tracking-wide md:text-xl ">
				Cornucopia is a small CLI utility resting on <Badge>tokio-postgres</Badge>
				designed to facilitate PostgreSQL workflows in Rust.
			</h3>

			<LinkButton
				componentClass="bg-primary w-full ml-1 px-12 hover:bg-primary-focus rounded-full max-w-md lg:max-w-none text-lg md:text-2xl lg:text-3xl h-12 lg:h-24 text-base-100 tracking-widest "
				href="/doc/install">Try it yourself!</LinkButton
			>
		</div>
	</section>

	<!--Features-->
	<section class="mx-auto flex flex-col items-center my-24 md:my-48 sm:my-40">
		<h1
			class="mb-6 sm:mb-10 lg:mb-10 tracking-widest text-zinc-400 font-semibold text-4xl sm:text-5xl lg:text-7xl"
		>
			Features
		</h1>
		<div class="w-full border-y-2 py-4 lg:py-10 border-primary border-opacity-60">
			<div class="flex flex-wrap ">
				<Feature title="SQL-first" content=" Your database schema is the source of truth. No ORM.">
					<Storage />
				</Feature>
				<Feature
					title="Custom user types"
					content="Support custom user types like composites, enums, domains and one-dimensional array"
				>
					<Person />
				</Feature>

				<Feature
					title="Asynchronous streams"
					content="Strongly-typed async row streams suitable for web servers."
				>
					<ElectricBolt />
				</Feature>
				<Feature
					title="Nullable return columns"
					content=" Allow the user to have nullable return colums."
				>
					<DataArray />
				</Feature>
				<Feature
					title="Self managed"
					content="Build your queries against your own live database, or let Cornucopia manage that for you."
				>
					<PrecisionManifacturing />
				</Feature>
				<Feature
					title="Flexible connexion types"
					content="Use, mix and match the connection types that you want: pooled or not, transaction or not."
				>
					<Tune />
				</Feature>
				<Feature
					title="Compatible with build.rs"
					content="Rebuild Rust queries whenever SQL files change."
				>
					<Autorenew />
				</Feature>
				<Feature title="No macros" content=" No macros, respects your compile times.">
					<Timer />
				</Feature>

				<!-- TODO 9th feature -->
				<Feature />
			</div>

			<div class="py-8 xl:py-4">
				<LinkButton
					href="/doc/install"
					componentClass=" border border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-base-100  mx-auto py-3 w-full max-w-sm rounded-full"
					>See the doc</LinkButton
				>
			</div>
		</div>
	</section>

	<!-- Hero-->
	<section class="text-zinc-400 body-font ">
		<div
			class="container mx-auto flex  px-5 py-16  sm:pb-96 xl:pb-[27rem] lg:flex-row justify-center flex-col items-center"
		>
			<div class="xl:max-w-md lg:max-w-xs lg:w-full w-5/6 mb-10 lg:mb-0">
				<img
					class="w-full max-w-72 sm:max-h-96 xl:max-h-[26rem] h-full brightness-75"
					alt="Minimalist version of the logo"
					src="/InvertedBgWhiteIcon44x44.svg"
				/>
			</div>
			<div class=" lg:w-1/2 lg:pl-24 flex flex-col  lg:items-start md:text-left items-center ">
				<h1
					class="title-font text-center sm:text-left sm:text-4xl text-3xl mb-4 font-medium text-zinc-200"
				>
					Designed to facilitate
					<br class="hidden lg:inline-block " />PostgreSQL in Rust
				</h1>
				<div class="prose prose-invert pb-16">
					<ul>
						<li>
							Cornucopia aims to get out of your way, <b
								>transpiling your PostgreSQL queries to Rust on demand.</b
							>
						</li>
						<li>
							Each query is prepared against your schema, ensuring that the query statements are
							valid SQL.
						</li>
						<li>
							These prepared statements are then be used to generate properly type-checked Rust code
							for this query.
						</li>
					</ul>
				</div>
				<div class="grid grid-cols-2  gap-4 sm:w-full sm:flex sm:flex-row sm:items-center">
					<!-- Downloads -->
					<a href="https://crates.io/crates/cornucopia">
						<img
							class="grid-col-1 "
							alt="Crates.io"
							src="https://img.shields.io/crates/d/cornucopia?style=for-the-badge"
						/>
					</a>

					<!-- Stars -->
					<a href="https://github.com/cornucopia-rs/cornucopia/stargazers">
						<img
							class="grid-col-1"
							alt="GitHub Repo stars"
							src="https://img.shields.io/github/stars/cornucopia-rs/cornucopia?color=%23D97706&logo=github&style=for-the-badge"
						/>
					</a>

					<!-- Open issues-->
					<a href="https://github.com/cornucopia-rs/cornucopia/issues">
						<img
							class="grid-col-1"
							alt="GitHub issues"
							src="https://img.shields.io/github/issues-raw/cornucopia-rs/cornucopia?logo=github&style=for-the-badge"
						/>
					</a>

					<!-- License -->
					<a href="https://github.com/cornucopia-rs/cornucopia#License">
						<img
							class="grid-col-1"
							alt="Crates.io"
							src="https://img.shields.io/crates/l/cornucopia?style=for-the-badge"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!--Contribute-->
	<section
		class="md:ml-5 text-base-content flex flex-col items-center sm:items-start font-semibold text-4xl md:text-5xl overflow-hidden h-[32rem] md:h-[30rem]"
	>
		<h1
			class="mt-28 sm:mt-2 mb-12 text-center md:text-left tracking-tighter sm:tracking-wide leading-snug"
		>
			<b class="">Discover how to become</b>
			<b class="font-bold whitespace-nowrap"
				>a<b class=" ml-1.5 text-transparent bg-clip-text bg-gradient-to-l from-neutral to-primary "
					>contributor</b
				>!
			</b>
		</h1>

		<div class="w-full sm:ml-1 self-center md:self-start space-y-10 flex-col max-w-sm sm:max-w-md">
			<!-- contributing section-->
			<LinkButton
				href="/doc/install"
				componentClass="{classButton} flex-1 rounded-full bg-primary text-base-100 hover:bg-primary-focus normal-case text-xl"
			>
				How to contribute
			</LinkButton>

			<!-- discord link-->
			<LinkButton
				href="https://github.com/cornucopia-rss/cornucopia"
				componentClass="{classButton} border border-primary text-primary hover:bg-primary-focus hover:border-none hover:text-base-100 normal-case text-xl"
			>
				Take a look at the github
			</LinkButton>
		</div>

		<div
			class="absolute mb-20 xl:mb-[5rem] sm:pt-32 -z-50 bottom-0 right-0 h-[34rem]  sm:h-[56rem] text-zinc-800 text-opacity-90"
		>
			<Github class="w-full h-full " />
		</div>
	</section>
	<Footer />
</NavLayout>
