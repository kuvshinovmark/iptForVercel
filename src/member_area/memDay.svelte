<script>
    import Header from "./addComponents/memHeader.svelte";
    import {location} from 'svelte-spa-router'
    import ExerciseCard from './addComponents/exerciseCard.svelte';
    let trainingName = "Трен #1 ТЕСТ 1";
</script>

 
<Header />
<div class="ml-20 mr-20 mt-10 mb-10 text-xl flex justify-between">
    <div>
        <b>{$location.slice(12)}</b>
        <b class="ml-4">{trainingName}</b>
    </div>
    <div>
        <button class="btn-l-blue h-8 w-8">
            <svg class="m-auto" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.290387 5.05125C-0.118835 5.46047 -0.0826233 6.25901 0.326598 6.66823L4.51811 10.8597L6.00003 9.37782L2.51327 5.79221L5.96382 2.34166L4.48189 0.859741L0.290387 5.05125Z" fill="#2B50ED"/>
            </svg>
        </button>
        <button class="btn-l-blue h-8 w-8">
            <svg class="m-auto" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71059 5.05125C6.11981 5.46047 6.0836 6.25901 5.67438 6.66823L1.48287 10.8597L0.000949278 9.37782L3.48771 5.79221L0.03716 2.34166L1.51908 0.859741L5.71059 5.05125Z" fill="#2B50ED"/>
            </svg>
        </button>
    </div>
</div>
<ExerciseCard/>
<ExerciseCard/>
<ExerciseCard/>
<ExerciseCard/>
<ExerciseCard/>
