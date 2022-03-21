<script lang="ts">
	//Local import
	import ContentBlock from '$lib/ContentBlock.svelte';
	import DesignElement1 from '$lib/StyleComponents/DesignElement1.svelte';

	//Input variables
	let anchor: string = 'general-sub';
	let background: string = 'hsla(var(--theme-bg-pri), 1)';
	let text: string = 'hsla(var(--theme-text-experience), 1)';
</script>

<div id={anchor} style="--color-input: {text}">
	<ContentBlock {background} {text}>
		<span slot="content-body">
			<DesignElement1 stripeColor={'--theme-text-experience'}>
				<h4 class="text-normal">
					<strong>More than two decades of professional experience in the US Navy:</strong>
				</h4>
				<p class="text-normal">
					Served seven of my first sixteen years as a Chief Petty Officer, training and leading five
					to fifteen person submarine communications and electronic warfare teams.
				</p>
				<p class="text-normal">
					The last decade has been as an Information Warfare Officer, evaluating submarine
					communications and network readiness. Specifically addressing:
				</p>
				<ul class="list-pri text-normal">
					<li>Front-line Supervisor and department head training.</li>
					<li>Communications (COMSEC) security material policy compliance.</li>
					<li>Personnel and phyiscal security policy compliance.</li>
					<li>Cyber security program management:</li>
					<ul class="list-sub">
						<li>Policy compliance</li>
						<li>Configuration managment</li>
						<li>Disaster recovery</li>
						<li>Incident response</li>
					</ul>
				</ul>
				<p class="text-normal">
					I also spent six years as the team lead of a fifty person crisis and emergency management
					team developing and testing response, recovery, and continuity of operation plans.
				</p>
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
	.list-sub {
		text-decoration: none;
		margin-left: 60px;
	}
</style>
