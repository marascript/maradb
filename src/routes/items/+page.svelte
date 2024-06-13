<script>
	export let data;
</script>

<ul>
	{#each data.items as item}
		<li>{item.id} - {item.name} - {item.rarity}</li>
	{/each}
</ul>
