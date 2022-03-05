<script lang="ts">
	import { browser } from "$app/env";

	import { timetable } from "../routes/store";

	let times;

	timetable.subscribe((v: any) => times = v);

	if(browser) {
		timetable.set(JSON.parse(localStorage.getItem("subjects")));	
	}

	let getHour = (time: number): number =>  Math.floor(time / 100)
	let getMinute = (time: number): string =>  { 
			let tmp = time - (Math.floor(time / 100) * 100);
			let out: string[] = tmp.toString().split("");
			if(out.length == 1) {
				out.unshift("0")
			};
			return out.join("")
		}
	
	let sure = false;
	
	function confirm(e: Event) {
		if(!sure) {
			e.target.innerText = "You sure?"
			sure = true;
			return
		}
		
		window.location.replace("/hackhub2022_stutracker/init")
	}
</script>

<h1 class="text-3xl font-bold font-serif text-center mt-12">Your daily timetable:</h1>
<main class="bg-orange-200 flex flex-col lg:flex-row flex-wrap min-h-[7rem] w-5/6 mx-auto mt-4 p-3 rounded-xl shadow-sm">
	{#each times as time}
		<div class="p-4 bg-white rounded-xl shadow-md m-2 min-w-fit flex flex-col">
			<p class="font-bold text-2xl">{time.name}</p>
			<p class="font-semibold text-2xl">{getHour(time.timing[0])}:{getMinute(time.timing[0])} - {getHour(time.timing[1])}:{getMinute(time.timing[1])}</p>
			<p class="font-light text-gray-500">{time.info}</p>
		</div>
	{/each}
</main>
<button class="font-light text-sm bg-red-300 text-red-600 outline outline-red-300 outline-2 m-3 p-1 h-7 rounded-md ml-[10%]" on:click={confirm}>
	Reset timetable
</button>