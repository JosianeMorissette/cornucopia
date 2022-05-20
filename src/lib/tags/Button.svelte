<script lang="ts">
	export let content: string;
</script>

<div class="">
	<button class="btn btn-sm w-1/2 normal-case rounded-full ">
		<div class="h-6 flex items-center ">
			<img
				alt="Office"
				aria-hidden="true"
				class="w-4 h-4 mr-2  "
				src="/static/BoldBlackIcon44x44.svg"
			/>

			<div>{content}</div>
		</div></button
	>
</div>
