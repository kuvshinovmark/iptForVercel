<script>
    import App from "../App.svelte";
    import Header from "./addComponents/curHeader.svelte";
    import MemberCard from "./addComponents/memberCard.svelte";
    let status = localStorage.getItem("status");
    let memberList = [  {"name": "Алиса Новикова", "id": 0, "info": "Травма колена", "numWorkoutsNow": 1, "numWorkouts": 3, "dateLastReport": "24.07.2021" ,
                        "nameCurator": "Ирина Круг","imgCurator": "https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.2075048487.1626998400", "statusCurator": "куратор"},
                        {"name": "Максим Тимченко", "info": "Больше бега", "numWorkoutsNow": 2, "numWorkouts": 3, "dateLastReport": "26.07.2021" ,
                        "nameCurator": "Анна Пучкова","imgCurator": "https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.2075048487.1626998400", "statusCurator": "старший куратор", "id": 1},
                        {"name": "Антон Фёдоров", "info": "Сильная отдышка после упражнений", "numWorkoutsNow": 1, "numWorkouts": 4, "dateLastReport": "21.07.2021" ,
                        "nameCurator": "Кувшинов Марк","imgCurator": "https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.2075048487.1626998400", "statusCurator": "куратор", "id": 2}]
    let checkForSearch = 1;
</script>
 
<Header />

<div class="mt-4 m-auto w-8/12 p-4 shadow-md rounded-10px">
    <div class="flex justify-between">
        <div class="flex">
            <div>
                <p class="text-sm"><b>Поиск</b></p>
                <input class="input bg-blue-100 border-blue-100 w-60" type="text" placeholder="Участик">
            </div>
            {#if (status === "старший куратор") || (status === "руководитель направления") || (status === "администратор")}  
                <div class="ml-2">
                    <p class="text-sm"><b>Куратор</b></p>
                    <input class="input bg-blue-100 border-blue-100 w-60" type="text" placeholder="Куратор">
                </div> 
            {/if}
            {#if (status === "руководитель направления") || (status === "администратор")}  
                <div class="ml-2">
                    <p class="text-sm"><b>Старший куратор</b></p>
                    <input class="input bg-blue-100 border-blue-100 w-60" type="text" placeholder="Старший куратор">
                </div> 
            {/if}
        </div>
        <div class="flex">
            <button class="btn-blue h-10 m-c">Найти</button>
            <button class="btn-l-blue h-10 m-c ml-2">Сбросить</button>
        </div>
    </div>
    




    
    
</div>


{#if (status === "старший куратор") || (status === "руководитель направления") || (status === "куратор")}  
    <div class="mt-4 m-auto w-8/12 p-4 shadow-md rounded-10px flex justify-between">
        <div class="flex justify-between w-9/12">
            <input class="input bg-blue-100 border-blue-100 mt-2 w-5/12" type="text" placeholder="Направление тренинга">
            <!-- <button class="btn-blue p-1 h-8 m-1">Все участники</button> -->
            
            <input id="checkForSearch_1" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={1} />
            <label for="checkForSearch_1" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 m-c">
                Все участники
            </label>

            <input id="checkForSearch_2" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={2} />
            <label for="checkForSearch_2" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 m-c">
                Мои участники
            </label>

            <input id="checkForSearch_3" class="hidden" type="radio" bind:group={checkForSearch} name="checkForSearch" value={3} />
            <label for="checkForSearch_3" class="btn-white-With-gray-border h-8 pl-2 pr-2 p-0 m-c">
                На проверку
            </label>
            <!-- <button class="btn-white-With-gray-border p-0 h-8 m-1">Мои участники</button>
            <button class="btn-white-With-gray-border p-0 h-8 m-1">На проверку</button> -->
        </div>
        <p class="text-sm m-c">Нашлось 1 254 участников</p>
    </div>        
{/if}





<div class="flex flex-col">
    {#each memberList as member }
        <MemberCard {...member}/>
    {/each}
</div>

<div class="h-10"></div>


<style>
    input:checked + label {
        border-color: #2b50ed;
        background-color: #2b50ed;
        color: white;
    }
</style>