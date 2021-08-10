<script>
    import { authState } from "./stores"; // 0 - signIn (default), 1 - signUp
    function toSignIn() {
        authState.update((n) => 0);
    }
    function registration() {
        alert("Регистрация...");
        toSignIn();
    }
</script>

<div class="standartBox w-96">
    <input class="input" type="text" placeholder="E-mail" />
    <input class="input" type="password" placeholder="Пароль" />
    <input class="input" type="password" placeholder="Пароль еще раз" />
    <p on:click={toSignIn} class="text-center text-gray-400 hover:text-gray-500">Уже зарегистрированны?</p>
    <button class="btn-blue w-4/12 m-auto mt-2" on:click={registration}>Регистрация</button>
</div>
