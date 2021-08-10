<script>
    export let name = "Ирина Круг";
    export let status = "куратор";
    export let img = "https://icdn.lenta.ru/images/2021/01/16/10/20210116100024898/square_320_562f030507bc6c6d57b4d3d2c4f64a8d.jpg";
    let stateChangeStatus = false;
    function openStatusBox(){
        stateChangeStatus = !stateChangeStatus;
    }
    function changeStatus(newStatus){
        alert("Смена статуса работника на " + newStatus);
        status = newStatus;
        stateChangeStatus = false;
    }
</script>

<div class="w-10/12 h-40 bg-gray-100 rounded-10px mt-4 m-auto flex justify-between">
    <div class="flex">
        <img src={img} alt="" class="h-32 rounded-full mt-auto mb-auto ml-4">
        <div class="ml-4 mt-8">
            <p>{name}</p>
            <div class="flex">
                <p>{status}</p>
                <svg on:click={openStatusBox} class="mt-auto mb-auto ml-1" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5996 3.8911C14.1519 2.93451 13.8241 1.71133 12.8676 1.15905C11.911 0.606761 10.6878 0.934511 10.1355 1.8911L9.63551 2.75712L13.0996 4.75712L13.5996 3.8911ZM8.63551 4.48917L4.13551 12.2834L7.59961 14.2834L12.0996 6.48917L8.63551 4.48917Z" fill="#30333D"/>
                    <path d="M4.13572 12.2838L7.59982 14.2838L4.33772 16.1367L4.13572 12.2838Z" fill="#30333D"/>
                    <rect y="17.5" width="12" height="1" fill="#30333D"/>
                </svg>        
            </div>
            {#if stateChangeStatus}
                <div class="w-60">
                    <p>Сменить на:</p>
                    <button on:click={() => changeStatus("куратор")}>Куратор</button>
                    <button on:click={() => changeStatus("старший куратор")}>Старший куратор</button>
                    <button on:click={() => changeStatus("руководитель направления")}>Руководитель направления</button> 
                </div>
            {/if}
        </div>
    </div>
    <button class="h-10 bg-red-100 mt-auto mb-auto">удалить / заблокировать</button>
</div>
