<script lang="ts" setup>
const { width } = useWindowSize();
</script>

<template>
  <section
    class="relative w-framed max-w-[1120px] mx-auto px-6 py-4 border-x border-slate-300 flex flex-row items-center justify-between"
  >
    <NuxtLink class="font-display text-3xl font-bold text-slate-950" to="/">
      Prain Lopez
    </NuxtLink>
    <ul class="flex flex-row align-middle">
      <li class="mx-3 text-slate-950">
        <NuxtLink href="/">Home</NuxtLink>
      </li>
      <li class="mx-3 text-slate-950">Blog</li>
      <li class="mx-3 text-slate-950">Guestbook</li>
    </ul>
    <span
      v-if="width >= 1440"
      class="absolute -right-2.5 bottom-2 translate-x-full"
    >
      <code class="font-code text-sm text-slate-700">npx nuxi@latest</code>
      <code
        class="font-code text-sm font-extrabold text-slate-700 animate-textBlink"
        >_
      </code>
    </span>
  </section>
</template>
