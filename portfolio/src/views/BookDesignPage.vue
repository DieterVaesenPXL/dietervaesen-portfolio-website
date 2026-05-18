<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

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
    link: null,
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
</script>

<template>
  <SubWorkPages
    project-number="01"
    project-title="book design"
    :items="books"
  />
</template>
