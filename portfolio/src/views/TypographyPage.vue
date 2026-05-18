<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import horror1 from '@/assets/work/typography/typo_1.jpg'
import horror2 from '@/assets/work/typography/typo_3.jpg'
import horror3 from '@/assets/work/typography/typo_4.jpg'

const typoItems = [
  {
    number: '01',
    title: 'typegenres, horror font',
    slug: 'typegenres-horror-font',
    text: [
      'Voor dit project ontwierp ik een eigen lettertype met het thema thriller. Bij het ontwerp lag de focus op het creëren van vormen die een donkere en mysterieuze sfeer oproepen en aansluiten bij het gevoel van horror en spanning. Het lettertype bevat zowel kapitalen als onderkastletters en werd ontwikkeld in het programma Glyphs. Om het ontwerp te presenteren, ontwierp ik een gevouwen poster/booklet waarin het lettertype en zijn karakter op een visuele manier tot uiting komen.',
    ],
    images: [horror1, horror2, horror3],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="08"
    project-title="typography"
    :items="typoItems"
  />
</template>
