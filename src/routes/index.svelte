<script>
	import Homework from "../lib/homework.svelte";
	import Timetable from "../lib/timetable.svelte";

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