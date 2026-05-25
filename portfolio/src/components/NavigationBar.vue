<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isWorkRoute = computed(() => {
  return [
    '/work',
    '/bookdesign',
    '/logodesign',
    '/posterdesign',
    '/internship',
    '/photography',
    '/webdesign',
    '/huiscosemansknuts',
    '/typography',
    '/virgajesse',
  ].some(path => route.path.startsWith(path))
})
</script>

<template>
  <header class="nav">
    <RouterLink class="brand" to="/">Dieter Vaesen</RouterLink>

    <nav aria-label="Main navigation">
      <RouterLink
        to="/"
        exact-active-class="active"
      >
        home
      </RouterLink>

      <RouterLink
        to="/work"
        :class="{ active: isWorkRoute }"
      >
        work
      </RouterLink>

      <RouterLink
        to="/about"
        exact-active-class="active"
      >
        about
      </RouterLink>

      <RouterLink
        to="/contact"
        exact-active-class="active"
      >
        contact
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--grey);
}

.brand,
.nav a {
  color: inherit;
  text-decoration: none;
}

.brand {
  font-size: clamp(20px, 2vw, 27px);
  font-weight: var(--weight-bold);
  letter-spacing: -0.04em;
}

.nav nav {
  display: flex;
  align-items: center;
  gap: clamp(22px, 4vw, 68px);
  color: var(--grey);
  font-size: clamp(15px, 1.2vw, 20px);
  font-weight: var(--weight-bold);
}

.nav nav a {
  position: relative;
  transition: color 180ms ease;
}

.nav nav a:hover,
.nav nav a.active {
  color: var(--black);
}

@media (max-width: 900px) {
  .nav {
    align-items: flex-start;
  }

  .nav nav {
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 18px;
  }
}

@media (max-width: 560px) {
  .nav {
    display: block;
  }

  .nav nav {
    justify-content: flex-start;
    margin-top: 22px;
  }
}
</style>
