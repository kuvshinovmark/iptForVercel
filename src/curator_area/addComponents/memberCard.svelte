<script>
    import { push } from "svelte-spa-router";
    import {idMember} from "../../stores";
    export let name = "Имя ученика";
    export let img = "https://pic.sport.ua/images/news/0/12/155/orig_511003.jpg";
    export let numWorkouts = 3;
    export let numWorkoutsNow = 0;
    export let dateLastReport = "00.00.0000";
    export let imgCurator = "";
    export let nameCurator = "Имя куратора";
    export let statusCurator = "Статус куратора";
    export let info = "Некая информация";
    export let id = -1;
    let status = localStorage.getItem("status");
    function toMemberPage(){
        idMember.update(n => id);
        push("/member_data");
    } 
    function toMemberChat(){
        idMember.update(n => id);
        push("/member_chat");
    }
</script>


<div class="flex w-9/12 shadow-md border rounded-10px mt-4 m-auto">
    <div on:click={toMemberPage} class="flex flex-col hover:bg-blue-200 bg-blue-100 rounded-l-10px w-4/12">
        <div class="pl-4 mt-4 flex">
            <img class="w-16 h-16 rounded-full" src={img} alt="">
            <p class="mt-auto mb-auto ml-4"><b>{name}</b></p>
        </div>
        
        <div class="border-t-2 mt-auto border-gray-300 pl-4 mb-4">
            <p class="text-gray-400 uppercase text-xs font-semibold mt-4 -mb-1">предпочтения и Особенности</p>
            <p>{info}</p>       
        </div>
    </div>

    <div class="w-4/12 border-r flex justify-around p-4">
        <div>
            <p class="text-gray-400 uppercase text-xs font-semibold">Тренировки ФАКТ/ПЛАН</p>
            <p>{numWorkoutsNow}/{numWorkouts}</p>
        </div>
        <div>
            <p class="text-gray-400 uppercase text-xs font-semibold">Последний отчет</p>
            <p>{dateLastReport}</p>
            <p>id: {id}</p>
        </div>
        
    </div>

    <div class="w-4/12 pt-4">
        <div class="flex justify-between">
            <p class="text-gray-400 ml-2 uppercase text-xs font-semibold">Внутренний чат</p>
            <div>
            {#if status === "старший куратор"}
                <div class="flex">
                    {#if statusCurator === "куратор"}
                        <svg on:click={toMemberChat} width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H16V3C16 1.34315 14.6569 0 13 0H3ZM4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7ZM9 6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5C8.55229 5 9 5.44772 9 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="#2B50ED"/>
                            <path d="M16 12H11L16 15L16 12Z" fill="#2B50ED"/>
                        </svg>  
                    {/if}
                    <svg class="ml-2 mr-2 h-auto w-6 fill-current text-red hover:text-red-hover" width="24" height="26" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="1" width="10" height="2" rx="1" fill-opacity="0.6"/>
                        <path d="M2 1C2 0.447715 2.44772 0 3 0H7C7.55228 0 8 0.447715 8 1H2Z" fill-opacity="0.6"/>
                        <path d="M1 4H9V9C9 10.6569 7.65685 12 6 12H4C2.34315 12 1 10.6569 1 9V4Z" fill-opacity="0.6"/>
                        <path d="M3.40033 5.90008C3.62122 5.67919 3.97936 5.67919 4.20026 5.90008L6.60003 8.29986C6.82092 8.52075 6.82092 8.87889 6.60003 9.09978C6.37914 9.32068 6.021 9.32068 5.8001 9.09978L3.40033 6.70001C3.17944 6.47912 3.17944 6.12098 3.40033 5.90008Z" fill="white"/>
                        <path d="M3.40033 9.09979C3.62122 9.32069 3.97936 9.32069 4.20026 9.09979L6.60003 6.70002C6.82092 6.47913 6.82092 6.12099 6.60003 5.9001C6.37914 5.6792 6.021 5.6792 5.8001 5.9001L3.40033 8.29987C3.17944 8.52076 3.17944 8.8789 3.40033 9.09979Z" fill="white"/>
                    </svg>
                </div>  
            {/if}
            {#if (status === "руководитель направления")||(status === "администратор")}
                <div class="flex">
                    <svg on:click={toMemberChat} width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H16V3C16 1.34315 14.6569 0 13 0H3ZM4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7ZM9 6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5C8.55229 5 9 5.44772 9 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="#2B50ED"/>
                        <path d="M16 12H11L16 15L16 12Z" fill="#2B50ED"/>
                    </svg>  
                    <svg class="ml-2 mr-2 h-auto w-6 fill-current text-red hover:text-red-hover" width="24" height="26" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="1" width="10" height="2" rx="1" fill-opacity="0.6"/>
                        <path d="M2 1C2 0.447715 2.44772 0 3 0H7C7.55228 0 8 0.447715 8 1H2Z" fill-opacity="0.6"/>
                        <path d="M1 4H9V9C9 10.6569 7.65685 12 6 12H4C2.34315 12 1 10.6569 1 9V4Z" fill-opacity="0.6"/>
                        <path d="M3.40033 5.90008C3.62122 5.67919 3.97936 5.67919 4.20026 5.90008L6.60003 8.29986C6.82092 8.52075 6.82092 8.87889 6.60003 9.09978C6.37914 9.32068 6.021 9.32068 5.8001 9.09978L3.40033 6.70001C3.17944 6.47912 3.17944 6.12098 3.40033 5.90008Z" fill="white"/>
                        <path d="M3.40033 9.09979C3.62122 9.32069 3.97936 9.32069 4.20026 9.09979L6.60003 6.70002C6.82092 6.47913 6.82092 6.12099 6.60003 5.9001C6.37914 5.6792 6.021 5.6792 5.8001 5.9001L3.40033 8.29987C3.17944 8.52076 3.17944 8.8789 3.40033 9.09979Z" fill="white"/>
                    </svg>
                </div>
            {/if}
            {#if (status === "куратор") && (nameCurator === localStorage.getItem("name"))}
                <svg on:click={toMemberChat} class="mr-2" width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H16V3C16 1.34315 14.6569 0 13 0H3ZM4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7ZM9 6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5C8.55229 5 9 5.44772 9 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="#2B50ED"/>
                    <path d="M16 12H11L16 15L16 12Z" fill="#2B50ED"/>
                </svg>  
            {/if}
        </div>
        </div>
        <div class="standartBox mt-2 w-11/12">
            <p>Тут будет последнее сообщение ученика</p>
        </div>
        <div class="mt-2 pl-4 mb-2 flex">
            <img src={imgCurator} alt="" class="h-12 w-12 rounded-full">
            <div class="ml-2">
                <p>{nameCurator}</p>
                <p class="text-gray-400 uppercase text-xs font-semibold">{statusCurator}</p>
            </div>
        </div>
    </div>
</div>
