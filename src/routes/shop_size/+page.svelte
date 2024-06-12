<script>
	let newCost = 0;
	let currentSize = 0;
	let desiredSize = 0;

	function calculateSize() {
		const neededLevels = desiredSize - currentSize;
		const cost = currentSize * 50;
		newCost = cost * neededLevels + 50 * (((neededLevels - 1) * (neededLevels - 1 + 1)) / 2);
	}
</script>

<div>
	<h1>Shop Size Calculator</h1>
	<input bind:value={currentSize} on:change={calculateSize} type="number" />
	<input bind:value={desiredSize} on:change={calculateSize} type="number" />

	{newCost}
</div>
