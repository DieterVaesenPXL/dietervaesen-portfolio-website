<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  pageClass: {
    type: String,
    default: 'book-page',
  },
  listClass: {
    type: String,
    default: 'book-list',
  },
  sectionClass: {
    type: String,
    default: 'book-section',
  },
  infoClass: {
    type: String,
    default: 'book-info',
  },
  galleryClass: {
    type: String,
    default: 'book-gallery',
  },
  projectNumber: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  mobileProjectTitle: {
    type: String,
    default: null,
  },
})

const activeItemIndex = ref(null)
const activeImageIndex = ref(0)
const isZoomed = ref(false)

const activeImage = computed(() => {
  if (activeItemIndex.value === null) return null

  return props.items[activeItemIndex.value].images[activeImageIndex.value]
})

function openFullscreen(itemIndex, imageIndex) {
  activeItemIndex.value = itemIndex
  activeImageIndex.value = imageIndex
  document.body.style.overflow = 'hidden'
}

function handleImageClick(itemIndex, imageIndex) {
  if (window.innerWidth <= 900) return

  openFullscreen(itemIndex, imageIndex)
}

function closeFullscreen() {
  activeItemIndex.value = null
  activeImageIndex.value = 0
  isZoomed.value = false
  document.body.style.overflow = ''
}

function previousImage() {
  const images = props.items[activeItemIndex.value].images

  activeImageIndex.value =
    (activeImageIndex.value - 1 + images.length) % images.length

  isZoomed.value = false
}

function nextImage() {
  const images = props.items[activeItemIndex.value].images

  activeImageIndex.value =
    (activeImageIndex.value + 1) % images.length

  isZoomed.value = false
}

function handleKeydown(event) {
  if (!activeImage.value) return

  if (event.key === 'Escape') closeFullscreen()
  if (event.key === 'ArrowLeft') previousImage()
  if (event.key === 'ArrowRight') nextImage()
}

function toggleZoom() {
  isZoomed.value = !isZoomed.value
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <main :class="pageClass">

    <section class="hero">
      <div class="hero-left">
        <RouterLink class="back-button" to="/work">
          ←
        </RouterLink>
      </div>

      <div class="hero-title">
        <span class="project-number">{{ projectNumber }}</span>

        <h1 :class="{ 'has-mobile-title': mobileProjectTitle }">
  <span class="desktop-title">
    {{ projectTitle }}<span>.</span>
  </span>

          <span
            v-if="mobileProjectTitle"
            class="mobile-title"
          >
    {{ mobileProjectTitle }}<span>.</span>
  </span>
        </h1>

      </div>
    </section>

    <section :class="listClass">
      <article
        v-for="(item, itemIndex) in items"
        :id="item.slug || item.title.toLowerCase().replace(/\s+/g, '-')"
        :key="item.number"
        :class="sectionClass"
      >
        <div :class="infoClass">
          <span class="book-number">{{ item.number }}</span>

          <h2>{{ item.title }}<span>.</span></h2>

          <div class="book-text">
            <p v-for="paragraph in item.text" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>

          <RouterLink
            v-if="item.link"
            :to="item.link"
            class="more-link"
          >
            meer over {{ item.title }}
          </RouterLink>
        </div>

        <div :class="galleryClass">
          <figure
            v-for="(image, imageIndex) in item.images"
            :key="image"
            class="image-card"
            @click="handleImageClick(itemIndex, imageIndex)"
          >
            <img :src="image" :alt="item.title" />
          </figure>
        </div>
      </article>
    </section>

    <div v-if="activeImage" class="fullscreen-viewer">
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
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: clamp(54px, 8vw, 92px) 0 clamp(48px, 7vw, 80px);
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

.desktop-title {
  display: inline;
  color: var(--black);
}

.mobile-title {
  display: none;
  color: var(--black);
  white-space: pre-line;
}

h1 span span,
h2 span {
  color: var(--blue);
}

.book-list {
  display: grid;
}

.book-section {
  display: grid;
  grid-template-columns: minmax(280px,.38fr) minmax(0,1fr);
  gap: clamp(34px,5vw,64px);
  padding: clamp(34px,5vw,54px) 0;
  border-bottom: 1px solid var(--grey);
  scroll-margin-top: 120px;
}

.book-info {
  padding-right: clamp(28px,4vw,50px);
  border-right: 4px solid var(--black);
}

.book-number {
  display:block;
  margin-bottom:12px;
  font-size:18px;
  font-weight:var(--weight-bold);
}

h2 {
  margin-bottom:28px;
  font-size:clamp(34px,3vw,52px);
  line-height:.92;
  letter-spacing:-.07em;
  font-weight:var(--weight-bold);
}

.book-text {
  display:grid;
  gap:18px;
  margin-bottom:30px;
}

.book-text p {
  max-width:340px;
  font-size:15px;
  line-height:1.45;
}

.more-link {
  position:relative;
  display:inline-block;
  color:var(--black);
  text-decoration:none;
  font-size:14px;
  font-weight:var(--weight-medium);
}

.more-link::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-5px;
  width:100%;
  height:1px;
  background:var(--black);
}

.book-gallery{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.image-card{
  min-height:220px;
  background:#f1f1f1;
  overflow:hidden;
  cursor:pointer;
}

.image-card img{
  width:100%;
  height:100%;
  display:block;
  object-fit:contain;
}

.fullscreen-viewer{
  position:fixed;
  inset:0;
  z-index:1000;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
}

.fullscreen-image{
  max-width:100vw;
  max-height:100vh;
  object-fit:contain;
  transition:transform .35s ease;
  cursor:zoom-in;
}

.fullscreen-image.zoomed{
  max-width:none;
  max-height:none;
  width:180vw;
  cursor:zoom-out;
}

.close-button{
  position:absolute;
  top:25px;
  right:40px;
  border:none;
  background:none;
  font-size:60px;
  cursor:pointer;
}

.arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  border:none;
  background:none;
  color:var(--blue);
  font-size:90px;
  cursor:pointer;
}

.left-arrow{
  left:40px;
}

.right-arrow{
  right:40px;
}

.page-copyright{
  display:flex;
  justify-content:flex-end;
  margin-top:30px;
  color:#777;
  font-size:14px;
}

@media(min-width:1200px) and (max-width:1500px){

  .hero{
    padding:52px 0 48px;
  }

  h1{
    font-size:96px;
  }

  .book-section{
    grid-template-columns:300px 1fr;
    gap:36px;
  }

  h2{
    font-size:38px;
  }

  .image-card{
    min-height:180px;
  }
}

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
    padding-bottom:0;

    border-right:0;
    border-bottom:0;
  }

  .book-gallery{
    display:flex;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    scroll-behavior:smooth;
    gap:0;
    scrollbar-width:none;
  }

  .book-gallery::-webkit-scrollbar{
    display:none;
  }

  .image-card {
    flex: 0 0 100%;
    min-width: 100%;
    width: 100%;

    height: auto;
    min-height: 0;

    margin: 0;
    background: transparent;

    scroll-snap-align: start;
  }

  .image-card img {
    display: block;
    width: 100%;
    height: auto;
  }
}

@media(max-width:560px){

  .back-button{
    font-size:52px;
  }

  .project-number{
    font-size:45px;
  }

  h1{
    font-size:66px;
  }

  h1.has-mobile-title .desktop-title{
    display:none;
  }

  h1.has-mobile-title .mobile-title{
    display:inline;
  }

  .image-card {
    height: auto;
    min-height: 0;
  }

  .page-copyright{
    font-size:13px;
  }
}
</style>
