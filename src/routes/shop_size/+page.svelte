<script>
	let newCost = 50;
	let currentSize = 1;
	let desiredSize = 2;

	function calculateSize() {
		const neededLevels = desiredSize - currentSize;
		const cost = currentSize * 50;

		newCost = cost * neededLevels + 50 * (((neededLevels - 1) * neededLevels) / 2);
	}
</script>

<div>
	<h1>Shop Size Calculator</h1>
	<input
		bind:value={currentSize}
		on:change={calculateSize}
		type="number"
		min="1"
		max={desiredSize - 1}
	/>
	<input bind:value={desiredSize} on:change={calculateSize} type="number" min={currentSize + 1} />

	<br />
	{newCost}
</div>
