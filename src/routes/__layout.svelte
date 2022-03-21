<script lang="ts">
	import '../global.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';

	setGlobalOptions({
		offset: 0,
		duration: 1500,
		easing: cubicInOut
	});
</script>

<Header />
<div class="layout-container">
	<slot />
</div>
<Footer />

<style>
	.layout-container {
		min-height: 90vh;
		width: 100%;
	}
</style>
