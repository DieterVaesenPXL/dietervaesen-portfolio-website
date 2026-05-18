<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import lookbook1 from '@/assets/work/internship/lookbook/lookbook_cover.jpg'
import lookbook2 from '@/assets/work/internship/lookbook/lookbook_spraed_1.jpg'
import lookbook3 from '@/assets/work/internship/lookbook/lookbook_spraed_2.jpg'

import businesscard1 from '@/assets/work/internship/business cards/business-cards_1.jpg'
import businesscard2 from '@/assets/work/internship/business cards/business-cards_2.jpg'
import businesscard3 from '@/assets/work/internship/business cards/business-cards_3.jpg'


const internshipItems = [
  {
    number: '01',
    title: 'lookbook',
    text: [
      'Tijdens mijn zes weken durende stage in de zomer van 2025 werkte ik als grafisch ontwerper bij de digitale drukkerij Burocad in Peer, Limburg, België. Voor dit project ontwierp ik een lookbook dat klanten inspireert en een overzicht biedt van het aanbod en de mogelijkheden van Burocad. Het doel was om de verschillende diensten en realisaties op een heldere en aantrekkelijke manier te presenteren.',
    ],
    images: [lookbook1, lookbook2, lookbook3],
    link: null,
  },
  {
    number: '02',
    title: 'business card',
    slug: 'business-card',
    text: [
      'Voor de nieuwe naamkaartjes van Burocad kreeg ik de vrijheid om mijn creativiteit volledig te benutten. Bij het ontwerp vond ik het belangrijk om de identiteit van een digitale drukkerij subtiel te verwerken. Daarom integreerde ik snijtekens als grafisch element, waardoor het ontwerp niet alleen functioneel is, maar ook een directe link legt met de wereld van print en productie.',
    ],
    images: [businesscard1, businesscard2, businesscard3],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="04"
    project-title="internship"
    :items="internshipItems"
  />
</template>
