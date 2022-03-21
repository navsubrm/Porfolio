<script>
	import Link from '$lib/Link.svelte';
</script>

<footer>
	<div class="footer">
		<div>
			<p>Find me on:</p>
			<Link
				url="https://www.linkedin.com/in/nathan-m-444055178/"
				ariaLabel="Link to Linked In profile for Nathan Meeker."
			>
				<img src="/static/linkedin-logo-svgrepo-com.svg" alt="Linked In Icon" />
			</Link>

			<Link url="https://github.com/navsubrm" ariaLabel="Link to GitHub profile for Nathan Meeker.">
				<img src="/static/github-svgrepo-com.svg" alt="GitHub Icon" />
			</Link>

			<Link
				url="https://portfolium.com/NathanMeeker2"
				ariaLabel="Link to Portfolium profile for Nathan Meeker."
			>
				<img src="/static/portfolium.svg" alt="" />
			</Link>

			<Link url="/contact" ariaLabel="Link to my contact page to email me.">
				<img src="/static/at-svgrepo-com.svg" alt="At symbol" />
			</Link>
		</div>
	</div>
</footer>

<style>
	footer {
		bottom: 0;
		min-height: 5vh;
		margin-top: 5px auto;
	}

	footer div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: hsla(var(--theme-bg-pri), 1);
		z-index: 2;
	}

	footer p {
		color: var(--theme-text-pri);
	}
</style>
