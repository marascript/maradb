<script>
	export let data;
</script>

<a href="/categories">Back</a>

<ul>
	{#each data.items as item}
		<li>{item.id} - {item.name} - {item.rarity}</li>
	{/each}
</ul>
