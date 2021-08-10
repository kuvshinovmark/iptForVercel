<script>
    import { onMount } from "svelte";

    export let name = "Трен #1 РАБ 1";
    export let additName = "Блок: “Качаем жопу”";
    export let description = "ТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировкаТренировка";
    export let status = "в процессе"; //в процессе, выполнено, отменено
    let descriptionState = false;
    let classForBox = "m-2 m-autow-11/12 break-words rounded p-1";
    let classForStatus = "mt-2 mb-2 w-max pl-2 pr-2 text-white rounded-full";
    onMount(() => {
        if (status === "в процессе") {
            classForBox += " bg-gray-100";
            classForStatus += " bg-gray-400";
        } else if (status === "выполнено") {
            classForBox += " bg-green-100";
            classForStatus += " bg-green-400";
        } else if (status === "отменено") {
            classForBox += " bg-red-100";
            classForStatus += " bg-red-400";
        } else {
            alert("Ошибка статуса тренировки в календаре");
        }
    });
</script>

<div class={classForBox}>
    <div class="flex" on:click={() => {descriptionState = !descriptionState}}>
        <p><b>{name}</b></p>
        {#if descriptionState}
            <svg class="mt-auto mb-auto ml-1" width="12" height="8" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49348 0.386233C3.83455 0.0451612 4.5001 0.0753421 4.84117 0.416414L8.33465 3.90989L7.09952 5.14502L4.11104 2.23893L1.23513 5.11484L0 3.87971L3.49348 0.386233Z" fill="#30333D"/>
            </svg>    
        {:else}
            <svg class="mt-auto mb-auto ml-1" width="12" height="8" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84118 4.75879C4.50011 5.09986 3.83455 5.06968 3.49348 4.72861L7.62939e-06 1.23513L1.23514 0L4.22362 2.90609L7.09953 0.0301805L8.33466 1.26531L4.84118 4.75879Z" fill="#30333D"/>
            </svg>
        {/if}   
    </div>
    <p>{additName}</p>
    <p class={classForStatus}>{status}</p>
    {#if descriptionState}
        <p>{description}</p>
    {/if}
</div>
