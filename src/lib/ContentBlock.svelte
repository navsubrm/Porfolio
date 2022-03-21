<script lang="ts">
	//Input variables
	export let background: string = 'hsla(var(--theme-bg-pri), 1)';
	export let text: string = 'hsla(var(--theme-text-pri))';
</script>

<div class="container" style="--color: {background}; --text: {text};">
	<div class="content-title">
		<slot name="content-title" />
	</div>

	<div class="content-body">
		<slot name="content-body" />
	</div>
</div>

<style>
	.container {
		position: relative;
		background-color: var(--color);
		color: var(--text);
		padding: 70px 20px;
	}

	.content-body {
		padding: 20px 10px;
	}

	@media only screen and (max-width: 900px) {
		.content-body {
			padding: 20px 5px;
		}
	}

	@media only screen and (max-width: 700px) {
		.content-title {
			top: 95px;
		}
	}
</style>
