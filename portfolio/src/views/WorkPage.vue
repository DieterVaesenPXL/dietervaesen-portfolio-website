<script setup>
import NavigationBar from '@/components/NavigationBar.vue'

import BookDesignCover1 from '@/assets/work/book design/archetypo/Archetypo_Cover.jpg'
import LogoDesignCover2 from '@/assets/work/logo design/strive/strive_logo_energybar.jpg'
import PosterDesignCover3 from '@/assets/work/posterdesign/Poster_Piamio Sanatorium.jpg'
import InternshipCover4 from '@/assets/work/internship/business cards/business-cards_2.jpg'
import PhotographyCover5 from '@/assets/other/Profielfoto.jpg'
import WebDesignCover6 from '@/assets/work/webdesign/pokedex-iphone.jpg'
import HuisCosemansKnutsCover7 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_cover.jpg'
import TypographyCover8 from '@/assets/work/typography/typo_1.jpg'
import VirgaJesseCover9 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_cover_open.jpg'


const projects = [
  {
    id: '01',
    title: 'book design',
    subtitle: ['archetypo', 'microtypo', 'non-place', 'manifest'],
    image: BookDesignCover1,
    link: '/work/bookdesign',
  },
  {
    id: '02',
    title: 'logo design',
    subtitle: ['strive', 'line'],
    image: LogoDesignCover2,
    link: null,
  },
  {
    id: '03',
    title: 'poster design',
    subtitle: ['rebus', 'menucard', 'enzo mari'],
    image: PosterDesignCover3,
    link: null,
  },
  {
    id: '04',
    title: 'internship',
    subtitle: ['lookbook', 'business cards'],
    image: InternshipCover4,
    link: null,
  },
  {
    id: '05',
    title: 'photography',
    subtitle: ['athletics', 'airshow', 'motorsport'],
    image: PhotographyCover5,
    link: null,
  },
  {
    id: '06',
    title: 'webdesign',
    subtitle: ['pokédex', 'take away', 'immohabits'],
    image: WebDesignCover6,
    link: null,
  },
  {
    id: '07',
    title: 'huis cosemans-knuts',
    subtitle: ['catalog', 'bachelor project', 'master project'],
    image: HuisCosemansKnutsCover7,
    link: null,
  },
  {
    id: '08',
    title: 'typography',
    subtitle: ['typegenres,', 'horror font'],
    image: TypographyCover8,
    link: null,
  },
  {
    id: '09',
    title: 'virga jesse',
    subtitle: ['poster', 'hommage', 'publication'],
    image: VirgaJesseCover9,
    link: null,
  },
]
</script>

<template>
  <main class="work-page">
    <NavigationBar />

    <section class="work-hero">
      <div>
        <p class="eyebrow">Selected</p>
        <h1>Work<span>.</span></h1>
      </div>

      <p class="intro-text">
        A selection of projects I’ve worked on — from concept to execution.
        Each project reflects a unique challenge and creative approach.
      </p>
    </section>

    <section class="project-list">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-row"
      >
    <span class="project-number">
      {{ project.id }}
    </span>

        <h2>
          {{ project.title }}<span>.</span>
        </h2>

        <ul class="project-tags">
          <li
            v-for="tag in project.subtitle"
            :key="tag"
          >
            <RouterLink
              v-if="project.title === 'book design'"
              :to="`/work/bookdesign#${tag}`"
              class="tag-link"
            >
              {{ tag }}
            </RouterLink>

            <span v-else>
      {{ tag }}
    </span>
          </li>
        </ul>

        <RouterLink
          v-if="project.link"
          :to="project.link"
          class="project-image clickable-image"
        >
          <img
            :src="project.image"
            :alt="project.title"
          />
        </RouterLink>

        <figure
          v-else
          class="project-image"
        >
          <img
            :src="project.image"
            :alt="project.title"
          />
        </figure>

        <span class="project-arrow">
      ↗
    </span>
      </article>
    </section>
  </main>
</template>

<style scoped>
.work-page {
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.work-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
  gap: clamp(36px, 7vw, 96px);
  align-items: end;
  padding: clamp(46px, 7vw, 78px) 0 clamp(42px, 6vw, 68px);
  border-bottom: 1px solid var(--grey);
}

.eyebrow {
  margin-bottom: 10px;
  color: #666;
  font-size: 17px;
}

