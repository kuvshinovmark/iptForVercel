<script>
    import Header from "./addComponents/memHeader.svelte";
    import {beforeUpdate, afterUpdate} from 'svelte';
    let div;
    let autoscroll;
    let text = "";
    beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
    let comments = [
        { author: "user", text: 'Что-то вы давно ничего не отправляли...'},
		{ author: 'member', text: 'Мой новый комментарий к упражнению! Ответь мне, плз!' }
	];
    function handleKeydown(event){
        if(event.key === 'Enter'){
            sendMessage();
        }
    }
    function sendMessage(){
        if(text!==""){
            comments = comments.concat({
                author: "user",
                text
            })
            text = "";
            // alert("sending...");
        }
        
    }
</script>

<Header />


<div class="bg-gray-50 rounded-10px w-120 h-96 m-auto shadow-md" >
    <!-- style="min-height: 20rem; max-height: 30rem;" -->
    
    <div class="flex justify-between border-b p-2">
        <div class="flex">
            <img class="w-12 rounded-full mr-2" src="https://malchiki-po-vyzovu.world/wp-content/uploads/2020/08/%D0%BC%D0%B0%D0%BD1-480x480.jpg" alt="">
            <div>
                <p class="text-gray-400 uppercase mt-2 -mb-1 text-xs font-semibold">АСЯ ЛАЗО</p>
                <p><b>Становая тяга Сумо</b></p>
            </div>
        </div>
        <svg class="mt-auto mb-auto mr-4" width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.279338 1.6281C-0.093112 1.25565 -0.0931122 0.651787 0.279338 0.279337C0.651788 -0.0931125 1.25565 -0.0931125 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279338 1.6281Z" fill="#2B50ED"/>
            <path d="M8.3719 0.279338C8.74435 -0.0931123 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651788 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651788 10.0931 0.279338 9.72066C-0.0931124 9.34821 -0.0931126 8.74435 0.279337 8.3719L8.3719 0.279338Z" fill="#2B50ED"/>
        </svg>
    </div>
 
    <div class="flex h-56">
        <!-- Этот кусок кода реализован на чистом css -->
        <div class="scrollable" bind:this={div}>
            {#each comments as comment}
                <article class={comment.author}>
                    <span>{comment.text}</span>
                </article>
            {/each}
        </div>
    </div>
    


    <div class="p-4 border-t">
        <label class="input bg-blue-100 p-2 w-full border-none h-16 flex justify-between">
            <textarea bind:value={text} on:keydown={handleKeydown} class="bg-blue-100 h-full w-11/12 border-none focus:outline-none" style="resize: none;" placeholder="Напиши сообщение..."/>
            <button on:click={sendMessage} class="w-8 h-8 rounded-full mt-auto mb-auto btn-blue">
                <svg class="m-auto" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L5.38606 0.210647C5.74717 -0.0702164 6.25283 -0.0702164 6.61394 0.210647L6 1ZM10.3861 5.67824L5.38606 1.78935L6.61394 0.210647L11.6139 4.09954L10.3861 5.67824ZM6.61394 1.78935L1.61394 5.67824L0.386059 4.09954L5.38606 0.210647L6.61394 1.78935ZM7 1L7 12L5 12L5 0.999999L7 1Z" fill="white"/>
                </svg>
            </button>
        </label>
        
    </div>

</div>


<style>
    .scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}
    .scrollable::-webkit-scrollbar-track {
        background: transparent;
    }
    .scrollable::-webkit-scrollbar {
        width: 5px;
        background-color: whitesmoke;
    }
    .scrollable::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: #93c5fd;
    }
    article {
		margin: 0.5em 0;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}
	.member span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
	}

	.user span {
		background-color: #0074D9;
		color: white;
		border-radius: 1em 1em 0 1em;
		word-break: break-all;
	}
</style>