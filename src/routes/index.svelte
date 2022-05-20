<script lang="ts">
	import Feature from '$lib/Feature.svelte';
	import Footer from '$lib/Footer.svelte';
	import Autorenew from '$lib/icons/Autorenew.svelte';
	import DataArray from '$lib/icons/DataArray.svelte';
	import ElectricBolt from '$lib/icons/ElectricBolt.svelte';
	import Person from '$lib/icons/Person.svelte';
	import PrecisionManifacturing from '$lib/icons/PrecisionManifacturing.svelte';
	import Storage from '$lib/icons/Storage.svelte';
	import Timer from '$lib/icons/Timer.svelte';
	import Tune from '$lib/icons/Tune.svelte';

	import NavLayout from '$lib/NavLayout.svelte';
	import Badge from '$lib/tags/Badge.svelte';
</script>

<NavLayout>
	<div
		class="pl-4 self-start pt-40 md:pt-52 mb-[7rem] max-w-xs sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-start  "
	>
		<div
			class="uppercase sm:normal-case text-xl sm:text-5xl md:text-6xl lg:text-7xl italic space-y-2 lg:space-y-5 text-neutral"
		>
			<div
				class="font-semibold -tracking-wide sm:-tracking-wide md:tracking-tighter whitespace-nowrap"
			>
				Generate <b
					class="font-semibold underline underline-offset-2 lg:underline-offset-4 text-neutral "
					>type checked</b
				> Rust
			</div>
			<div class="tracking-tight md:tracking-wide font-light">from your PostgreSQL</div>
		</div>
		<h1 class="mt-3 w-full tracking-wide md:text-xl ">
			Cornucopia is a small CLI utility resting on <Badge text="tokio-postgres" />
			designed to facilitate PostgreSQL workflows in Rust.
		</h1>

		<div class=" w-full ">
			<a
				class=" mt-20 btn btn-ghost btn-lg hover:bg-primary-focus  hover:brightness-100 border-0 w-full font-semibold rounded-full lg:h-24 lg:text-2xl bg-base-content text-black tracking-wider  "
				href="/doc"
			>
				Try it yourself!
			</a>
		</div>
	</div>

	<!--Features-->
	<section>
		<div class="mx-auto flex flex-col items-center">
			<div class="self-start mb-4 text-primary text-opacity-60 text-6xl" />

			<div class="w-full border-y-2 pt-10 pb-20 border-primary border-opacity-60">
				<div class="flex flex-wrap">
					<Feature
						title="SQL-first"
						content=" Your database schema is the source of truth. No ORM."
					>
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

				<button
					class=" mt-16 flex border mx-auto w-full max-w-md btn-rounded btn-neutral btn btn-outline rounded-full"
					>See the doc</button
				>
			</div>
		</div>
	</section>

	<!-- hero -->
	<section class="text-gray-400 w-full mx-auto space-y-32 max-w-7xl pt-24 pb-16 body-font">
		<div class="container pt-20 md:pt-36 pb-20 md:pb-[590px] flex flex-wrap">
			<div class="w-2/3 sm:w-1/3 rounded-lg overflow-hidden mb-6 sm:mb-0">
				<img
					alt="Office"
					aria-hidden="true"
					class="w-full opacity-70 "
					src="/static/InvertedBgWhiteIcon44x44.svg"
				/>
			</div>
			<div class="flex  flex-wrap w-full sm:w-2/3  content-start pb-6 sm:pb-0 sm:pl-10">
				<div class="w-full prose sm:p-4 mb-6">
					<h1 class=" whitespace-nowrap">Why Cornucopia ?</h1>
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
				<div
					class="p-4 grid grid-cols-2 gap-4
				 xl:w-full xl:flex xl:flex-row xl:space-x-5 xl:items-center"
				>
					<!-- Downloads -->
					<a href="https://crates.io/crates/cornucopia">
						<img
							class="grid-col-1"
							alt="Crates.io"
							src="https://img.shields.io/crates/d/cornucopia?style=for-the-badge"
						/>
					</a>

					<!-- Stars -->
					<a href="https://github.com/LouisGariepy/cornucopia">
						<img
							class="grid-col-1"
							alt="GitHub Repo stars"
							src="https://img.shields.io/github/stars/LouisGariepy/cornucopia?color=%23D97706&logo=github&style=for-the-badge"
						/>
					</a>

					<!-- Open issues-->
					<a href="https://github.com/LouisGariepy/issues">
						<img
							class="grid-col-1"
							alt="GitHub issues"
							src="https://img.shields.io/github/issues-raw/LouisGariepy/cornucopia?logo=github&style=for-the-badge"
						/>
					</a>

					<!-- License -->
					<a href="https://github.com/LouisGariepy/blob/main/LICENSE">
						<img
							class="grid-col-1"
							alt="Crates.io"
							src="https://img.shields.io/crates/l/cornucopia?style=for-the-badge"
						/>
					</a>
				</div>
			</div>
		</div>
		<div />
		<div
			class="bottom-96 left-0 sm:left-40 md:absolute font-semibold text-3xl -ml-1 sm:ml-o md:text-5xl space-y-16"
		>
			<h1
				class="text-center text-base-content md:text-left tracking-tighter sm:tracking-wide leading-snug"
			>
				<b class="whitespace-nowrap">Discover how to become</b>
				<b class="font-bold whitespace-nowrap">
					a
					<b class=" text-transparent bg-clip-text bg-gradient-to-l from-neutral to-primary "
						>contributor</b
					>
					!
				</b>
			</h1>

			<div class="flex mx-2 space-y-8 flex-col max-w-md">
				<!-- contributing section-->
				<a
					href="/doc"
					class="btn z-50 lg:h-24 flex-1 btn-lg  rounded-full btn-primary normal-case text-xl"
				>
					Read all about it!
				</a>
				<!-- discord link-->
				<a
					href="https://github.com/LouisGariepy/cornucopia"
					class="btn z-50 btn-lg btn-outline rounded-full flex-1 btn-primary normal-case text-xl"
				>
					Take a look at the github
				</a>
			</div>
		</div>

		<div class="absolute bottom-6 md:bottom-0 right-0 h-[780px] opacity-10">
			<img
				alt="Office"
				aria-hidden="true"
				class="w-full h-full self-end"
				src="/static/WhiteGithub.svg"
			/>
		</div>
	</section>
	<Footer />
</NavLayout>
