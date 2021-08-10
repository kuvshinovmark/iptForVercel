<script>
    import { push } from "svelte-spa-router";

    import Header from "./addComponents/memHeader.svelte";
    import Training from "./addComponents/trainingCard.svelte";

    let massData = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    let monthYear = "Март 2021";
    let dateUpdating = "23.03.2020";
    let strengthTraining = "Да, тип 4";
    let sumStrengthInWeek = "5 и более";
    let pharma = "нет";
    let equipment = "Нет тренажера Смита";
    let otherTraining = "Хожу в фитнес клуб (Zumba или эллиптический тренажер). Но делаю это недостаточно";



    let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    function toDay(id) {
        push("/member_day/"+id+".07.2021");
    }
</script>
 
<Header />

<div>
    <div class="flex ml-5">
        <p><b>Анкета участника</b></p>
        <svg class="ml-2 mt-auto mb-auto" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5996 3.39108C14.1519 2.4345 13.8241 1.21131 12.8675 0.65903C11.911 0.106745 10.6878 0.434496 10.1355 1.39108L9.6355 2.25711L13.0996 4.25711L13.5996 3.39108ZM8.6355 3.98916L4.1355 11.7834L7.5996 13.7834L12.0996 5.98916L8.6355 3.98916Z" fill="#2B50ED"/>
            <path d="M4.13574 11.7838L7.59984 13.7838L4.33774 15.6367L4.13574 11.7838Z" fill="#2B50ED"/>
            <rect y="17" width="12" height="1" fill="#2B50ED"/>
        </svg>    
    </div>
    <p class="text-gray-500 text-sm ml-5">Обновлено {dateUpdating}</p>
    <div class="flex justify-around">
        <div class="p-2 m-4 flex justify-between w-6/12 border-2 rounded-10px">
            <div>
                <p class="text-gray-500">Силовой тренинг</p>
                <p>{strengthTraining}</p>
            </div>
            <div>
                <p class="text-gray-500">Количество силовых в неделю</p>
                <p>{sumStrengthInWeek}</p>
            </div>
            <div>
                <p class="text-gray-500">Фарма</p>
                <p>{pharma}</p>
            </div>
            <div>
                <p class="text-gray-500">Оборудование</p>
                <p>{equipment}</p>
            </div>
        </div>
        <div class="p-2 m-4 w-6/12 border-2 rounded-10px">
            <p class="text-gray-500">Прочий тренинг</p>
            <p>{otherTraining}</p>
        </div>
    </div>
</div>

<div class="ml-5 text-xl flex">
    <b>{monthYear}</b>
    <div class="mt-auto mb-auto ml-1">
        <svg width="14" height="11" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19151 0.696149C4.60073 0.286927 5.39927 0.323139 5.80849 0.73236L10 4.92387L8.51808 6.40579L4.93247 2.91903L1.48192 6.36958L0 4.88766L4.19151 0.696149Z" fill="#30333D"/>
        </svg>
        <svg width="14" height="11" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.80849 6.11537C5.39927 6.5246 4.60073 6.48838 4.19151 6.07916L3.8147e-06 1.88766L1.48192 0.405734L5.06753 3.89249L8.51808 0.441945L10 1.92387L5.80849 6.11537Z" fill="#30333D"/>
        </svg>       
    </div>
</div>

<div class="grid grid-cols-7 mt-8">
    {#each daysOfWeek as day}
        <p class="shadow text-right pr-1 pb-1 text-gray-500">{day}</p>
    {/each}
    {#each massData as id}
        <div class="shadow min-h-20">
            
            {#if id/4===4}
                <div class="flex justify-between">
                    <button on:click={() => toDay(id)}>подробнее</button>
                    <p class="text-right mr-2 text-gray-300">{id}</p>
                </div>
                <Training/>
            {:else}
                <p class="text-right mr-2 text-gray-300">{id}</p>
            {/if}
        </div>
    {/each}
</div>
