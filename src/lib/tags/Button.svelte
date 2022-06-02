<script>
	import Button from '$lib/actions/Button.svelte';
</script>

<div class="">
	<Button
		componentClass="w-1/2 flex justify-center  my-6 max-w-3xl bg-primary text-primary-content rounded-full "
	>
		<slot>empty button</slot>
	</Button>
</div>
