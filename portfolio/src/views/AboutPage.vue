<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import profilePhoto from '@/assets/other/Profielfoto.jpg'

import {
  Zap,
  Focus,
  Trophy
} from 'lucide-vue-next'
</script>

<template>
  <main class="about-page">
    <NavigationBar />

    <section class="about-layout">
      <section class="intro-panel">
        <p class="hello">Hello,</p>

        <h1>I’m Dieter<span>.</span></h1>

        <div class="intro-content">
          <p>
            Ik ben een grafisch, digitaal en front-end designer met een sterke interesse in visuele identiteit, typografie en strakke interfaces. In 2025 behaalde ik mijn masterdiploma in de beeldende kunsten aan de PXL-MAD School of Arts, met afstudeerrichting grafische vormgeving. Tijdens mijn opleiding richtte ik me op doordachte concepten, sterke visuele uitwerkingen en functioneel design.
          </p>

          <img class="portrait" :src="profilePhoto" alt="Portrait of Dieter Vaesen" />
        </div>

        <div class="stats">
          <div>
            <strong>2025</strong>
            <span>Master Diploma</span>
          </div>

          <div>
            <strong>PXL-MAD</strong>
            <span>School of Arts</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Leergierige geest</span>
          </div>
        </div>
      </section>

      <section class="skills-panel">
        <article class="skill-card">
          <span class="number">01</span>
          <h2>Graphic<span>.</span></h2>
          <p>
            Ik ontwerp visuele identiteiten, posters, logo’s en drukwerk, met een focus op sterke concepten en heldere communicatie.
          </p>
        </article>

        <article class="skill-card">
          <span class="number">02</span>
          <h2>Digital<span>.</span></h2>
          <p>
            Van websites tot interactieve ervaringen — ik ontwerp en bouw digitale oplossingen die intuïtief en gebruiksgericht zijn.

          </p>
        </article>

        <article class="skill-card">
          <span class="number">03</span>
          <h2>Front-end<span>.</span></h2>
          <p>
            Ik ontwikkel responsieve, toegankelijke en performante websites met propere code en oog voor detail.
          </p>
        </article>
      </section>

      <aside class="drive-panel">
        <h2>What drives me<span>.</span></h2>

        <p class="drive-text">
          Actief in atletiek op competitieniveau in de middellange afstand, wat mijn discipline, doorzettingsvermogen en gedrevenheid versterkt — kwaliteiten die ik ook meeneem in mijn creatieve werk.
        </p>

        <div class="values-list">
          <div class="value-item">
  <span class="icon">
    <Zap />
  </span>
            <span>
              <strong>Vastberadenheid</strong>
              <small>Doorzetten en consistent blijven.</small>
            </span>
          </div>

          <div class="value-item">
  <span class="icon">
    <Focus />
  </span>
            <span>
              <strong>Focus</strong>
              <small>'Block out the noise.'</small>
            </span>
          </div>

          <div class="value-item">
  <span class="icon">
    <Trophy />
  </span>
            <span>
              <strong>Discipline</strong>
              <small>Kleine stappen leiden tot grote vooruitgang.</small>
            </span>
          </div>
        </div>

        <a class="cta-card" href="mailto:vaesendieter@icloud.com">
          <span class="card-arrow">↗</span>
          <strong>Let’s create<br />something great<br />together<span>.</span></strong>
        </a>
      </aside>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.95fr) minmax(280px, 0.8fr);
  gap: clamp(38px, 5vw, 72px);
  padding-top: clamp(52px, 7vw, 88px);
}

.skills-panel,
.drive-panel {
  border-left: 1px solid var(--grey);
  padding-left: clamp(34px, 4vw, 58px);
}

.hello {
  margin-bottom: 10px;
  color: #666;
  font-size: 17px;
}

h1 {
  margin-bottom: clamp(36px, 5vw, 58px);
  font-size: clamp(72px, 7vw, 110px);
  line-height: .88;
  letter-spacing: -.075em;
  font-weight: var(--weight-bold);
}

h1 span,
.skill-card h2 span,
.drive-panel h2 span,
.cta-card strong span {
  color: var(--blue);
}

.intro-content {
  display: grid;
  grid-template-columns: minmax(220px,.78fr) minmax(260px,1fr);
  gap: clamp(34px,5vw,64px);
  align-items: end;
}

.intro-content p,
.skill-card p,
.drive-text {
  font-size: clamp(16px,1.1vw,19px);
  line-height:1.55;
  font-weight:var(--weight-regular);
}

.portrait{
  width:100%;
  aspect-ratio:1 / 1.16;
  object-fit:cover;
  filter:grayscale(1);
  border-radius:16px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);

  margin-top:clamp(44px,5vw,68px);
  padding-top:clamp(30px,4vw,46px);

  border-top:1px solid var(--grey);
}

.stats div{
  padding:0 clamp(16px,3vw,42px);
  border-right:1px solid var(--grey);
}

.stats div:last-child{
  border-right:0;
}

.stats strong{
  display:block;
  margin-bottom:12px;
  font-size:clamp(28px,2.2vw,38px);
  line-height:1;
  font-weight:var(--weight-bold);
  letter-spacing:-.055em;
}

