<script lang="ts">
	import { browser } from "$app/env";


	interface homework {
		subject: string,
		task: string,
		due: string
	};

	let pending = [];

	if(typeof localStorage != 'undefined') {
		pending = JSON.parse(localStorage.getItem("homework") ?? "[]");
	}

	function parent_factory(i: number) {
		return (e: Event) => {
			e.target.parentElement.style.opacity = "0%";
			// Wait for animation to finish
			setTimeout(() => { 
				pending.splice(i, 1); 
				// Svelte will not register that
				// `pending` has changed until
				// this is done. This is stated
				// in the documentation.
				pending = pending;
				
				if(browser) {
					localStorage.setItem("homework", JSON.stringify(pending));
				}

				e.target.parentElement.remove();
			}, 250);
		}
	}

	function add_homework() {
		let desc = document.getElementById("desc");
		let subject = document.getElementById("subject");
		let due = document.getElementById("due");

		let hw: homework = {
			subject: subject.value,
			task: desc.value,
			due: due.value,
		};

		pending.push(hw);

		pending = pending;

		localStorage.setItem("homework", JSON.stringify(pending));
	}
</script>

<h1 class="text-3xl font-bold font-serif text-center mt-8">Your reminders:</h1>
<main class="flex bg-orange-200 w-5/6 min-h-[150px] rounded-xl mx-auto mt-4">
	<div class="min-h-full w-5 bg-orange-500 rounded-tl-xl rounded-bl-xl">
		‌
	</div>
	<div class="flex flex-wrap w-full h-full mx-auto rounded-xl">
		{#each pending as pending, i}
		<div class="homework">
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
		<div class="homework">
			<input type="text" name="desc" id="desc" placeholder="Task">
			<input type="text" name="subject" id="subject" placeholder="Details">
			<label for="due" class="text-center">Due date:</label>
			<input type="date" name="due" id="due">
			<button class="font-extrabold bg-yellow-300 text-yellow-600 outline outline-yellow-300 outline-2 h-7 rounded-md" on:click={add_homework}>
				Add
			</button>
		</div>
	</div>
</main>

<style>
	.homework {
		@apply p-3 bg-white rounded-md shadow-md min-h-[8rem] m-3 max-w-fit transition-all flex flex-col;
	}

	.homework input {
		@apply outline outline-2 m-3 rounded-md;
	}
</style>