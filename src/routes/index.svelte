<script lang="ts">
	import Homework from "../lib/homework.svelte";
	import Timetable from "../lib/timetable.svelte";

	import { browser } from "$app/env";
	import Quote from "$lib/quote.svelte";

	if(browser) {
		if (!localStorage.getItem("init")) {
			window.location.replace("/hackhub2022_stutracker/init")
		}
	}
</script>

<Timetable />

<Quote></Quote>

<Homework></Homework>