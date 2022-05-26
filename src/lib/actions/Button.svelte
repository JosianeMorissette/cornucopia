<script lang="ts">
	import '/static/button_animation.css';
	export let componentClass = '';

	export let handleClick = () => {};
</script>

<button
	on:click={handleClick}
	class="{componentClass} hover:text-primary button flex items-center rounded-md"
>
	<slot>Empty button</slot>
</button>