.stats span,
.value-item small{
  color:#666;
  font-size:15px;
}

.skill-card{
  padding-bottom:clamp(36px,5vw,56px);
  margin-bottom:clamp(34px,5vw,54px);

  border-bottom:1px solid var(--grey);
}

.skill-card:last-child{
  padding-bottom:0;
  margin-bottom:0;
  border-bottom:0;
}

.number{
  display:block;
  margin-bottom:22px;

  color:var(--blue);
  font-weight:var(--weight-bold);
}

.skill-card h2,
.drive-panel h2{
  margin-bottom:24px;
  font-size:clamp(34px,2.9vw,48px);
  line-height:.96;
  letter-spacing:-.065em;
  font-weight:var(--weight-bold);
}

.drive-text{
  margin-bottom:36px;
}

.values-list{
  margin-bottom:clamp(48px,6vw,84px);
}

.value-item{
  display:grid;
  grid-template-columns:66px 1fr;
  gap:18px;
  align-items:center;
  padding:22px 0;
  border-bottom:1px solid var(--grey);
}

.icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  color: var(--blue);
  background: #f5f5f5;
  border-radius: 999px;
}

.icon :deep(svg) {
  width: 24px;
  height: 24px;
  stroke-width: 1.8;
}

.value-item strong{
  display:block;
  margin-bottom:4px;
  font-size:18px;
  font-weight:var(--weight-bold);
}

.cta-card{
  position:relative;
  display:block;
  min-height:210px;
  padding:clamp(32px,4vw,48px);
  color:inherit;
  text-decoration:none;
  background:#f7f7f7;
  border-radius:28px;
  box-shadow:0 12px 30px rgba(0,0,0,.04);
}

.card-arrow{
  position:absolute;
  top:24px;
  right:30px;
  color:var(--blue);
  font-size:clamp(46px,4vw,68px);
  line-height:1;
}

.cta-card strong{
  display:block;
  margin-top:40px;
  font-size:clamp(26px,2vw,36px);
  line-height:.98;
  letter-spacing:-.06em;
  font-weight:var(--weight-bold);
}

/* ---------- MacBook 13" fix ---------- */

@media (min-width: 1200px) and (max-width: 1500px) {
  .about-page {
    padding: 34px 76px;
  }

  .about-layout {
    grid-template-columns: 1.45fr 0.9fr 0.74fr;
    gap: 42px;
    padding-top: 44px;
  }

  .skills-panel,
  .drive-panel {
    padding-left: 42px;
  }

  h1 {
    font-size: 74px;
    margin-bottom: 32px;
  }

  .hello {
    font-size: 15px;
  }

  .intro-content {
    grid-template-columns: 0.9fr 0.95fr;
    gap: 34px;
  }

  .intro-content p,
  .skill-card p,
  .drive-text {
    font-size: 14px;
    line-height: 1.42;
  }

  .portrait {
    max-height: 250px;
  }

  .stats {
    margin-top: 32px;
    padding-top: 28px;
  }

  .stats strong {
    font-size: 26px;
  }

  .stats span {
    font-size: 13px;
  }

  .skill-card {
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .number {
    margin-bottom: 10px;
    font-size: 14px;
  }

  .skill-card h2,
  .drive-panel h2 {
    font-size: 30px;
    margin-bottom: 16px;
  }

  .drive-text {
    margin-bottom: 24px;
  }

  .value-item {
    grid-template-columns: 48px 1fr;
    gap: 14px;
    padding: 13px 0;
  }

  .icon {
    width: 42px;
    height: 42px;
  }

  .icon svg {
    width: 20px;
    height: 20px;
  }

  .value-item strong {
    font-size: 15px;
  }

  .value-item small {
    font-size: 13px;
  }

  .values-list {
    margin-bottom: 32px;
  }

  .cta-card {
    min-height: 145px;
    padding: 28px;
  }

  .card-arrow {
    top: 18px;
    right: 24px;
    font-size: 46px;
  }

  .cta-card strong {
    margin-top: 34px;
    font-size: 23px;
  }
}

/* Tablet */

@media(max-width:1180px){

  .about-layout{
    grid-template-columns:1fr 1fr;
  }

  .drive-panel{
    grid-column:1 / -1;

    border-left:0;
    border-top:1px solid var(--grey);

    padding-left:0;
    padding-top:42px;
  }

}

/* Mobile */

@media(max-width:900px){

  .about-layout,
  .intro-content{
    display:block;
  }

  .skills-panel,
  .drive-panel{
    margin-top:56px;

    padding-top:42px;
    padding-left:0;

    border-left:0;
    border-top:1px solid var(--grey);
  }

  .intro-content p{
    margin-bottom:34px;
  }

}

@media(max-width:560px){

  .about-page{
    padding:22px;
  }

  h1{
    font-size:68px;
  }

  .stats{
    grid-template-columns:1fr;
  }

  .stats div{
    padding:0 0 22px;

    border-right:0;
    border-bottom:1px solid var(--grey);
  }

  .stats div:last-child{
    border-bottom:0;
  }

}
</style>
