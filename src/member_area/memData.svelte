<script>
    import Header from "./addComponents/memHeader.svelte";
    let img = "https://malchiki-po-vyzovu.world/wp-content/uploads/2020/08/%D0%BC%D0%B0%D0%BD1-480x480.jpg";
    let name = "Максим Тимченко";
    let age = 27;
    let height = 182;
    let gender = "Мужчина";
</script>

<Header />

<div class="flex">
    <img src={img} alt="error" class="w-40 rounded-full">
    <div class="ml-4 mt-8">
        <p>Имя: {name}</p>
        <p>Пол: {gender}</p>
        <p>Возраст: {age}</p>
        <p>Рост: {height}</p>
    </div>
</div>
