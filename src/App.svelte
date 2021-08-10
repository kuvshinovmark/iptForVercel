<script>
	import Router from "svelte-spa-router";
	import Tailwindcss from "./Tailwindcss.svelte";

	import authMain from "./authorization/authMain.svelte";

	import curMembers from "./curator_area/curMembers.svelte";
	import curSettings from "./curator_area/curSettings.svelte";
	import curExercises from "./curator_area/curSportExercises.svelte";

	import admWorkers from "./curator_area/admWorkers.svelte";

	// import memMain from "./member_area/memMain.svelte";
	import memCalendar from "./member_area/memCalendar.svelte";
	import memData from "./member_area/memData.svelte";
	import memChat from "./member_area/memChat.svelte";
	import memDay from "./member_area/memDay.svelte";

	const routes = {
		"/": authMain,

		"/curator_settings": curSettings,
		"/curator_members": curMembers,
		"/curator_exercises": curExercises,

		"/admin_workers": admWorkers,

		"/member_calendar": memCalendar,
		"/member_day/:date": memDay,
		"/member_data": memData,
		"/member_chat": memChat,
	};
</script>

<Router {routes} />
