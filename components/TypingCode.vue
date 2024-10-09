<script lang="ts" setup>
const props = defineProps<{
  code: String;
}>();

const displayCode = ref("");

onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  for (let ch of props.code) {
    await new Promise((resolve) => {
      setTimeout(resolve, 150);
    });
    displayCode.value = displayCode.value + ch;
  }
});
</script>

<template>
  <code class="font-displayCode text-sm text-slate-700">
    {{ displayCode }}
  </code>
  <code
    class="font-displayCode text-sm font-extrabold text-slate-700 animate-textBlink"
    >_
  </code>
</template>

<style></style>
