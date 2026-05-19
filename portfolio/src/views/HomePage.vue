<script setup>
import NavigationBar from '@/components/NavigationBar.vue'

const words = [
  { text: 'does', color: 'black', position: 'does' },
  { text: 'this', color: 'black', position: 'this' },
  { text: 'look', color: 'black', position: 'look' },
  { text: 'designed', color: 'blue', position: 'designed' },
  { text: 'enough ?', color: 'black', position: 'enough' },
]
</script>

<template>
  <main class="home">
    <NavigationBar />

    <section class="hero">
      <h2
        v-for="word in words"
        :key="word.text"
        class="word"
        :class="[word.color, word.position]"
      >
        {{ word.text }}
      </h2>

      <div class="intro">
        <p>© dieter vaesen <strong>portfolio</strong>,</p>
        <p>graphic design / webdesign</p>
        <p>Master’s degree, 2025</p>

        <p class="cv">
          <strong>
            <a
              href="/documents/DieterVaesen_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              curriculum vitae ↗
            </a>
          </strong>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  overflow: hidden;
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.hero {
  height: calc(100dvh - 104px);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);

  column-gap: 2rem;
  padding-top: clamp(36px, 5vw, 64px);
}

.word {
  margin: 0;
  font-size: clamp(3.5rem, 9vw, 8.9rem);
  font-weight: var(--weight-bold);
  line-height: .85;
  letter-spacing: -.05em;
}

.black {
  color: var(--black);
}

.blue {
  color: var(--blue);
}

.does {
  grid-column: 1 / 5;
  grid-row: 1 / 3;
}

.this {
  grid-column: 6 / 9;
  grid-row: 2 / 4;
}

.look {
  grid-column: 10 / 13;
  grid-row: 3 / 5;
  align-self: start;
  margin-top: 2rem;
}

.designed {
  grid-column: 1 / 7;
  grid-row: 5 / 7;
  align-self: start;
  margin-top: -2rem;
}

.enough {
  grid-column: 6 / 13;
  grid-row: 7 / 9;
}

.intro {
  grid-column: 1 / 5;
  grid-row: 6 / 8;
  align-self: start;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: var(--weight-light);
  line-height: 1.3;
}

.intro p {
  margin: 0;
}

.intro strong {
  font-weight: var(--weight-bold);
}

.cv a {
  position: relative;
  display: inline-block;
  width: fit-content;
  margin-top: 1.5rem;
  padding-bottom: 3px;
  color: var(--black);
  text-decoration: none;
  font-weight: var(--weight-bold);
}

.cv a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 2px;

  background: var(--black);

  transform: scaleX(0);
  transform-origin: left;

  transition: transform .3s cubic-bezier(.65, 0, .35, 1);
}

.cv a:hover::after {
  transform: scaleX(1);
}

@media (min-width: 1200px) and (max-width: 1500px) {
  .home {
    padding: 34px 76px;
  }

  .hero {
    height: calc(100dvh - 92px);
    padding-top: 44px;
  }

  .word {
    font-size: clamp(4rem, 8.6vw, 8rem);
  }

  .intro {
    font-size: 1.05rem;
  }
}

@media (max-width: 900px) {
  .home {
    overflow: visible;
  }

  .hero {
    height: auto;
    min-height: calc(100dvh - 110px);
    display: block;
    padding-top: 48px;
  }

  .word {
    margin-bottom: 12px;
    font-size: clamp(4rem, 18vw, 7rem);
  }

  .intro {
    margin-top: 48px;
    font-size: 1rem;
  }
}

@media (max-width: 560px) {
  .home {
    padding: 22px;
  }
}
</style>
