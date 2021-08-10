<script>
import { push } from "svelte-spa-router";

    import { authState } from "./stores"; // 0 - signIn (default), 1 - signUpF

    function toSignUp() {
        authState.update(n => 1);
    }
    function login(){
        alert("Запрос на бек для авторизации...");
        localStorage.setItem("name", "Кувшинов Марк");
        localStorage.setItem("status", "куратор");//куратор, администратор, старший куратор, руководитель направления
        push("/curator_members");
    }
</script>

<div class="standartBox w-96">
    <input class="input" type="text" placeholder="E-mail" />
    <input class="input" type="password" placeholder="Пароль" />
    <div class="flex place-content-around">
        <button class="btn-blue w-4/12" on:click={login}>Вход</button>
        <button class="btn-l-blue w-4/12" on:click={toSignUp}>Регистрация</button>
    </div>
    
</div>
