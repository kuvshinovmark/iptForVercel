<script>
    import { onMount } from "svelte";
    import {location} from 'svelte-spa-router'
    import { push } from "svelte-spa-router";
    import { idMember } from "../../stores";

    let img = "https://malchiki-po-vyzovu.world/wp-content/uploads/2020/08/%D0%BC%D0%B0%D0%BD1-480x480.jpg";
    let name = "Максим Тимченко";
    let age = 27;
    let height = 182;
    let gender = "Мужчина";
    let currentGoal = "Набор массы";
    let globalGoal = "Красота";
    let updateDate = "обн. 07 мар. 21";
    onMount(() => {
        if($idMember === -1){
            push("/curator_members")
        }
	});

    function toData() {
        push("/member_data");
    }
    function toCalendar() {
        push("/member_calendar");
    }
    function toChat() {
        push("/member_chat");
    }
    function backToCurator() {
        push("/curator_members");
    }
</script>

<div class="flex justify-around mb-4 h-20 shadow-md">
    {#if $idMember !== -1}
        <div class="flex mt-auto mb-auto w-3/12">
            <img class="w-12 rounded-full mr-2" src={img} alt="">
            <div>
                <p>{name}</p>
                <p>Возраст: {age} {gender} {height}см</p>
            </div>
        </div>


        <div class="mt-auto mb-auto flex">
            <div class="flex h-12 w-40 bg-yellow-100 rounded-10px mr-2">
                <svg class=" ml-2 mr-2 mt-auto mb-auto" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#EF963C" fill-opacity="0.3"/>
                    <path d="M19.4161 6.08268C18.9517 6.02808 18.4791 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 17.4986 29.9693 17.0045 29.9095 16.5193" stroke="#A85F14" stroke-width="2" stroke-linecap="round"/>
                    <path d="M18.8261 11.0482C18.5551 11.0164 18.2795 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25C21.866 25 25 21.866 25 18C25 17.7075 24.9821 17.4193 24.9472 17.1362" stroke="#A85F14" stroke-width="2" stroke-linecap="round"/>
                    <path d="M18.1531 16.7108C18.1029 16.7049 18.0518 16.7019 18 16.7019C17.2831 16.7019 16.7019 17.2831 16.7019 18C16.7019 18.7169 17.2831 19.298 18 19.298C18.7169 19.298 19.298 18.7169 19.298 18C19.298 17.9457 19.2947 17.8923 19.2882 17.8398" stroke="#A85F14" stroke-width="3" stroke-linecap="round"/>
                    <path d="M18.8232 17.1768L22.0052 13.9319V9.75213L24.8336 6.92371L26.0329 9.995" stroke="#A85F14" stroke-width="2" stroke-linecap="round"/>
                    <path d="M22.0262 13.9948H26.2478L29.0763 11.1664L26.0154 9.97761" stroke="#A85F14" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div class="mt-auto mb-auto">
                    <p class="text-xs text-gray-400">текущая цель</p> 
                    <p class="text-sm">{currentGoal}</p>
                </div>    
            </div>
            <div class="flex h-12 w-40 bg-red-100 rounded-10px mr-2">
                <svg class=" ml-2 mr-2 mt-auto mb-auto" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#FB7662" fill-opacity="0.2"/>
                    <path d="M16.2595 11.88L8 27H24.8L16.2595 11.88Z" stroke="#E54A39" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M16.4 12.72L16.4 7" stroke="#E54A39" stroke-width="2" stroke-linecap="round"/>
                    <path d="M24.8 27H28.16L23.54 17.34L21.65 21.12" stroke="#E54A39" stroke-width="2" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.96 6H16.4V10.2H23.96L22.28 8.1L23.96 6Z" fill="#E54A39"/>
                    <path d="M12.62 18.18L14.3 19.86L16.4 17.76L18.08 19.86L20.18 18.11" stroke="#E54A39" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <div class="mt-auto mb-auto">
                    <p class="text-xs text-gray-400">глобальная цель</p> 
                    <p class="text-sm">{globalGoal}</p>
                </div>   
            </div>
            <div class="flex h-12 w-40 bg-blue-100 rounded-10px mr-2">
                <svg class=" ml-2 mr-2 mt-auto mb-auto" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#A3AEF5" fill-opacity="0.3"/>
                    <path d="M10 13.5909C10 13.0387 10.4477 12.5909 11 12.5909H26C26.5523 12.5909 27 13.0387 27 13.5909V24.1364C27 25.241 26.1046 26.1364 25 26.1364H12C10.8954 26.1364 10 25.241 10 24.1364V13.5909Z" stroke="#3736D7" stroke-width="2"/>
                    <path d="M12.5938 10.9231C12.6331 10.4067 13.0645 10 13.5909 10H13.9755C14.5019 10 14.9333 10.4067 14.9726 10.9231H12.5938Z" stroke="#3736D7" stroke-width="2"/>
                    <path d="M12.4545 16.0454C12.4545 15.4931 12.9023 15.0454 13.4545 15.0454H13.6469C14.1991 15.0454 14.6469 15.4931 14.6469 16.0454V16.2377C14.6469 16.79 14.1991 17.2377 13.6469 17.2377H13.4545C12.9023 17.2377 12.4545 16.79 12.4545 16.2377V16.0454Z" fill="#3736D7"/>
                    <circle cx="19.7955" cy="19.7954" r="3.75" stroke="#3736D7" stroke-width="2"/>
                    <circle cx="19.7955" cy="19.7955" r="1.29545" fill="#3736D7"/>
                    </svg>
                    
                <div class="mt-auto mb-auto">
                    <p class="text-xs text-gray-400">фото формы тела</p> 
                    <p class="text-sm">{updateDate}</p>
                </div>    
            </div>
        </div>


        <div class="flex w-3/12 justify-end">
            <button class="btn-white-With-gray-border h-10 mt-auto mb-auto mr-2" on:click={toData}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="14.5" width="15" height="1" rx="0.5" stroke="#BDBFC4"/>
                    <path d="M3 1.5C3 1.22386 3.22386 1 3.5 1C3.77614 1 4 1.22386 4 1.5V11H3V1.5Z" stroke="#BDBFC4" stroke-width="2"/>
                    <path d="M8 4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9 4.22386 9 4.5V11H8V4.5Z" stroke="#BDBFC4" stroke-width="2"/>
                    <path d="M13 9.5C13 9.22386 13.2239 9 13.5 9C13.7761 9 14 9.22386 14 9.5V11H13V9.5Z" stroke="#BDBFC4" stroke-width="2"/>
                </svg>
            </button>
            <button class="mr-2 text-white  mt-auto mb-auto h-10 focus:outline-none rounded-30px bg-blue hover:bg-blue-hover border-blue p-2" on:click={toCalendar}>
                <svg width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3C1 1.89543 1.89543 1 3 1H12C13.1046 1 14 1.89543 14 3V13C14 14.1046 13.1046 15 12 15H3C1.89543 15 1 14.1046 1 13V3Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M0 4H15V5H0V4Z" fill="#2B50ED"/>
                    <rect x="2.75" y="7.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                    <rect x="2.75" y="11.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                    <rect x="6.75" y="7.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                    <rect x="10.75" y="7.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                    <rect x="6.75" y="11.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                    <rect x="10.75" y="11.75" width="1.5" height="1.5" rx="0.75" fill="#2B50ED" stroke="#2B50ED" stroke-width="1.5"/>
                </svg>        
            </button>
            <svg class="mr-2 mt-auto mb-auto" width="1" height="52" viewBox="0 0 1 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="52" fill="#E0E8F6"/>
            </svg>
            <svg on:click={toChat} class=" mt-auto mb-auto" width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V15L11 12H3C1.34315 12 0 10.6569 0 9V3ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM8 7C8.55229 7 9 6.55228 9 6C9 5.44772 8.55229 5 8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" fill="#5A5F6D"/>
            </svg>
        </div>
        
    {/if}
    
</div>

{#if $location.slice(1,11) !== "member_day"}
    <button on:click={backToCurator} class="btn-l-blue flex pl-3 pr-3 pt-1 pb-1 ml-12 mb-4 text-sm"> 
        <svg class="mt-auto mb-auto mr-2" width="15" height="10" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.308309 6.7434C-0.10277 6.33283 -0.10277 5.66717 0.308309 5.2566L5.57147 0L7.06011 1.48679L3.59391 4.94868L17 4.94868V7.05132L3.59391 7.05132L7.06011 10.5132L5.57147 12L0.308309 6.7434Z" fill="#2B50ED"/>
        </svg>
        Назад
    </button>    
{/if}

<!-- {$idMember} -->