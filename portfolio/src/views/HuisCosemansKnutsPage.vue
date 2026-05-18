<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import catalog1 from '@/assets/work/huis cosemans-knuts/catalog/HCK_catalog_1.jpg'
import catalog2 from '@/assets/work/huis cosemans-knuts/catalog/HCK_catalog_3.jpg'

import bachelor1 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_cover.jpg'
import bachelor2 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_1.jpg'
import bachelor3 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_2.jpg'
import bachelor4 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_3.jpg'
import bachelor5 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_4.jpg'
import bachelor6 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_5.jpg'
import bachelor7 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_6.jpg'
import bachelor8 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_7.jpg'
import bachelor9 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_8.jpg'
import bachelor10 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_9.jpg'
import bachelor11 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_10.jpg'
import bachelor12 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_11.jpg'
import bachelor13 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_12.jpg'
import bachelor14 from '@/assets/work/huis cosemans-knuts/bachelor project/book/HCK_BA-Project_spread_13.jpg'

import master1 from '@/assets/work/huis cosemans-knuts/master project/book/HKC_MA_Project_cover.jpg'
import master2 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_1.jpg'
import master3 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_2.jpg'
import master4 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_3.jpg'
import master5 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_4.jpg'
import master6 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_5.jpg'
import master7 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_6.jpg'
import master8 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_7.jpg'
import master9 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_8.jpg'
import master10 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_9.jpg'
import master11 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_10.jpg'
import master12 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_11.jpg'
import master13 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_12.jpg'
import master14 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_13.jpg'
import master15 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_14.jpg'
import master16 from '@/assets/work/huis cosemans-knuts/master project/book/HCK_MA-Project_spraed_15.jpg'

const huisCosemansKnutsItems = [
  {
    number: '01',
    title: 'catalog',
    text: [
      'Deze catalogus brengt een collectie onverkochte winkelartikelen uit de voormalige winkel van mijn grootouders in beeld. Fotografie vormde de basis van het project en werd ingezet om de objecten op een nieuwe manier te documenteren en te presenteren. De catalogus fungeert niet alleen als archief, maar ook als een visuele vertaling van een stukje familiegeschiedenis en erfgoed.',
    ],
    images: [catalog1, catalog2],
    link: null,
  },
  {
    number: '02',
    title: 'bachelor project',
    text: [
      'Voor mijn bachelorproject onderzocht ik hoe grafisch ontwerp kan bijdragen aan het bewaren van herinneringen en erfgoed. Mijn grootouders runden meer dan dertig jaar een groothandel, maar ik heb deze periode zelf nooit bewust meegemaakt. Vanuit mijn persoonlijke verbondenheid met het domein en de objecten die erachter bleven, wilde ik hun verhaal opnieuw tot leven brengen. Door objecten te documenteren, archiveren en in een nieuwe context te plaatsen, creëerde ik een visueel eerbetoon aan hun levenswerk en de herinneringen die daarmee verbonden zijn.',
    ],
    images: [bachelor1, bachelor2, bachelor3, bachelor4, bachelor5, bachelor6, bachelor7, bachelor8, bachelor9, bachelor10, bachelor11, bachelor12, bachelor13, bachelor14],
    link: null,
  },
  {
    number: '03',
    title: 'master project',
    text: [
      'Mijn masterproject onderzoekt wat er gebeurt met de betekenis van een object wanneer het loskomt van zijn oorspronkelijke verpakking en context. Centraal staat een collectie onverkochte winkelartikelen uit de voormalige winkel van mijn grootouders, die jarenlang onaangeroerd op zolder bewaard bleven.',
      'Door middel van artistieke experimenten, fotografie, visuele installaties en onderzoek onderzocht ik hoe objecten en verpakkingen een nieuwe betekenis kunnen krijgen. Waar verpakkingen oorspronkelijk een beschermende en commerciële functie hadden, onderzocht ik hoe ze ook kunnen functioneren als historisch, grafisch en artistiek element. Het project vormt niet alleen een onderzoek naar objecten en betekenis, maar ook een persoonlijk eerbetoon aan het levenswerk en erfgoed van mijn grootouders.',
    ],
    images: [master1, master2, master3, master4, master5, master6, master7, master8, master9, master10, master11, master12, master13, master14, master15, master16],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="07"
    project-title="huis cosemans-knuts"
    :items="huisCosemansKnutsItems"
  />
</template>
