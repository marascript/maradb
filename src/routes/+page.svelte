<script>
	export let data;
</script>

<ul>
	{#each data.items as item}
		<li>{item.id} - {item.name} - {item.categories.name}</li>
	{/each}
</ul>
