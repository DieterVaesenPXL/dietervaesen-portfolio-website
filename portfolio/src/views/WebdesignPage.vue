<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import pokedex1 from '@/assets/work/webdesign/pokedex-iphone.jpg'

const webdesignItems = [
  {
    number: '01',
    title: 'pokédex',
    slug: 'pokedex',
    text: [
      'De Pokédex was een schoolopdracht die diende als leerproject om vertrouwd te raken met Vue. Tijdens dit project onderzocht ik de basisprincipes van routing, reactivity, componenten, Pinia en het werken met API’s via fetch. Het project vormde een belangrijke stap in mijn ontwikkeling binnen front-end development.',
    ],
    images: [pokedex1],
    link: null,
  },
  {
    number: '02',
    title: 'take away',
    text: [
      'Take Away werd ontwikkeld als examenopdracht waarbij ik een eenvoudige website bouwde met JavaScript. De focus lag op het toepassen van basisprincipes zoals structuur, interactie en gebruiksvriendelijkheid.',
    ],
    images: [],
    link: null,
  },
  {
    number: '03',
    title: 'immohabits',
    text: [
      'Immohabits was een project binnen het vak Werkplekleren waarbij we in een multidisciplinair team van vijf studenten werkten aan een nieuwe website voor een echte klant. Studenten uit de richting Design stonden in voor de visuele identiteit en het ontwerp, programmeerstudenten ontwikkelden de backend, terwijl ik samen met de andere studenten Web verantwoordelijk was voor de front-end en de ontwikkeling van de website. Het project bood een waardevolle ervaring in samenwerken, communicatie en het vertalen van een ontwerp naar een werkende digitale toepassing.',
    ],
    images: [],
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
