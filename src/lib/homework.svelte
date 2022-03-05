<script lang="ts">
	interface homework {
		subject: string,
		task: string,
		due: Date
	};

	export let pending: homework[];

	function parent_factory(i: number) {
		return (e: Event) => {
			e.target.parentElement.style.opacity = "0%";
			pending.splice(i, -1);
			// Svelte will not register that
			// pending has changed until
			// this is done. This is stated
			// in the documentation.
			pending = pending;
			e.target.parentElement.remove();
		}
	}
</script>

<h1 class="text-3xl font-bold font-serif text-center mt-8">Your pending homework:</h1>
<main class="flex bg-orange-200 w-5/6 min-h-[150px] rounded-xl mx-auto mt-4">
	<div class="min-h-full w-5 bg-orange-500 rounded-tl-xl rounded-bl-xl">
		‌
	</div>
	<div class="flex flex-wrap w-full h-full mx-auto rounded-xl">
		{#each pending as pending, i}
		<div class="p-3 bg-white rounded-md shadow-md h-32 m-3 max-w-fit transition-all">
				<h1>{pending.task}</h1>
				<h1>{pending.subject}</h1>
				<h1>{pending.due}</h1>
				<button class="w-full align-bottom bg-green-200 text-green-600 rounded-sm mt-2" on:click={parent_factory(i)}>
					Done
				</button>
		</div>
		{/each}
		{#if pending.length == 0}
		<h1 class="text-center font-semibold w-full m-5">
			Looks like you're done!
		</h1>
		{/if}
	</div>
</main>