h1 {
  font-size: clamp(82px, 10vw, 150px);
  line-height: 0.86;
  letter-spacing: -0.085em;
  font-weight: var(--weight-bold);
}

h1 span,
.project-row h2 span {
  color: var(--blue);
}

.intro-text {
  max-width: 390px;
  font-size: clamp(16px, 1.2vw, 19px);
  line-height: 1.5;
  font-weight: var(--weight-regular);
}

.project-list {
  display: grid;
}

.project-row {
  display: grid;
  grid-template-columns:
    70px
    minmax(220px, 0.9fr)
    minmax(150px, 0.65fr)
    minmax(300px, 0.95fr)
    44px;
  align-items: center;
  gap: clamp(24px, 4vw, 54px);

  min-height: 230px;
  padding: 28px 0;

  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid var(--grey);
}

.project-number {
  align-self: start;
  padding-top: 24px;
  font-size: 15px;
  font-weight: var(--weight-bold);
}

.project-row h2 {
  max-width: 340px;
  font-size: clamp(32px, 3.1vw, 50px);
  line-height: 0.92;
  letter-spacing: -0.07em;
  font-weight: var(--weight-bold);
}

.project-tags {
  min-height: 96px;
  padding-left: clamp(24px, 3vw, 44px);
  border-left: 1px solid var(--grey);
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-tags li {
  color: #666;
  font-size: 15px;
  line-height: 1.45;
}

.project-image {
  justify-self: end;
  width: 360px;
  height: 180px;

  overflow: hidden;
  background: #f1f1f1;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center;

  transition:
    transform .25s ease;
}

/* Enkel afbeelding klikbaar */

.clickable-image {
  display: block;

  overflow: hidden;
  cursor: pointer;
}

.clickable-image:hover img {
  transform: scale(1.04);
}

/* Pijltje */

.project-arrow {
  justify-self: end;

  color: var(--black);

  font-size: 38px;
  line-height: 1;

  transition:
    transform .25s ease,
    color .25s ease;
}

/* Pijltje reageert enkel wanneer je over afbeelding hovert */

.clickable-image:hover ~ .project-arrow {
  color: var(--blue);

  transform: translate(5px,-5px);
}

.tag-link {
  color: inherit;
  text-decoration: none;
}

.tag-link:hover {
  color: var(--blue);
}

/* MacBook 13" / compact desktop */
@media (min-width: 1200px) and (max-width: 1500px) {
  .work-page {
    padding: 34px 76px;
  }

  .work-hero {
    padding: 42px 0 46px;
  }

  h1 {
    font-size: 112px;
  }

  .intro-text {
    max-width: 350px;
    font-size: 15px;
  }

  .project-row {
    grid-template-columns:
      54px
      minmax(210px, 0.85fr)
      minmax(150px, 0.58fr)
      minmax(300px, 0.85fr)
      34px;
    gap: 34px;

    min-height: 220px;
    padding: 26px 0;
  }

  .project-number {
    padding-top: 24px;
    font-size: 14px;
  }

  .project-row h2 {
    font-size: 38px;
  }

  .project-tags {
    min-height: 110px;
    padding-left: 28px;
  }

  .project-tags li {
    font-size: 13px;
  }

  .project-image {
    width: 330px;
    height: 170px;
    border-radius: 14px;
  }

  .project-arrow {
    font-size: 32px;
  }
}

@media (max-width: 900px) {
  .work-hero {
    display: block;
  }

  .intro-text {
    margin-top: 28px;
  }

  .project-row {
    grid-template-columns: 44px minmax(0, 1fr) 36px;
    gap: 18px;
    min-height: 0;
    padding: 34px 0;
  }

  .project-number {
    grid-column: 1;
  }

  .project-row h2 {
    grid-column: 2;
  }

  .project-tags {
    grid-column: 2;
    min-height: 0;
    margin-top: 14px;
    padding-left: 0;
    border-left: 0;
    display: block;
  }

  .project-image {
    grid-column: 2 / -1;
    justify-self: stretch;
    width: 100%;
    height: 240px;
    margin-top: 22px;
  }

  .project-arrow {
    grid-column: 3;
    grid-row: 1;
  }
}

@media (max-width: 560px) {
  .work-page {
    padding: 22px;
  }

  h1 {
    font-size: 78px;
  }

  .project-row {
    grid-template-columns: 38px minmax(0, 1fr) 28px;
  }

  .project-row h2 {
    font-size: 38px;
  }

  .project-image {
    height: 210px;
  }
}
</style>
