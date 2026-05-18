<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import rebus1 from '@/assets/work/posterdesign/rebus/rebus.jpg'

import menucard1 from '@/assets/work/posterdesign/menu/menu.jpg'

import enzomari1 from '@/assets/work/posterdesign/enzo mari/EnzoMari_1.jpg'
import enzomari2 from '@/assets/work/posterdesign/enzo mari/EnzoMari_2.jpg'

import paimiosanatorium1 from '@/assets/work/posterdesign/piamio sanatorium/Poster_Piamio Sanatorium.jpg'

const posters = [
  {
    number: '01',
    title: 'rebus',
    text: [
      'Voor dit project ontwierp ik een poster gebaseerd op een spreekwoord dat werd vertaald naar een rebus. Door typografische en visuele elementen te combineren ontstond een speelse compositie waarin betekenis en vorm elkaar versterken. Het project gaf ruimte om te experimenteren met hiërarchie, beeldtaal en creatieve interpretatie.',
    ],
    images: [rebus1],
    link: null,
  },
  {
    number: '02',
    title: 'menucard',
    text: [
      'Voor dit project liet ik me inspireren door Exercices de Style van Raymond Queneau, waarin één verhaal op 99 verschillende manieren wordt verteld. Op basis van twee geselecteerde stijlen ontwikkelde ik een reeks posters waarin typografie en beeld samenkomen. Het project onderzoekt hoe vorm en inhoud elkaar kunnen versterken en hoe verschillende visuele benaderingen eenzelfde verhaal telkens een andere betekenis kunnen geven.',
    ],
    images: [menucard1],
    link: null,
  },
  {
    number: '03',
    title: 'enzo mari',
    text: [
      'Voor de tentoonstelling rond Enzo Mari in C-mine Genk ontwikkelde ik een experimentele en visueel sterke identiteit. Na een bezoek aan de expo en verdiepend onderzoek naar Mari’s visie en ontwerpfilosofie creëerde ik een persoonlijke interpretatie in de vorm van een reeks posters. Het project combineert onderzoek, conceptontwikkeling en grafische vormgeving tot een eigen visuele identiteit.',
    ],
    images: [enzomari1, enzomari2],
    link: null,
  },
  {
    number: '04',
    title: 'paimio sanatorium',
    text: [
      'Deze poster werd ontworpen voor een internationale ontwerpwedstrijd ter gelegenheid van het 90-jarig bestaan van het Paimio Sanatorium. Het ontwerp vertrekt vanuit de mensgerichte visie van Aino en Alvar Aalto, waarbij architectuur, omgeving en welzijn nauw met elkaar verbonden zijn. Door onderzoek en interpretatie vertaalde ik deze ideeën naar een hedendaags en visueel concept.',
    ],
    images: [paimiosanatorium1],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="03"
    project-title="poster design"
    :items="posters"
  />
</template>
