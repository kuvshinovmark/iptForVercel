<script>
    import { authState } from "./stores"; // 0 - signIn (default), 1 - signUp
    import SignIn from "./signIn.svelte";
    import SignUp from "./signUp.svelte";
</script>

{#if $authState === 0}
    <SignIn />
{:else if $authState === 1}
    <SignUp />
{:else}
    <p>Error - некоректный путь</p>
{/if}
