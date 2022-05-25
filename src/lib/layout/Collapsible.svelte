<!-- Options: collapsible-plus, collapsible-arrow, collapsible-sm-plus collapsible-sm-arrow-->
<script lang="ts">
	let componentClass = '';
	export { componentClass as class };

	export let open = false;
	export let titleClass = '';
	export function handleClick() {
		open = !open;
	}
</script>

<div class="collapsible {componentClass} ">
	<input type="checkbox" on:click={handleClick} />
	<div class="collapsible-title {titleClass}">
		<slot name="title" />
	</div>
	<div class="collapsible-content ">
		<slot name="content" />
	</div>
</div>

<style>
	@layer {
		.collapsible {
			@apply outline-none;
		}

		.collapsible-arrow .collapsible-title:after {
			@apply transition-all ease-in-out duration-300 w-2 h-2 block absolute;
			top: 1.4rem;
			right: 1.4rem;
			content: '';
			transform-origin: 75% 75%;
			transform: rotate(45deg);
			box-shadow: 2px 2px;
			pointer-events: none;
		}

		.collapsible-sm-plus .collapsible-title:after {
			@apply transition-all ease-in-out duration-300 w-2 h-2 block absolute;
			top: 0.9rem;
			right: 1.4rem;
			content: '+';
			pointer-events: none;
		}

		.collapsible-plus .collapsible-title:after {
			@apply transition-all ease-in-out duration-300 w-2 h-2 block absolute;
			top: 1rem;
			right: 1.4rem;
			content: '+';
			pointer-events: none;
		}

		.collapsible:not(.collapsible-open):not(.collapsible-close) input[type='checkbox'],
		.collapsible:not(.collapsible-open):not(.collapsible-close) .collapsible-title {
			@apply cursor-pointer;
		}

		.collapsible:focus:not(.collapsible-open):not(.collapsible-close) .collapsible-title {
			cursor: unset;
		}

		.collapsible-title,
		.collapsible > input[type='checkbox'] {
			@apply p-4 pr-12 w-full;
			min-height: 0rem;
			transition: background-color 0.2s ease-in-out;
		}

		.collapsible:not(.collapsible-close) input[type='checkbox']:focus ~ .collapsible-title {
			@apply bg-base-content bg-opacity-0;
		}

		.collapsible-open .collapsible-title,
		.collapsible:focus:not(.collapsible-close) .collapsible-title,
		.collapsible:not(.collapsible-close) input[type='checkbox']:checked ~ .collapsible-title {
			@apply outline-none bg-base-content bg-opacity-0;
		}

		.collapsible-content {
			@apply px-4;
			cursor: unset;
			transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
		}

		.collapsible-open .collapsible-content,
		.collapsible:focus:not(.collapsible-close) .collapsible-content,
		.collapsible:not(.collapsible-close) input[type='checkbox']:checked ~ .collapsible-content {
			@apply pb-4 opacity-100 bg-base-content bg-opacity-0;
			transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
		}

		.collapsible-open.collapsible-arrow .collapsible-title:after,
		.collapsible-arrow:focus:not(.collapsible-close) .collapsible-title:after,
		.collapsible-arrow:not(.collapsible-close)
			input[type='checkbox']:checked
			~ .collapsible-title:after {
			transform: rotate(225deg);
		}

		.collapsible-open.collapsible-plus .collapsible-title:after,
		.collapsible-plus:focus:not(.collapsible-close) .collapsible-title:after,
		.collapsible-plus:not(.collapsible-close)
			input[type='checkbox']:checked
			~ .collapsible-title:after {
			content: '−';
		}

		.collapsible-open.collapsible-sm-plus .collapsible-title:after,
		.collapsible-sm-plus:focus:not(.collapsible-close) .collapsible-title:after,
		.collapsible-sm-plus:not(.collapsible-close)
			input[type='checkbox']:checked
			~ .collapsible-title:after {
			content: '−';
		}
	}

	.collapsible {
		@apply relative grid overflow-hidden;
	}

	.collapsible-title,
	.collapsible > input[type='checkbox'],
	.collapsible-content {
		@apply row-start-1 col-start-1;
	}

	.collapsible > input[type='checkbox'] {
		@apply appearance-none opacity-0;
	}

	.collapsible-content {
		@apply row-start-2 overflow-hidden;
		max-height: 0px;
	}

	.collapsible-open .collapsible-content,
	.collapsible:focus:not(.collapsible-close) .collapsible-content,
	.collapsible:not(.collapsible-close) input[type='checkbox']:checked ~ .collapsible-content {
		max-height: 9000px;
	}
</style>
