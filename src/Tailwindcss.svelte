<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .m-c {
      @apply mt-auto mb-auto;
    }
    .btn-blue {
      @apply text-white focus:outline-none rounded-30px bg-blue hover:bg-blue-hover border-none p-2;
    }
    .btn-l-blue{
      @apply rounded-30px bg-blue-light hover:bg-blue-hover border-none p-2 focus:outline-none  text-blue hover:text-white;
    }
    .btn-red{
      @apply text-white focus:outline-none rounded-30px bg-red hover:bg-red-hover border-none p-2;
    }
    .input{
      @apply pl-2 mb-2 h-9 focus:outline-none focus:border-blue-300;
    }
    .standartBox{
      @apply m-auto flex  flex-col  bg-blue-back rounded-10px p-5 pt-3 mt-10;
    }
    .btn-blue-border{
      @apply rounded-30px border-2 border-blue focus:outline-none focus:bg-blue-light focus:border-blue ;
    }
    .btn-l-blue-With-border{
      @apply rounded-30px bg-blue-light hover:border-blue  p-2 focus:outline-none;
    }
    .btn-white-With-gray-border{
      @apply rounded-30px focus:border-gray-300 p-2 border-2 border-gray-300 hover:border-blue hover:bg-gray-200 text-gray-400 hover:text-gray-500;
    }
  }
</style>
