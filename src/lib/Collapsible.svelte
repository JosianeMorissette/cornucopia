<!-- Options: collapsible-plus, collapsible-arrow, collapsible-sm-plus collapsible-sm-arrow-->
<script lang="ts">
	import '/static/collapsible_styled.css';
	import '/static/collapsible_unstyled.css';
	let componentClass = '';
	export { componentClass as class };

	export let open = false;

	export function handleClick() {
		open = !open;
	}
</script>

<div class="collapsible {componentClass} ">
	<input type="checkbox" on:click={handleClick} />
	<div class="collapsible-title">
		<slot name="title" />
	</div>
	<div class="collapsible-content ">
		<slot name="content" />
	</div>
</div>
