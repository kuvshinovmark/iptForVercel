<script>
import { onMount } from "svelte";

    import { push } from "svelte-spa-router";

    let statusOpenPage = 0;// 0 - curator_members, 1 - curator_exercises, 2 - curator_settings, 3 - admin_workers
    let Text = "hover:text-gray-500";
    let TextBold = "font-semibold";  
    onMount(()=>{
        // alert(window.location.hash.slice(2));
        let hash = window.location.hash.slice(2);
        if(hash === "curator_members") statusOpenPage = 0;
        if(hash === "curator_exercises") statusOpenPage = 1;
        if(hash === "curator_settings") statusOpenPage = 2;
        if(hash === "admin_workers") statusOpenPage = 3;
    })
    function toMembers() {
        push("/curator_members");
    }
    function toExercises() {
        push("/curator_exercises");
    }
    function toSettings() {
        push("/curator_settings");
    }
    function toWorkers(){
        push("/admin_workers");
    }
    function logOut(){
        alert("Выход...");
        localStorage.clear();
        push("/");
    }
</script>

<div class="flex justify-around mb-4 h-20 shadow-md">
 
    <div class="mt-auto mb-auto">
        <p><b>Physical Transformation</b></p>
        <p>ИПТ/Бодибилдинг</p>
    </div>



    {#if localStorage.getItem("status") === "администратор"}
        <div class="flex justify-between mt-auto mb-auto w-3/12">
            {#if statusOpenPage === 0}
                <p on:click={toMembers} class={TextBold}>Список участников</p>
            {:else}
                <p on:click={toMembers} class={Text}>Список участников</p>
            {/if}
            {#if statusOpenPage === 3}
                <p on:click={toWorkers} class={TextBold}>Список работников</p>
            {:else}
                <p on:click={toWorkers} class={Text}>Список работников</p>
            {/if}
            
        </div>
    {:else}
        <div class="flex justify-between mt-auto mb-auto w-4/12">
            {#if statusOpenPage === 0}
                <p on:click={toMembers} class={TextBold}>Список участников</p>
            {:else}
                <p on:click={toMembers} class={Text}>Список участников</p>
            {/if}
            {#if statusOpenPage === 1}
                <p on:click={toExercises} class={TextBold}>База упражнений</p>
            {:else}
                <p on:click={toExercises} class={Text}>База упражнений</p>
            {/if}
            {#if statusOpenPage === 2}
                <p on:click={toSettings} class={TextBold}>Настройки</p>
            {:else}
                <p on:click={toSettings} class={Text}>Настройки</p>
            {/if}
        </div>
    {/if}
    
    
    <div class="flex">
        <img class="w-12 h-12 mt-auto mb-auto mr-2 rounded-full" src="https://rusmammo.ru/wp-content/uploads/2018/04/received_744994212285509-526x526.jpeg" alt="">
        <div class="mr-4 mt-auto mb-auto">
            <p>{localStorage.getItem("name")}</p>
            <p class="text-gray-400">{localStorage.getItem("status")}</p>
        </div>
        
        <svg class="mt-auto mb-auto mr-2" width="1" height="50" viewBox="0 0 1 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="50" fill="#E0E8F6"/>
        </svg>
            
        <svg on:click={logOut} class="mt-auto mb-auto" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H12" stroke="#FC8A79" stroke-width="2" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6917 9.26316C20.1028 9.67424 20.1028 10.3407 19.6917 10.7518L14.4285 16.015L12.9399 14.5263L16.4061 11.0601L8 11.0601L8 8.95485L16.4061 8.95485L12.9399 5.48865L14.4285 4L19.6917 9.26316Z" fill="#FC8A79"/>
        </svg>
            
    </div>
    
</div>

<!-- <div>
    <p on:click={() => localStorage.setItem("status", "куратор")}>куратор</p>
    <p on:click={() => localStorage.setItem("status", "старший куратор")}>старший куратор</p>
    <p on:click={() => localStorage.setItem("status", "руководитель направления")}>руководитель направления</p>
    <p on:click={() => localStorage.setItem("status", "администратор")}>администратор</p>
</div> -->
