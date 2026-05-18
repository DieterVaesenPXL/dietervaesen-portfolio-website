<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import publicatie1 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_cover_open.jpg'
import publicatie2 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_bladeren.jpg'
import publicatie3 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_1.jpg'
import publicatie4 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_2.jpg'
import publicatie5 from '@/assets/work/virga jesse/publicatie/virga-jesse_publicatie_spread_3.jpg'

import hommage1 from '@/assets/work/virga jesse/hommage/virga-jesse_hommage_open_cover.jpg'
import hommage2 from '@/assets/work/virga jesse/hommage/virga-jesse_hommage_cover + open.jpg'
import hommage3 from '@/assets/work/virga jesse/hommage/virga-jesse_hommage_spread.jpg'

import poster1 from '@/assets/work/virga jesse/poster/virga-jesse_poster.jpg'

const virgajesseItems = [
  {
    number: '01',
    title: 'publicatie',
    text: [
      'Voor de Virga Jessefeesten in Hasselt werkte ik samen met een designteam aan een publicatie ter ere van kunstenaar en docent Rik Rappoort. De publicatie documenteert zijn grafisch werk en vormt een blijvende referentie voor toekomstige studenten. Tijdens dit proces werkten we van concept tot uitwerking aan een sterk en samenhangend verhaal.',
    ],
    images: [publicatie1, publicatie2, publicatie3, publicatie4, publicatie5],
    link: null,
  },
  {
    number: '02',
    title: 'hommage',
    text: [
      'Als onderdeel van het project ontwikkelden we een visuele hommage aan Rik Rappoort. Door onderzoek naar zijn werk en grafische stijl zochten we naar een manier om zijn artistieke bijdrage te eren en te vertalen naar een hedendaagse visuele vorm.',
    ],
    images: [hommage1, hommage2, hommage3],
    link: null,
  },
  {
    number: '03',
    title: 'poster',
    text: [
      'Naast de publicatie ontwierpen we ook een affiche voor de tentoonstelling rond Rik Rappoort tijdens de Virga Jessefeesten. Hierbij stond een sterke visuele communicatie centraal, waarbij vormgeving en inhoud samenkomen om de aandacht van bezoekers te trekken en het verhaal van de tentoonstelling te ondersteunen.',
      'Deze samenwerking met het Virga Jessecomité bood mij de kans om ervaring op te doen binnen een realistische werkomgeving en heeft me zowel creatief als professioneel sterk doen groeien.',
    ],
    images: [poster1],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="01"
    project-title="book design"
    :items="virgajesseItems"
  />
</template>
