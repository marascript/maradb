<script>
	export let data;
</script>

<ul>
	{#each data.categories as category}
		<li><a href="/categories/{category.id}">{category.name}</a></li>
	{/each}
</ul>
