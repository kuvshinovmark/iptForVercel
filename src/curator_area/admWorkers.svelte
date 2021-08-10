<script>
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
 
    import Header from "./addComponents/curHeader.svelte";
    import WorkerCard from "./addComponents/workerCard.svelte";
    
    let checkForSearch = 1;

    onMount(() => {
        if (localStorage.getItem("status") !== "администратор") {
            push("/curator_members");
        }
    });
</script>

<Header />

<div class="mt-4 m-auto w-8/12 p-4 shadow-md rounded-10px flex justify-between">
    <div class="flex justify-between w-full">
        <div>
            <p class="text-sm"><b>Поиск</b></p>
            <input class="input bg-blue-100 border-blue-100 mt-2 w-60" type="text" placeholder="Начни вводить имя...">
        </div>
        
        
        
        <input id="checkForSearch_1" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={1} />
        <label for="checkForSearch_1" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 mt-7">
            Все работники
        </label>

        <input id="checkForSearch_2" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={2} />
        <label for="checkForSearch_2" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 mt-7">
            Кураторы
        </label>

        <input id="checkForSearch_3" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={3} />
        <label for="checkForSearch_3" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 mt-7">
            Руководители
        </label>

        <input id="checkForSearch_4" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={4} />
        <label for="checkForSearch_4" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 mt-7">
            Администраторы
        </label>

        <div class="flex mt-6">
            <button class="btn-blue h-10">Найти</button>
            <button class="btn-l-blue h-10 ml-2">Сбросить</button>
        </div>
    </div>
</div>     

<div class="grid grid-cols-2">
    <WorkerCard/>
    <WorkerCard/>
    <WorkerCard/>
    <WorkerCard/>
    <WorkerCard/>
    <WorkerCard/>
</div>


<style>
    input:checked + label {
        border-color: #2b50ed;
        background-color: #2b50ed;
        color: white;
    }
</style>