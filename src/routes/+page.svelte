<script>
	export let data;
</script>

<ul>
	{#each data.items as item}
		<li>{item.name}</li>
	{/each}
</ul>
