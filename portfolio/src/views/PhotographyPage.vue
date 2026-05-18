<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import athletics1 from '@/assets/work/photography/athletics/athletics_1.jpg'
import athletics2 from '@/assets/work/photography/athletics/athletics_2.jpg'
import athletics3 from '@/assets/work/photography/athletics/athletics_7.jpg'
import athletics4 from '@/assets/work/photography/athletics/athletics_8.jpg'
import athletics5 from '@/assets/work/photography/athletics/athletics_11.jpg'
import athletics6 from '@/assets/work/photography/athletics/athletics_12.jpg'

import airshow1 from '@/assets/work/photography/airshow/airshow_1.jpg'

const photographyItems = [
  {
    number: '01',
    title: 'athletics',
    text: [
      'Atletiek fascineert me door de combinatie van snelheid, kracht en emotie. Met mijn camera probeer ik vluchtige momenten vast te leggen en de intensiteit van de sport te bevriezen in één beeld. Het draait voor mij om timing, beweging en het vertellen van een verhaal binnen een fractie van een seconde.',
    ],
    images: [athletics1, athletics2, athletics4, athletics6, athletics3, athletics5],
    link: null,
  },
  {
    number: '02',
    title: 'airshow',
    text: [
      "Luchtvaart spreekt me aan door de kracht en precisie die ermee gepaard gaan. Door vliegtuigen te fotograferen probeer ik de dynamiek van opstijgen, landen, flyby's en beweging vast te leggen, terwijl techniek en compositie samenkomen in één beeld."
    ],
    images: [airshow1],
    link: null,
  },
  {
    number: '03',
    title: 'motorsport',
    text: [
      'Autofotografie geeft me de mogelijkheid om presisie en snelheid samen te brengen. Van krachtige lijnen en kleine details tot dynamische bewegingen: ik probeer telkens beelden te creëren die het karakter en de energie van een wagen versterken.',
    ],
    images: [],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="05"
    project-title="photography"
    :items="photographyItems"
  />
</template>
