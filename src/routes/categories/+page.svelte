<script>
	export let data;
</script>

<ul>
	{#each data.categories as category}
		<li>{category.id} - {category.name}</li>
	{/each}
</ul>
