<script>
	export let data;
</script>

<a href="/">Home</a>

<ul>
	{#each data.categories as category}
		<li>
			<a href="/categories/{category.id}">{category.name}</a> Qty: {category.qty} Avg: {category.avg_price}
			Min: {category.min_price} Max: {category.max_price}
		</li>
	{/each}
</ul>
