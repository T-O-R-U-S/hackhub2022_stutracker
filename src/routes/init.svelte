<script lang="ts">
	import { timetable } from "./store.js";
	import { browser } from '$app/env';

	let getHour = (time: number): number =>  Math.floor(time / 100)
	let getMinute = (time: number): string =>  { 
			let tmp = time - (Math.floor(time / 100) * 100);
			let out = tmp.toString().split("");
			if(out.length == 1) {
				out.unshift("0")
			};
			return out.join("")
		}

	interface timing {
		name: string,
		info: string,
		// 24-hour time.
		timing: [number, number]
	};

	let subjects: timing[] = [];

	function addSubject() {
		let startEl = document.getElementById("start");
		let endEl = document.getElementById("end");

		[
			startEl,
			endEl
		].map(
			e => e.classList.remove("outline-red-600")
		);

		let timeRegex = /[0-9]{2}:[0-9]{2}/;

		if(!timeRegex.test(startEl.value) || !timeRegex.test(endEl.value)) {
			[
				startEl,
				endEl
			].map(
				e => e.classList.add("outline-red-600")
			);
			return;
		}

		let start = parseInt(startEl.value.replace(":", ""));
		let end = parseInt(endEl.value.replace(":", ""));

		let subject = document.getElementById("subject").value;
		let info = document.getElementById("info").value;

		// subjects.push() is not used due to how reactivity
		// works in Svelte; it won't update the DOM.
		subjects = [...subjects, {
				name: subject,
				info: info,
				timing: [start, end]
			}];

		document.getElementById("start").value = "";
		document.getElementById("end").value = "";
		
		document.getElementById("subject").value = "";
		document.getElementById("info").value = "";
	}

	function remSubjectFactory(i: number) {
		return () => { 
			subjects = subjects.filter((_, j) => i !== j);
		};
	}

	function submit() {
		timetable.set(subjects);
		if(browser) {
			localStorage.setItem("init", "true");
			localStorage.setItem("subjects", JSON.stringify(subjects));
			window.location.replace("/hackhub2022_stutracker")
		}
	}
</script>
<div class="flex flex-col content-center justify-center">
<h1 class="text-center font-bold text-6xl">Looks like this is your first time!</h1>
<h2 class="text-center font-extrabold text-4xl">We just need your daily timetable to get you setup!</h2>

<table class="bg-orange-200 lg:rounded-xl p-3 lg:w-5/6 w-full mx-auto mt-12 shadow-md">
	<tr>
		<th>Timing</th>
		<th>Task</th>
		<th>Extra info (optional)</th>
		<th></th>
	</tr>
	{#each subjects as subject, i}
	<tr>
		<td class="text-center">{getHour(subject.timing[0])}:{getMinute(subject.timing[0])}-{getHour(subject.timing[1])}:{getMinute(subject.timing[1])}</td>
		<td class="text-center">{subject.name}</td>
		<td class="text-center">{subject.info}</td>
		<td><button class="rem-button" on:click={remSubjectFactory(i)}>-</button></td>
	</tr>
	{/each}
	<tr>
		<td><input type="time" name="start" id="start"> <input type="time" name="end" id="end"></td>
		<td><input type="text" name="subject" id="subject" placeholder="Science, Math, Daily Standup Meeting"></td>
		<td><input type="text" name="info" id="info" placeholder="Extra info like teacher name or room number"></td>
		<td><button class="green-button w-7 m-3" on:click={addSubject}>+</button></td>
	</tr>
</table>

<button class="font-sans w-28 text-center green-button mt-3 ml-[50%] -translate-x-1/2" on:click={submit}>Ready to go!</button>
</div>
<style lang="postcss">
	input[type="text"] {
		@apply outline outline-2 rounded-sm h-7 lg:w-[90%] lg:ml-10;
	}

	input[type="time"] {
		@apply outline outline-2 rounded-sm h-7 lg:w-[40%] lg:ml-2;
	}

	.rem-button {
		@apply font-extrabold bg-red-300 text-red-600 w-7 outline outline-red-300 outline-2 m-3 h-7 rounded-md;
	}

	.green-button {
		@apply font-extrabold bg-green-300 text-green-600 outline outline-green-300 outline-2 h-7 rounded-md;
	}
</style>