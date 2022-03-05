<script lang="ts">
	import Homework from "../lib/homework.svelte";
	import Timetable from "../lib/timetable.svelte";

	import { browser } from "$app/env";
	import { writable } from "svelte/store";

	interface timing {
		name: string,
		info: string,
		// 24-hour time.
		timing: [number, number]
	};

	export const timetable = writable<timing[]>([

	]);

	if(browser) {
		if (!localStorage.getItem("Init")) {
			window.location.replace("/init")
		}
	}

	const d = new Date().toDateString();
</script>

<Timetable timetable={
	[
		{
			name: "Science",
			info: "Mr. Scientist",
			timing: [740, 800]
		},
		{
			name: "Science",
			info: "Mr. Scientist",
			timing: [800, 855]
		},
		{
			name: "Science",
			info: "Mr. Scientist",
			timing: [855, 950]
		},
	]
} />

<Homework pending={[
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
	{
		subject: "Science",
		task: "Do science",
		due: d,
	},
]}></Homework>