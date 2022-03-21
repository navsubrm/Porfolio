<script lang="ts">
	//Local import
	import ContentBlock from '$lib/ContentBlock.svelte';
	import DesignElement1 from '$lib/StyleComponents/DesignElement1.svelte';

	//Input variables
	let anchor: string = 'web-development-sub';
	let background: string = 'hsla(var(--theme-bg-pri), 1)';
	let text: string = 'hsla(var(--theme-text-experience), 1)';
</script>

<div id={anchor} style="--color-input: {text}">
	<ContentBlock {background} {text}>
		<span slot="content-body">
			<DesignElement1 stripeColor={'--theme-text-experience'}>
				<h4 class="text-normal">
					<strong>More than three years of web-development:</strong>
				</h4>
				<p class="text-normal">
					I have administered Microsoft SharePoint sites across three organizations. When COVID-19
					changed work environments gobally, the US Navy was no exception. At the onset I took a
					break from my MBA to focus on learning HTML, CSS, JavaScript to quickly develop in-house
					solutions to telework obstacles. Though dramatically improved from where I started, I am
					actively seeking a mentor and some team projects with which to engage. If you stumbled
					across this site and are interested in mentoring or collaborating, contact me.
				</p>
				<p class="text-normal">
					I have experience with the following tools and frameworks among others:
				</p>
				<div id="logo-block" class="center">
					<img src="/css-3.svg" alt="CSS logo" />
					<img src="/html-5.svg" alt="HTML logo" />
					<img src="/javascript.svg" alt="JavaScript logo" />
					<img src="/mongodb.svg" alt="Mongo DB logo" />
					<img src="/node.svg" alt="Node logo" />
					<img src="/reactjs.svg" alt="React JS logo" />
					<img src="/svelte.svg" alt="Svelte logo" />
				</div>
				<p class="text-normal">
					I have built apps for tracking personnel security clearance data, organizational
					onboarding programs, a submarine communications simulator, and trouble ticket management
					along with smaller personal projects, which I can share from my <a
						aria-label="Link to navsubrm's git hub profile"
						href="https://github.com/navsubrm">GitHub</a
					>
					or
					<a aria-label="Link to navsubrm's Codepen profile" href="https://codepen.io/navsubrm"
						>Codepen</a
					> if you are interested. I keep most of my work private due to its purpose, but if you ask
					and I can verify you, I would be happy to share them.
				</p>
			</DesignElement1>
		</span>
	</ContentBlock>
</div>

<style>
	h4 {
		color: var(--color-input);
		margin-bottom: 15px;
		text-align: left;
		width: 100%;
		font-size: 1.5em;
	}

	p {
		text-indent: 30px;
		line-height: 1.5;
		text-align: justify;
		color: hsl(var(--theme-text-pri));
	}

	a,
	a:visited {
		color: var(--text);
	}

	a:hover,
	a:focus {
		cursor: pointer;
		color: hsl(var(--theme-text-black));
	}

	#logo-block {
		padding: 30px;
		margin: 15px;
		gap: 65px;
	}
	#logo-block img {
		scale: 1.7;
		justify-content: space-evenly;
		align-items: center;
	}

	@media only screen and (max-width: 1000px) {
		h4,
		p {
			width: 90%;
		}

		#logo-block {
			gap: 20px;
		}
		#logo-block img {
			scale: 1;
		}
	}
</style>
