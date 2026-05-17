<script setup>
import NavigationBar from '@/components/NavigationBar.vue'

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
} from 'lucide-vue-next'
</script>

<template>
  <main class="contact-page">
    <NavigationBar />

    <section class="contact-layout">
      <div class="intro">
        <h1>Let’s<br />connect<span>.</span></h1>

        <p>
          Have a project in mind or just want to say hi?
          Feel free to get in touch.
        </p>

        <div class="contact-list">
          <a class="contact-item" href="mailto:vaesendieter@icloud.com">
            <span class="icon">
              <Mail />
            </span>

            <span>
              <small>E-mail</small>
              <strong>vaesendieter@icloud.com</strong>
            </span>
          </a>

          <a class="contact-item" href="tel:+32474123456">
            <span class="icon">
              <Phone />
            </span>

            <span>
              <small>Phone</small>
              <strong>+32 474 68 80 38</strong>
            </span>
          </a>

          <div class="contact-item">
            <span class="icon">
              <MapPin />
            </span>

            <span>
              <small>Based in</small>
              <strong>Belgium</strong>
            </span>
          </div>
        </div>
      </div>

      <aside class="side">
        <p class="eyebrow">Socials</p>

        <div class="social-list">
          <a class="social-item" href="https://instagram.com/dietervaesen" target="_blank" rel="noreferrer">
            <span class="icon social-icon">
              <Instagram />
            </span>

            <strong>dietervaesen</strong>
            <span class="arrow">→</span>
          </a>

          <a class="social-item" href="https://instagram.com/d.v._fotografie" target="_blank" rel="noreferrer">
            <span class="icon social-icon">
              <Instagram />
            </span>

            <strong>d.v._fotografie</strong>
            <span class="arrow">→</span>
          </a>

          <a class="social-item" href="https://www.linkedin.com/in/dieter-vaesen-4a44ba224/" target="_blank" rel="noreferrer">
            <span class="icon social-icon">
              <Linkedin />
            </span>

            <strong>Dieter Vaesen</strong>
            <span class="arrow">→</span>
          </a>
        </div>

        <a class="availability-card" href="mailto:vaesendieter@icloud.com">
          <span class="card-arrow">↗</span>

          <small>Available for</small>

          <strong>
            collaborations<br />
            and freelance<br />
            projects<span>.</span>
          </strong>
        </a>
      </aside>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100dvh;
  padding: clamp(24px, 4vw, 56px) clamp(22px, 7vw, 128px);
  color: var(--black);
  background: #fff;
  font-family: var(--typeface);
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 0.94fr);
  gap: clamp(36px, 7vw, 96px);
  align-items: start;
  padding-top: clamp(54px, 8vw, 100px);
}

.contact-layout::before {
  content: "";
  grid-column: 2;
  grid-row: 1;
  width: 1px;
  height: 100%;
  min-height: 680px;
  background: var(--grey);
}

.intro {
  grid-column: 1;
}

.side {
  grid-column: 3;
}

h1 {
  max-width: 620px;
  font-size: clamp(76px, 10vw, 150px);
  line-height: 0.86;
  letter-spacing: -0.085em;
  font-weight: var(--weight-bold);
}

h1 span,
.availability-card strong span {
  color: var(--blue);
}

.intro > p {
  max-width: 360px;
  margin: 34px 0 76px;
  color: #666;
  font-size: clamp(18px, 1.5vw, 24px);
  line-height: 1.35;
}

.contact-list {
  max-width: 470px;
}

.contact-item,
.social-item {
  display: grid;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid var(--grey);
}

.contact-item {
  grid-template-columns: 74px minmax(0, 1fr);
  gap: 22px;
  padding: 22px 0;
}

.social-item {
  grid-template-columns: 66px minmax(0, 1fr) auto;
  gap: 18px;
  padding: 22px 0;
}

.icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  color: var(--blue);
  background: #f5f5f5;
  border-radius: 999px;
}

.icon :deep(svg) {
  width: 28px;
  height: 28px;
  stroke-width: 1.7;
}

.social-icon {
  width: 54px;
  height: 54px;
}

.social-icon :deep(svg) {
  width: 25px;
  height: 25px;
}

