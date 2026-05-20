<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import pokedex1 from '@/assets/work/webdesign/pokedex/pokedex-iphone_1.jpg'
import pokedex2 from '@/assets/work/webdesign/pokedex/pokedex-iphone_2.jpg'
import pokedex3 from '@/assets/work/webdesign/pokedex/pokedex-iphone_3.jpg'

import takeaway1 from '@/assets/work/webdesign/take away/TakeAway_1.jpg'
import takeaway2 from '@/assets/work/webdesign/take away/TakeAway_2.jpg'
import takeaway3 from '@/assets/work/webdesign/take away/TakeAway_3.jpg'

import dashboard1 from '@/assets/work/webdesign/dashboard/Dashboard_1.jpg'

import immohabits1 from '@/assets/work/webdesign/immohabits/immohabits_1.jpg'

const webdesignItems = [
  {
    number: '01',
    title: 'pokédex',
    slug: 'pokedex',
    text: [
      'De Pokédex was een schoolopdracht die diende als leerproject om vertrouwd te raken met Vue. Tijdens dit project onderzocht ik de basisprincipes van routing, reactivity, componenten, Pinia en het werken met API’s via fetch. Het project vormde een belangrijke stap in mijn ontwikkeling binnen front-end development.',
    ],
    images: [pokedex1, pokedex2, pokedex3],
    link: null,
  },
  {
    number: '02',
    title: 'take away',
    text: [
      'Take Away werd ontwikkeld als examenopdracht waarbij ik een eenvoudige website bouwde met JavaScript. De focus lag op het toepassen van basisprincipes zoals structuur, interactie en gebruiksvriendelijkheid.',
    ],
    images: [takeaway1, takeaway2, takeaway3],
    link: null,
  },
  {
    number: '03',
    title: 'dashboard',
    text: [
      'Voor dit project heb ik een traditioneel cv omgezet naar een interactief dashboard. In plaats van een klassieke opbouw wordt informatie zoals profiel, vaardigheden, opleidingen, werkervaring en portfolio weergegeven in overzichtelijke modules.',
      'De focus lag op een duidelijke structuur, gebruiksvriendelijkheid en visuele balans, waarbij het ontwerp niet alleen informeert, maar ook mijn grafische en digitale vaardigheden weerspiegelt.',
    ],
    images: [dashboard1],
    link: null,
  },
  {
    number: '04',
    title: 'immohabits',
    text: [
      'Immohabits was een project binnen het vak Werkplekleren waarbij we in een multidisciplinair team van vijf studenten werkten aan een nieuwe website voor een echte klant. Studenten uit de richting Design stonden in voor de visuele identiteit en het ontwerp, programmeerstudenten ontwikkelden de backend, terwijl ik samen met de andere studenten Web verantwoordelijk was voor de front-end en de ontwikkeling van de website. Het project bood een waardevolle ervaring in samenwerken, communicatie en het vertalen van een ontwerp naar een werkende digitale toepassing.',
    ],
    images: [immohabits1],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="06"
    project-title="webdesign"
    :items="webdesignItems"
  />
</template>
