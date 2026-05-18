<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import NavigationBar from '@/components/NavigationBar.vue'

import archetypo1 from '@/assets/work/book design/archetypo/Archetypo_Cover.jpg'
import archetypo2 from '@/assets/work/book design/archetypo/Archetypo_Spread_1.jpg'
import archetypo3 from '@/assets/work/book design/archetypo/Archetypo_Spread_2.jpg'
import archetypo4 from '@/assets/work/book design/archetypo/Archetypo_Spread_3.jpg'
import archetypo5 from '@/assets/work/book design/archetypo/Archetypo_Spread_4.jpg'
import archetypo6 from '@/assets/work/book design/archetypo/Archetypo_Spread_5.jpg'

import microtypo1 from '@/assets/work/book design/microtypo/Microtype_Cover.jpg'
import microtypo2 from '@/assets/work/book design/microtypo/Microtype_Spread_1.jpg'
import microtypo3 from '@/assets/work/book design/microtypo/Microtype_Spread_2.jpg'
import microtypo4 from '@/assets/work/book design/microtypo/Microtype_Spread_3.jpg'
import microtypo5 from '@/assets/work/book design/microtypo/Microtype_Spread_4.jpg'
import microtypo6 from '@/assets/work/book design/microtypo/Microtype_Spread_5.jpg'

import nonPlace1 from '@/assets/work/book design/non-place/Non-Place_Cover.jpg'
import nonPlace2 from '@/assets/work/book design/non-place/Non-Place_Spread_1.jpg'
import nonPlace3 from '@/assets/work/book design/non-place/Non-Place_Spread_2.jpg'
import nonPlace4 from '@/assets/work/book design/non-place/Non-Place_Spread_3.jpg'
import nonPlace5 from '@/assets/work/book design/non-place/Non-Place_Spread_4.jpg'
import nonPlace6 from '@/assets/work/book design/non-place/Non-Place_Spread_5.jpg'

import manifest1 from '@/assets/work/book design/manifest/manifest_cover_1.jpg'
import manifest2 from '@/assets/work/book design/manifest/manifest_cover_2.jpg'
import manifest3 from '@/assets/work/book design/manifest/manifest_spread_1.jpg'
import manifest4 from '@/assets/work/book design/manifest/manifest_spread_2.jpg'
import manifest5 from '@/assets/work/book design/manifest/manifest_spread_3.jpg'
import manifest6 from '@/assets/work/book design/manifest/manifest_spread_4.jpg'

const books = [
  {
    number: '01',
    title: 'archetypo',
    text: [
      'Voor de herinterpretatie van een synoniemenwoordenboek liet ik me inspireren door het gezelschapsspel Scrabble.',
      'Elk woord werd ingevoerd in een Scrabble-calculator en gerangschikt van lage naar hoge scores, waardoor een nieuwe visuele en inhoudelijke structuur ontstond.',
    ],
    images: [archetypo1, archetypo2, archetypo3, archetypo4, archetypo5, archetypo6],
    link: null, //Wil je linken naar bv. een pagina: geen router-link in bijvoorbeeld '/' (home)
  },
  {
    number: '02',
    title: 'microtypo',
    text: [
      'Een functioneel boekje waarin een inhoudsopgave en index verwijzen naar zowel afbeeldingen als trefwoorden.',
      'Met één lettertype en drie groottes creëerde ik een heldere structuur en visuele hiërarchie.',
      'Symbolen in marges en tekst zorgen voor intuïtieve navigatie.',
    ],
    images: [microtypo1, microtypo2, microtypo3, microtypo4, microtypo5, microtypo6],
    link: null,
  },
  {
    number: '03',
    title: 'non-place',
    text: [
      'Een onderzoek naar een plek zonder uitgesproken identiteit.',
      'Door analyse, fotografie en herinterpretatie ontstond een nieuwe artistieke identiteit voor de locatie.',
      'Een samenspel van grafische, typografische en fotografische elementen.',
    ],
    images: [nonPlace1, nonPlace2, nonPlace3, nonPlace4, nonPlace5, nonPlace6],
    link: null,
  },
  {
    number: '04',
    title: 'manifest',
    text: [
      'Een persoonlijk manifest over de bouwstenen van mijn ontwerpproces.',
      'Grafisch ontwerp als krachtig medium, waarin minimalisme, functionaliteit en creativiteit samenkomen.',
      'Reflectie op mijn ontwikkeling en de manier waarop ik mijn visie vertaal in praktijk.',
    ],
    images: [manifest1, manifest2, manifest3, manifest4, manifest5, manifest6],
    link: null,
  },
]

