<script setup>
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
        <p>graphic design / webdeveloper</p>
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
  min-height: 0;
  overflow: hidden;
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.hero {
  min-height: calc(100dvh - 110px);

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, minmax(60px, 1fr));

  column-gap: clamp(18px, 3vw, 42px);
  padding-top: clamp(34px, 5vw, 64px);
}

.word {
  margin: 0;

  font-size: clamp(3.4rem, 8.8vw, 8.9rem);
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

  transform: translateX(clamp(10px, 3vw, 42px));
}

.look {
  grid-column: 10 / 13;
  grid-row: 3 / 5;

  align-self: start;
  margin-top: clamp(18px, 2vw, 32px);

  transform: translateX(clamp(10px, 3vw, 42px));
}

.designed {
  grid-column: 1 / 7;
  grid-row: 5 / 7;

  align-self: start;
  margin-top: clamp(-34px, -2vw, -16px);
}

.enough {
  grid-column: 6 / 13;
  grid-row: 7 / 9;

  transform: translateX(clamp(10px, 3vw, 42px));
}

.intro {
  grid-column: 1 / 5;
  grid-row: 6 / 8;

  align-self: start;
  margin-top: clamp(22px, 3vw, 42px);

  font-size: clamp(.95rem, 1.25vw, 1.2rem);
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

/* Compact desktop / MacBook */
@media (min-width: 1200px) and (max-width: 1500px) {
  .hero {
    min-height: calc(100dvh - 92px);
    padding-top: 44px;
  }

  .word {
    font-size: clamp(4rem, 8.4vw, 8rem);
  }

  .this,
  .look,
  .enough {
    transform: translateX(28px);
  }

  .intro {
    font-size: 1.05rem;
  }
}

/* Tablet */
@media (max-width: 1100px) {
  .hero {
    grid-template-rows: repeat(8, minmax(56px, auto));
    column-gap: 24px;
  }

  .word {
    font-size: clamp(3.2rem, 8.4vw, 6.8rem);
  }

  .this,
  .look,
  .enough {
    transform: translateX(18px);
  }

  .intro {
    grid-column: 1 / 6;
  }
}

/* Mobile */
@media (max-width: 900px) {
  .home {
    overflow: visible;
  }

  .hero {
    min-height: calc(100dvh - 110px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: clamp(12px, 3vw, 22px);
    padding-top: clamp(36px, 8vw, 56px);
  }

  .word {
    font-size: clamp(3.8rem, 17vw, 7rem);
    line-height: .95;
  }

  .does,
  .this,
  .look,
  .designed,
  .enough {
    grid-column: auto;
    grid-row: auto;
    transform: none;
    margin-top: 0;
  }

  .this {
    align-self: center;
  }

  .look,
  .enough {
    align-self: flex-end;
  }

  .designed {
    margin-top: -5px;
  }

  .intro {
    margin-top: clamp(34px, 8vw, 56px);
    font-size: 1rem;
  }
}

/* Small mobile */
@media (max-width: 560px) {
  .hero {
    justify-content: flex-start;
    padding-top: 42px;
  }

  .word {
    font-size: clamp(3.35rem, 18vw, 5.7rem);
  }

  .intro {
    margin-top: 38px;
    font-size: .95rem;
  }
}
</style>
