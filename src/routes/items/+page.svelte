<script>
	export let data;
</script>

<ul>
	<!-- TODO: Forms work for a few times then stop -->
	{#each data.items as item}
		<li>{item.id} - {item.name} - {item.rarity}</li>
		<form method="post" target="_blank" action="https://www.marapets.com/shopsearch.php?do=search">
			<input name="type" hidden value="2" />
			<input name="item" hidden value={item.name} />
			<input type="submit" value="User Shops" />
		</form>

		<form
			method="post"
			target="_blank"
			action="https://www.marapets.com/shopsearch.php?do=gallerysearch"
		>
			<input name="type" hidden value="2" />
			<input name="item" hidden value={item.name} />
			<input type="submit" value="Galleries" />
		</form>
	{/each}
</ul>
