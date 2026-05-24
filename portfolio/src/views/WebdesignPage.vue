<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import pokedex1 from '@/assets/work/webdesign/pokedex/pokedex-iphone_1.jpg'
import pokedex2 from '@/assets/work/webdesign/pokedex/pokedex-iphone_2.jpg'
import pokedex3 from '@/assets/work/webdesign/pokedex/pokedex-iphone_3.jpg'
import pokedex4 from '@/assets/work/webdesign/pokedex/pokedex-iphone_4.jpg'
import pokedex5 from '@/assets/work/webdesign/pokedex/pokedex-iphone_5.jpg'
import pokedex6 from '@/assets/work/webdesign/pokedex/pokedex-iphone_6.jpg'

import takeaway1 from '@/assets/work/webdesign/take away/TakeAway_1.jpg'
import takeaway2 from '@/assets/work/webdesign/take away/TakeAway_4.jpg'
import takeaway3 from '@/assets/work/webdesign/take away/TakeAway_3.jpg'

import dashboard1 from '@/assets/work/webdesign/dashboard/Dashboard_1.jpg'

import immohabits2 from '@/assets/work/webdesign/immohabits/immohabits_2.jpg'
import immohabits3 from '@/assets/work/webdesign/immohabits/immohabits_3.jpg'
import immohabits4 from '@/assets/work/webdesign/immohabits/immohabits_4.jpg'
import immohabits5 from '@/assets/work/webdesign/immohabits/immohabits_5.jpg'

const webdesignItems = [
  {
    number: '01',
    title: 'pokédex',
    slug: 'pokedex',
    text: [
      'De Pokédex was een schoolopdracht die diende als leerproject om vertrouwd te raken met Vue. Tijdens dit project onderzocht ik de basisprincipes van routing, reactivity, componenten, Pinia en het werken met API’s via fetch. Het project vormde een belangrijke stap in mijn ontwikkeling binnen front-end development.',
    ],
    images: [pokedex1, pokedex2, pokedex3, pokedex4, pokedex5, pokedex6],
    link: null,
  },
  {
    number: '02',
    title: 'immohabits',
    text: [
      "Immohabits was een project binnen het vak Werkplekleren 2, waarbij we in een multidisciplinair team van zes studenten samenwerkten aan de ontwikkeling van een nieuwe website voor de klant ImmoHabits. Het doel was om een gebruiksvriendelijke en professionele digitale omgeving te creëren die aansloot bij de identiteit en verwachtingen van de klant.",
      "Binnen het team had iedere discipline een eigen rol. Studenten uit de richting Design waren verantwoordelijk voor de visuele identiteit en het ontwerp, terwijl programmeerstudenten instonden voor de backend. Samen met een medestudent Web Development nam ik de front-end ontwikkeling voor mijn rekening. Hierbij vertaalden we het ontwerp naar een functionele en responsieve website.",
      "Dit project gaf me de kans om ervaring op te doen in een realistische werkomgeving, waarbij samenwerking en communicatie centraal stonden. Daarnaast heb ik geleerd om als één team naar een gemeenschappelijk doel toe te werken en elkaar te ondersteunen waar nodig. Tijdens het project kreeg ik ook de rol van Scrum Master, waardoor ik ervaring opdeed in het begeleiden van het team, het bewaken van de voortgang en het organiseren van een efficiënte samenwerking.",
    ],
    images: [immohabits2, immohabits3, immohabits4, immohabits5],
    link: null,
  },
  {
    number: '03',
    title: 'take away',
    text: [
      'Take Away werd ontwikkeld als examenopdracht waarbij ik een eenvoudige website bouwde met JavaScript. De focus lag op het toepassen van basisprincipes zoals structuur, interactie en gebruiksvriendelijkheid.',
    ],
    images: [takeaway1, takeaway2, takeaway3],
    link: null,
  },
  {
    number: '04',
    title: 'dashboard',
    text: [
      'Voor dit project heb ik een traditioneel cv omgezet naar een interactief dashboard. In plaats van een klassieke opbouw wordt informatie zoals profiel, vaardigheden, opleidingen, werkervaring en portfolio weergegeven in overzichtelijke modules.',
      'De focus lag op een duidelijke structuur, gebruiksvriendelijkheid en visuele balans, waarbij het ontwerp niet alleen informeert, maar ook mijn grafische en digitale vaardigheden weerspiegelt.',
    ],
    images: [dashboard1],
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
