<script lang="ts">
	interface timing {
		name: string,
		info: string,
		// 24-hour time.
		timing: [number, number]
	};

	export let timetable: timing[];

	let getHour = (time: number): number =>  Math.floor(time / 100)
	let getMinute = (time: number): number =>  { 
			let out = time - (Math.floor(time / 100) * 100);
			out = out.toString().split("");
			if(out.length == 1) {
				out.unshift("0")
			};
			return out.join("")
		}
</script>

<h1 class="text-3xl font-bold font-serif text-center mt-12">Timetable for today:</h1>
<main class="bg-orange-200 flex flex-wrap flex-row h-56 w-5/6 mx-auto mt-4 p-3 rounded-xl shadow-sm">
	{#each timetable as time}
		<div class="p-4 bg-white rounded-xl shadow-md m-2 min-w-fit flex flex-col">
			<p class="font-bold text-2xl">{time.name}</p>
			<p class="font-semibold text-2xl">{getHour(time.timing[0])}:{getMinute(time.timing[0])} - {getHour(time.timing[1])}:{getMinute(time.timing[1])}</p>
			<p class="font-light text-gray-500">{time.info}</p>
		</div>
	{/each}
</main>