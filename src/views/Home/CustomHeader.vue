<template>
  <header>
    <div class="flex flex-col w-4/5 max-w-6xl">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img src="@/assets/images/logo_white.png" class="w-full"/>
        </div>
        <div class="flex">
          <button class="px-6 font-bold rounded-full text-white focus:outline-none">Criar Conta</button>
          <button
          @click="() => $emit('login')"
          class="px-6 py-2 font-bold rounded-full bg-white text-brand-main focus:outline-none">Entrar</button>
        </div>
      </div>
      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback.<br/>
          E faça seus clientes mais <br class="hidden lg:inline-block"/>
          felizes!
        </h1>
        <p class="text-lg text-white font-regular mt-2 mb-10">
          Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block"/>
          simples widget na página.
        </p>
        <div><button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main">Entrar</button></div>
      </div>
    </div>
  </header>
</template>
<style lang="postcss" scoped>
header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}
</style>
