<script lang="ts">
	//Local import
	import ContentBlock from '$lib/ContentBlock.svelte';
	import DesignElement1 from '$lib/StyleComponents/DesignElement1.svelte';

	//Input variables
	let anchor: string = 'education-sub';
	let background: string = 'hsla(var(--theme-bg-pri), 1)';
	let text: string = 'hsla(var(--theme-text-experience), 1)';
</script>

<div id={anchor} style="--color-input: {text}">
	<ContentBlock {background} {text}>
		<span slot="content-body">
			<DesignElement1 stripeColor={'--theme-text-experience'}>
				<h4 class="text-normal">
					<strong>Professional Certifications/Education:</strong>
				</h4>
				<p class="text-normal">
					I hold civilian and Department of Defense certifications in Cyber, Personnel and Physical
					Security along with a Bachelor's degree in Business Administration from Excelsior College.
					I am currently four classes from completing an MBA with an emphasis in
					Technology/Innovation Management.
				</p>

				<ul class="list-pri">
					<li class="text-normal">
						Security Professional Education and Development (SPeD) certifications:
						<ul class="list-sec">
							<li>
								<a
									title="Center for Security Excellence SFPC certification webpage."
									href="https://www.cdse.edu/certification/sfpc.html"
									>Security Professional Fundamentals</a
								> (SFPC) 3+ years
							</li>
							<li>
								<a
									title="Center for Security Excellence PSC certification webpage."
									href="https://www.cdse.edu/certification/psc.html"
									>Physical Security Certification</a
								> (PSC) 3+ years
							</li>
						</ul>
					</li>

					<li class="text-normal">
						Additional Military Training:
						<ul class="list-sec">
							<li>
								<a
									title="Navy COMSEC Management System webpage."
									href="https://www.navifor.usff.navy.mil/ncms/"
									>Navy Communications Security Management System</a
								> (NCMS) certified inspector 10+ years
							</li>
							<li>Information Systems Security Manager 7+ years</li>
							<li>Operational Security Officer 5+ years</li>
							<li>Emergency Management Officer 5+ years</li>
							<li>Classified Material Control Officer 10+ years</li>
							<li>Command Equal Opportunity Officer 2+ years</li>
						</ul>
					</li>

					<li class="text-normal">
						Non-military Education:
						<ul class="list-sec">
							<li>Bachelor's degree in Business Administration (2015)</li>
							<li>COMPTIA Security+ (2015)</li>
							<li>Sigma Beta Delta National Honor Society for Business (2019).</li>
						</ul>
					</li>
				</ul>
			</DesignElement1>
		</span>
	</ContentBlock>
</div>

<style>
	h4 {
		color: var(--color-input);
		margin-bottom: 15px;
		font-size: 1.5em;
	}

	p {
		text-indent: 30px;
		line-height: 1.5;
		color: hsl(var(--theme-text-pri));
		text-align: justify;
	}

	.list-pri,
	.list-sec {
		text-decoration: none;
		margin-left: 60px;
		line-height: 1.5;
	}
	.list-pri {
		color: hsl(var(--color-input));
	}
	.list-sec {
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
</style>
