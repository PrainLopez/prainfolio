<script lang="ts" setup>
const { width } = useWindowSize();

const codeLines = [
  "npx nuxi@latest",
  "bun next build",
  "pnpm create vite",
  "go fmt *.go",
  "git pull -r",
  "nvm use stable",
  "tsc --init",
];
const code = ref("");

onMounted(async () => {
  if (width.value >= 1440) {
    const rand = new Promise<String>((resolve) => {
      setTimeout(() => {
        resolve(codeLines[Math.floor(Math.random() * codeLines.length)]);
      }, 1500);
    });
    const codeStr = await rand;
    for (let ch of codeStr) {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 150);
      });
      code.value = code.value + ch;
    }
  }
});
</script>

<template>
  <section
    class="relative w-full sm:w-framed max-w-[1120px] mx-auto px-6 py-4 border-x border-slate-300 flex flex-row items-center justify-between"
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
      <code class="font-code text-sm text-slate-700">{{ code }}</code>
      <code
        class="font-code text-sm font-extrabold text-slate-700 animate-textBlink"
        >_
      </code>
    </span>
  </section>
</template>
