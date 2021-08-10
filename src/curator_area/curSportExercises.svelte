<script>
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import Header from "./addComponents/curHeader.svelte";
    
    let exercisesList = [
        {nameBox: "Разминка", winState: false, exeList: ["Бег зал", "Бег (улица)", "Эллипс", "Прыжки со скакалкой", "Берпи"]},
        {nameBox: "Основные", winState: false, exeList: ["Бег зал", "Бег (улица)", "Эллипс", "Прыжки со скакалкой", "Берпи"]},
        {nameBox: "Финишеры", winState: false, exeList: ["Бег зал", "Бег (улица)", "Эллипс", "Прыжки со скакалкой", "Берпи"]},
        {nameBox: "Шаблоны", winState: false, exeList: ["Бег зал", "Бег (улица)", "Эллипс", "Прыжки со скакалкой", "Берпи"]}
    ]

    let weekList = [
        {name: "1 неделя", date: [  {nameDay: "Пн", workout: []}, 
                                    {nameDay: "Вт", workout: [["бег", "растяжка"],["отжимания"],["бег","прыжки","подтягивания"]]}, 
                                    {nameDay: "Ср", workout: []}, 
                                    {nameDay: "Чт", workout: []}, 
                                    {nameDay: "Пт", workout: []}, 
                                    {nameDay: "Сб", workout: [["бег", "растяжка"], ["прыжки"]]}, 
                                    {nameDay: "Вс", workout: []}]}
    ]

    let selectedDay = "";

    function createNewWeek(){
        let nameWeek = (weekList.length + 1) + " неделя";
        weekList = weekList.concat({name: nameWeek, date: [  
                                    {nameDay: "Пн", workout: []}, 
                                    {nameDay: "Вт", workout: []}, 
                                    {nameDay: "Ср", workout: []}, 
                                    {nameDay: "Чт", workout: []}, 
                                    {nameDay: "Пт", workout: []}, 
                                    {nameDay: "Сб", workout: []}, 
                                    {nameDay: "Вс", workout: []}]});
    }

    let selectedExercise = "";

    function addExercise(number){
        if(selectedExercise !== ""){
            alert("Добавление..." + selectedExercise);
            let newWeekList = weekList;
            if(number === -1){
                newWeekList[selectedDay.week].date[selectedDay.day]["workout"].push([selectedExercise]);
            }else{
                newWeekList[selectedDay.week].date[selectedDay.day]["workout"][number] = newWeekList[selectedDay.week].date[selectedDay.day]["workout"][number].concat(selectedExercise);
            }
            weekList = newWeekList;
            selectedExercise = "";
        } else {
            alert("Не выбранно упражнение!");
        }
    }
    function setExercise(nameEx){
        if(selectedDay !== ""){
            selectedExercise = nameEx;
        }
    }
    function setDay(week, day){
        selectedDay = {"week": week, "day": day};
        // console.log(weekList);
    }
    function saveWorkout(){
        selectedDay = "";
    }
    onMount(() => {
        if (localStorage.getItem("status") === "администратор") {
            push("/curator_members");
        }
    });

</script>

<Header />

<div class="flex -mt-4">

    <div class="bg-blue-100 flex-col flex pt-4 h-screen w-3/12">
        {#each exercisesList as exerciseBlock}
            <div class="hover:bg-blue-200" on:click={()=>{exerciseBlock.winState = !exerciseBlock.winState}}>
                <p class="text-center p-2 select-none">{exerciseBlock.nameBox}</p>
            </div>
            {#if exerciseBlock.winState}
            <div class="bg-blue-50">
                {#each exerciseBlock.exeList as i }
                {#if selectedDay !== ""}
                    <div tabindex="0" class="bg-blue-100 p-2 m-2 ml-auto mr-4 w-7/12 hover:bg-blue-200 rounded forFocusBlue">
                        <p class="text-sm" on:click={() => setExercise(i)}>{i}</p>
                    </div>
                {:else}
                    <div class="bg-blue-100 p-2 m-2 ml-auto mr-4 w-7/12 hover:bg-blue-200 rounded">
                        <p class="text-sm" on:click={() => setExercise(i)}>{i}</p>
                    </div>
                {/if}
                        
                {/each}
            </div>
        {/if}
        {/each}
    </div>

    <div class="w-9/12 pl-4 flex-column">
        {#if selectedDay === ""}
            {#each weekList as week, w}
            <div class="mt-4">
                <p>
                    {week.name}
                </p>    
                <div class="flex">
                    {#each week.date as day, d}
                        <div on:click={() => setDay(w, d)} class="hover:bg-gray-200 bg-gray-100 w-2/12 m-0.5 border-2 border-black border" style="min-height: 80px;">
                            <p class="ml-1">{day.nameDay}</p>
                            {#if day.workout.length === 0}
                                <p class="text-center text-gray-400">отдых</p>
                            {:else}
                                <!-- <p>{day.workout}</p> -->
                                {#each day.workout as ExerciseBlock}
                                <div class="bg-blue-100 w-11/12 ml-auto mr-auto m-1">
                                    {#each ExerciseBlock as exercise}
                                        <p>{exercise}</p>
                                    {/each}
                                </div>
                                {/each}
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
            
            {/each}
            <div class="flex">
                <button class="btn-blue m-auto mt-6" on:click={createNewWeek}>
                    new week
                </button>
            </div>
        {:else}
            <div class="flex flex-col">
                <p class="text-center mt-4 text-lg">
                    {weekList[selectedDay.week].name}
                    {weekList[selectedDay.week].date[selectedDay.day].nameDay}
                </p>
                
                {#each weekList[selectedDay.week].date[selectedDay.day].workout as ExerciseBlock, i}
                    <div class="hover:bg-blue-200 bg-blue-100 w-8/12 ml-auto mr-auto m-2" on:click={() => addExercise(i)}>
                        {#each ExerciseBlock as exercise}
                            <p>{exercise}</p>
                        {/each}
                    </div>
                {/each}
                <button class="btn-l-blue m-auto" on:click={() => addExercise(-1)}>plus</button>
                <button class="btn-blue m-auto mt-4" on:click={saveWorkout}>saveWorkout</button>    
            </div>
        {/if}
    </div>
</div>

<style>
    .forFocusBlue:focus{
        background-color: #2b50ed;
    }
</style>