const activeBookIndex = ref(null)
const activeImageIndex = ref(0)
const isZoomed = ref(false)

const activeImage = computed(() => {
  if (activeBookIndex.value === null) return null

  return books[activeBookIndex.value]
    .images[activeImageIndex.value]
})

function openFullscreen(bookIndex, imageIndex) {
  activeBookIndex.value = bookIndex
  activeImageIndex.value = imageIndex

  document.body.style.overflow = 'hidden'
}

function closeFullscreen() {
  activeBookIndex.value = null
  activeImageIndex.value = 0
  isZoomed.value = false

  document.body.style.overflow = ''
}

function previousImage() {
  const images = books[activeBookIndex.value].images

  activeImageIndex.value =
    (activeImageIndex.value - 1 + images.length)
    % images.length

  isZoomed.value = false
}

function nextImage() {
  const images = books[activeBookIndex.value].images

  activeImageIndex.value =
    (activeImageIndex.value + 1)
    % images.length

  isZoomed.value = false
}

function handleKeydown(event) {
  if (!activeImage.value) return

  if (event.key === 'Escape') closeFullscreen()
  if (event.key === 'ArrowLeft') previousImage()
  if (event.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

function toggleZoom() {
  isZoomed.value = !isZoomed.value
}
</script>

<template>
  <main class="book-page">
    <NavigationBar />

    <section class="hero">

      <div class="hero-left">
        <RouterLink
          class="back-button"
          to="/work"
        >
          ←
        </RouterLink>
      </div>

      <div class="hero-title">
        <span class="project-number">01</span>

        <h1>
          book design<span>.</span>
        </h1>
      </div>

    </section>

    <section class="book-list">
      <article
        v-for="(book, bookIndex) in books"
        :id="book.title"
        :key="book.number"
        class="book-section"
      >
        <div class="book-info">
          <span class="book-number">{{ book.number }}</span>
          <h2>{{ book.title }}<span>.</span></h2>

          <div class="book-text">
            <p v-for="paragraph in book.text" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>

          <RouterLink
            v-if="book.link"
            :to="book.link"
            class="more-link"
          >
            meer over {{ book.title }}
          </RouterLink>
        </div>

        <div class="book-gallery">
          <figure
            v-for="(image,imageIndex) in book.images"
            :key="image"
            class="image-card"
            @click="openFullscreen(bookIndex,imageIndex)"
          >
            <img
              :src="image"
              :alt="book.title"
            />
          </figure>
        </div>
      </article>
    </section>
    <div
      v-if="activeImage"
      class="fullscreen-viewer"
    >

      <button
        v-if="!isZoomed"
        class="close-button"
        @click="closeFullscreen"
      >
        ×
      </button>

      <button
        v-if="!isZoomed"
        class="arrow left-arrow"
        @click="previousImage"
      >
        ←
      </button>

      <img
        class="fullscreen-image"
        :class="{ zoomed: isZoomed }"
        :src="activeImage"
        alt=""
        @click.stop="toggleZoom"
      >

      <button
        v-if="!isZoomed"
        class="arrow right-arrow"
        @click="nextImage"
      >
        →
      </button>

    </div>
    <footer class="page-copyright">
      © Dieter Vaesen 2026
    </footer>
  </main>
</template>

<style scoped>
.book-page {
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

/* HERO */

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding:
    clamp(54px, 8vw, 92px)
    0
    clamp(48px, 7vw, 80px);

  border-bottom: 1px solid var(--grey);
}

.hero-left {
  display: flex;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;

  color: var(--blue);
  text-decoration: none;

  font-size: 90px;
  line-height: .8;
  font-weight: var(--weight-bold);
}

.hero-title {
  display: flex;
  align-items: flex-end;
  gap: 24px;
}

.project-number {
  font-size: 50px;
  line-height: 1;
  font-weight: var(--weight-medium);
  letter-spacing: -.04em;
}

h1 {
  margin: 0;

  font-size: clamp(72px, 8vw, 128px);
  line-height: .86;
  letter-spacing: -.085em;
  font-weight: var(--weight-bold);
}

h1 span,
h2 span {
  color: var(--blue);
}

/* CONTENT */

.book-list {
  display: grid;
}

.book-section {
  display: grid;

  grid-template-columns:
    minmax(280px, .38fr)
    minmax(0, 1fr);

  gap: clamp(34px, 5vw, 64px);

  padding: clamp(34px, 5vw, 54px) 0;

  border-bottom: 1px solid var(--grey);

  scroll-margin-top: 120px;
}

.book-info {
  padding-right: clamp(28px, 4vw, 50px);

  border-right: 4px solid var(--black);
}

.book-number {
  display: block;
  margin-bottom: 12px;

  font-size: 18px;
  font-weight: var(--weight-bold);
}

h2 {
  margin-bottom: 28px;

  font-size: clamp(34px, 3vw, 52px);

  line-height: .92;
  letter-spacing: -.07em;

  font-weight: var(--weight-bold);
}

.book-text {
  display: grid;
  gap: 18px;

  margin-bottom: 30px;
}

.book-text p {
  max-width: 340px;

  font-size: 15px;
  line-height: 1.45;
}

.more-link {
  position: relative;

  display: inline-block;

  color: var(--black);

  font-size: 14px;
  font-weight: var(--weight-medium);

  text-decoration: none;
}

.more-link::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -5px;

  width: 100%;
  height: 1px;

  background: var(--black);
}

/* GALLERY */

.book-gallery {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}

.image-card {
  min-height: 220px;

  background: #f1f1f1;
  overflow: hidden;
}

.image-card img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
}