small,
.eyebrow {
  display: block;
  color: #666;
  font-size: 14px;
  font-weight: var(--weight-bold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-item small {
  margin-bottom: 8px;
}

.contact-item strong,
.social-item strong {
  display: block;
  font-size: clamp(20px, 1.65vw, 28px);
  font-weight: var(--weight-medium);
  letter-spacing: -0.04em;
  overflow-wrap: anywhere;
}

.eyebrow {
  margin: 16px 0 26px;
}

.social-list {
  margin-bottom: clamp(64px, 8vw, 120px);
}

.arrow,
.card-arrow {
  color: var(--blue);
  font-weight: var(--weight-bold);
}

.arrow {
  font-size: 34px;
  transition: transform 180ms ease;
}

.social-item:hover .arrow,
.availability-card:hover .card-arrow {
  transform: translate(6px, -2px);
}

.availability-card {
  position: relative;
  display: block;
  padding: clamp(36px, 5vw, 62px);
  color: inherit;
  text-decoration: none;
  background: #f7f7f7;
  border-radius: 28px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
}

.card-arrow {
  position: absolute;
  top: 28px;
  right: 36px;
  font-size: clamp(56px, 6vw, 88px);
  line-height: 1;
  transition: transform 180ms ease;
}

.availability-card small {
  color: #666;
}

.availability-card strong {
  display: block;
  margin-top: 18px;
  font-size: clamp(34px, 3.5vw, 58px);
  line-height: 0.96;
  letter-spacing: -0.075em;
  font-weight: var(--weight-bold);
}

/* ---------- MacBook 13" / compact desktop ---------- */

@media (min-width: 1200px) and (max-width: 1500px) {
  .contact-page {
    padding: 34px 76px;
  }

  .contact-layout {
    grid-template-columns: minmax(0, 1fr) 1px minmax(0, 0.9fr);
    gap: 58px;
    padding-top: 54px;
  }

  .contact-layout::before {
    min-height: 560px;
  }

  h1 {
    font-size: 112px;
  }

  .intro > p {
    max-width: 320px;
    margin: 28px 0 54px;
    font-size: 18px;
    line-height: 1.35;
  }

  .contact-list {
    max-width: 430px;
  }

  .contact-item {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 18px;
    padding: 18px 0;
  }

  .social-item {
    grid-template-columns: 58px minmax(0, 1fr) auto;
    gap: 16px;
    padding: 18px 0;
  }

  .icon {
    width: 52px;
    height: 52px;
  }

  .icon :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .social-icon {
    width: 48px;
    height: 48px;
  }

  .social-icon :deep(svg) {
    width: 22px;
    height: 22px;
  }

  small,
  .eyebrow {
    font-size: 13px;
  }

  .contact-item strong,
  .social-item strong {
    font-size: 23px;
  }

  .eyebrow {
    margin: 10px 0 20px;
  }

  .social-list {
    margin-bottom: 58px;
  }

  .arrow {
    font-size: 30px;
  }

  .availability-card {
    padding: 42px;
    border-radius: 26px;
  }

  .card-arrow {
    top: 24px;
    right: 30px;
    font-size: 62px;
  }

  .availability-card strong {
    margin-top: 14px;
    font-size: 42px;
  }
}

@media (max-width: 900px) {
  .contact-layout {
    display: block;
  }

  .contact-layout::before {
    display: none;
  }

  .intro > p {
    margin-bottom: 42px;
  }

  .contact-list {
    max-width: none;
    margin-bottom: 64px;
  }

  .side {
    padding-top: 42px;
    border-top: 1px solid var(--grey);
  }
}

@media (max-width: 560px) {
  .contact-page {
    padding: 22px;
  }

  h1 {
    font-size: 74px;
  }

  .contact-item,
  .social-item {
    grid-template-columns: 48px minmax(0, 1fr) auto;
    gap: 16px;
  }

  .contact-item {
    grid-template-columns: 48px minmax(0, 1fr);
  }

  .icon,
  .social-icon {
    width: 48px;
    height: 48px;
  }

  .icon :deep(svg),
  .social-icon :deep(svg) {
    width: 23px;
    height: 23px;
  }

  .availability-card {
    padding: 32px;
  }
}
</style>
