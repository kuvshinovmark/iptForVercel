<script>
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import Header from "./addComponents/curHeader.svelte";
    onMount(() => {
        if (localStorage.getItem("status") === "администратор") {
            push("/curator_members");
        }
    });
</script>

<Header />
<h1>Curator settings</h1>