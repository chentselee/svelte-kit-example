<script>
	import { counter, increment, decrement, reset } from '$lib/counter';
</script>

<section>
	<h2>{$counter}</h2>
	<div class="buttons">
		<button on:click={increment}>increment</button>
		<button on:click={reset}>reset</button>
		<button on:click={decrement}>decrement</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		color: orangered;
	}

	.buttons {
		display: flex;
		gap: 1rem;
	}
</style>
