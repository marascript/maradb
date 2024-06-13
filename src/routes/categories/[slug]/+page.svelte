<script>
	export let data;
</script>

<a href="/categories">Back</a>
<a href="https://www.marapets.com/wishlist.php?do=browse&id={data.category}" target="_blank"
	>View on Marapets</a
>

<ul>
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
