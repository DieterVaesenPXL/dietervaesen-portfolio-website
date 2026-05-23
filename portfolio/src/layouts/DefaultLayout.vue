<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="layout">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

@media (min-width: 1200px) and (max-width: 1500px) {
  .layout {
    padding: 34px 76px;
  }
}

@media (max-width: 560px) {
  .layout {
    padding: 22px;
  }
}
</style>