.fullscreen-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  overflow: auto;

  cursor: default;
}

.fullscreen-image {
  display: block;

  max-width: 100vw;
  max-height: 100vh;

  width: auto;
  height: auto;

  object-fit: contain;

  transition: transform .35s ease;
  transform-origin: center center;

  cursor: zoom-in;
}

.fullscreen-image.zoomed {
  max-width: none;
  max-height: none;

  width: 180vw;
  height: auto;

  cursor: zoom-out;
}

.close-button{
  position:absolute;

  top:25px;
  right:40px;

  border:none;
  background:none;

  color:var(--blue);

  font-size:60px;
  font-weight:700;

  cursor:pointer;

  z-index:1001;
}

.arrow{
  position:absolute;

  top:50%;

  transform:translateY(-50%);

  border:none;
  background:none;

  color:var(--blue);

  font-size:90px;
  font-weight:700;

  cursor:pointer;

  z-index:1001;
}

.left-arrow{
  left:40px;
}

.right-arrow{
  right:40px;
}

.arrow:hover,
.close-button:hover{
  opacity:.7;
}

.page-copyright{
  display:flex;
  justify-content:flex-end;

  margin-top:30px;

  color:#777;

  font-size:14px;
  font-weight:var(--weight-medium);
}

@media(max-width:560px){

  .page-copyright{
    justify-content:flex-end;
    font-size:13px;
    margin-top:30px;
  }

}

/* MACBOOK 13" */

@media (min-width:1200px) and (max-width:1500px){

  .book-page{
    padding:34px 76px;
  }

  .hero{
    padding:52px 0 48px;
  }

  .back-button{
    font-size:90px;
  }

  h1{
    font-size:96px;
  }

  .book-section{
    grid-template-columns:300px 1fr;

    gap:36px;
    padding:34px 0;
  }

  .book-info{
    padding-right:34px;
  }

  h2{
    font-size:38px;
  }

  .book-text p{
    font-size:14px;
    line-height:1.42;
  }

  .image-card{
    min-height:180px;
  }
}

/* TABLET */

@media(max-width:900px){

  .hero,
  .book-section{
    display:block;
  }

  .hero-title{
    margin-top:20px;
  }

  .book-info{
    margin-bottom:34px;

    padding-right:0;
    padding-bottom:34px;

    border-right:0;
    border-bottom:3px solid var(--black);
  }

  .book-gallery{
    grid-template-columns:repeat(2,1fr);
  }

  .image-card{
    min-height:180px;
  }
}

/* MOBILE */

@media(max-width:560px){

  .book-page{
    padding:22px;
  }

  .back-button{
    font-size:52px;
  }

  .project-number{
    font-size:45px;
  }

  h1{
    font-size:66px;
  }

  .book-gallery{
    grid-template-columns:1fr;
  }
}
</style>
