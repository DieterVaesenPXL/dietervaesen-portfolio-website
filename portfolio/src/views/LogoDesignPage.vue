<script setup>
import SubWorkPages from '@/components/SubWorkPages.vue'

import lemur1 from '@/assets/work/logo design/lemur/Lemur_1.jpg'
import lemur2 from '@/assets/work/logo design/lemur/Lemur_2.jpg'
import lemur3 from '@/assets/work/logo design/lemur/Lemur_3.jpg'
import lemur4 from '@/assets/work/logo design/lemur/Lemur_4.jpg'

import line1 from '@/assets/work/logo design/line/line-logo-building.jpg'
import line2 from '@/assets/work/logo design/line/Car.jpg'
import line3 from '@/assets/work/logo design/line/Keychain.jpg'

import strive1 from '@/assets/work/logo design/strive/strive_logo_can.jpg'
import strive2 from '@/assets/work/logo design/strive/strive_logo_energybar.jpg'
import strive3 from '@/assets/work/logo design/strive/strive_logo_hat.jpg'

const logos = [
  {
    number: '01',
    title: 'lemur',
    text: [
      'Een experimenteel logo-ontwerp waarbij een willekeurig woord als vertrekpunt diende. Vanuit onderzoek en schetsen werd gezocht naar een visuele identiteit die zowel karakter als betekenis uitstraalt. Het resultaat combineert eenvoud met een duidelijke visuele herkenbaarheid.'
    ],
    images: [lemur1, lemur2, lemur3, lemur4],
    link: null,
  },
  {
    number: '02',
    title: 'line',
    text: [
      'Voor dit project ontwikkelde ik een thematisch logo op basis van een willekeurig gekozen woord. De uitdaging lag in het vertalen van een abstract begrip naar een helder en herkenbaar visueel concept. Door te spelen met vorm, ritme en eenvoud ontstond een logo dat de essentie van het gekozen thema communiceert.',
    ],
    images: [line1, line2, line3],
    link: null,
  },
  {
    number: '03',
    title: 'strive',
    text: [
      'Strive is een concept voor een gezonder alternatief op traditionele energiedranken. In plaats van een energiedrank werd een compact energie-snoepje ontwikkeld dat zorgt voor focus en een langdurige energieboost zonder de typische suikerpiek.',
      'De doelgroep richt zich voornamelijk op studenten die op zoek zijn naar een praktische en toegankelijke manier om hun concentratie en energie te ondersteunen tijdens het studeren of werken.',
      'Voor de visuele identiteit werd gekozen voor een minimalistische en krachtige vormgeving met een strak woordmerk en een ondersteunend symbool. De verpakking bestaat uit een zwart ontwerp met limegroene accenten, geïnspireerd op de frisse limoen- en kiwismaak van het product. Hierbij werd bewust gezocht naar een energieke uitstraling zonder visueel te dicht aan te leunen bij bestaande merken binnen de energiedrankmarkt.'
    ],
    images: [strive1, strive2, strive3],
    link: null,
  },
]
</script>

<template>
  <SubWorkPages
    project-number="02"
    project-title="logo design"
    :items="logos"
  />
</template>
