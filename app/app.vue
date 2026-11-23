<template>
  <div class="pageContainer" :class="{ darkmode: darkMode, init: !ready }">
    <button
        type="button"
        class="mode-toggle"
        :class="{ darkmode: darkMode }"
        :aria-pressed="darkMode"
        aria-label="Toggle dark mode"
        @click="toggleDarkMode"
    >
      <span class="toggle" :class="{ 'is-right': darkMode }"></span>
    </button>

    <div class="boxGrid">
      <div class="box">
        <h1 class="sr-only">JAKE FAUVEL</h1>
        <div ref="scrambleContainer" class="scrambleContainer" aria-hidden="true">
          <div class="firstName">
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
          </div>

          <div class="lastName">
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
            <span class="ltr nbr">0</span>
          </div>
        </div>
      </div>
      <div class="box column">
        <h2>I am</h2>
        <div>A web developer &amp; e-commerce specialist based in 📍 Düsseldorf, Germany.</div>
        <span class="withMarginTop">Currently working for <a target="_blank" href="https://www.bricoflor.com" rel="noopener noreferrer" class="companyBadge brico">BRICOFLOR GmbH</a>. Previous companies: <a target="_blank" href="https://www.behringer.com/en" rel="noopener noreferrer" class="companyBadge mt">Music Tribe</a> and <a target="_blank" href="https://www.tillo.com/" rel="noopener noreferrer" class="companyBadge tillo">Tillo</a>.</span>
        <a class="withMarginTop" target="_blank" rel="noopener noreferrer" href="/JakeFauvel_CV_EN_26.pdf">Public CV (PDF) 👈🏻</a>
      </div>
      <div class="box column">
        <h2>Find me</h2>
        <span>On <a target="_blank" style="background: #31BF3F; color: #FFF;" rel="noopener noreferrer" href="https://github.com/JakeFauvel">GitHub</a> + <a target="_blank" style="background: #0966C2; color: #FFF;" rel="noopener noreferrer" href="https://www.linkedin.com/in/jake-fauvel/">LinkedIn</a>. I have a few side projects planned for the next couple of months.</span>
        <span class="withMarginTop">📸 I shoot film - check out my <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jake.shootsfilm/">Instagram</a> (still early days).</span>
        <span class="withMarginTop">You can contact me <a href="mailto:hello@jakefauvel.com">via email</a>.</span>
      </div>
      <div class="box column">
        <h2>My experience</h2>
        Software engineer with 9+ years of full-stack and e-commerce experience, specializing in frontend architecture, API integrations, infrastructure, and performance optimization across Magento, VueStorefront, Laravel, and hybrid mobile apps.
      </div>
      <div class="box column">
        <h2>I like</h2>
        💻 Into tech, programming, tough problems, and picking up new skills. Also a gamer, film shooter, and football fan—plus a proud Düsseldorfer EG season ticket holder. 🏒
      </div>
      <div class="box column">
        <h2>Currently I am</h2>
        Open to remote roles or positions within commuting distance of Düsseldorf, as well as small freelance projects. 🤓
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    useSeoMeta({
      title: 'Jake Fauvel — Web Developer & E-Commerce Specialist',
      description: 'Software engineer in Düsseldorf with 9+ years of full-stack and e-commerce experience across Magento, VueStorefront, and Laravel.',
      ogTitle: 'Jake Fauvel — Web Developer & E-Commerce Specialist',
      ogDescription: 'Full-stack and e-commerce engineer based in Düsseldorf, Germany.',
      twitterTitle: 'Jake Fauvel — Web Developer & E-Commerce Specialist',
      twitterDescription: 'Full-stack and e-commerce engineer based in Düsseldorf, Germany.',
      ogType: 'website',
      ogUrl: 'https://www.jakefauvel.com/',
      ogImage: 'https://www.jakefauvel.com/JF_Share.jpeg',
      twitterImage: 'https://www.jakefauvel.com/JF_Share.jpeg',
      twitterCard: 'summary_large_image'
    });
    useHead({
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'canonical', href: 'https://www.jakefauvel.com/' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jake Fauvel',
            jobTitle: 'Web Developer & E-Commerce Specialist',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Düsseldorf',
              addressCountry: 'DE'
            },
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'University of Brighton',
                url: 'https://www.brighton.ac.uk'
              },
              { '@type': 'Organization', name: 'BRICOFLOR GmbH' },
              { '@type': 'Organization', name: 'Music Tribe' },
              { '@type': 'Organization', name: 'Tillo' }
            ],
            url: 'https://www.jakefauvel.com',
            sameAs: [
              'https://www.github.com/JakeFauvel',
              'https://www.linkedin.com/in/jake-fauvel/',
              'https://www.instagram.com/jake.shootsfilm/'
            ]
          })
        }
      ]
    });
  },
  data() {
    return {
      darkMode: true,
      ready: false,
      timer: 100,
      repeatDelay: 5000,
      letters: ["J", "A", "K", "E", "F", "A", "U", "V", "E", "L"],
      intervalId: null,
      repeatIntervalId: null,
      isAnimating: false,
      allLetters: []
    };
  },
  watch: {
    darkMode: {
      immediate: true,
      handler(isDark) {
        if (typeof document !== "undefined") {
          document.body.classList.toggle("darkmode", isDark);
        }
        this.$emit(isDark ? "dark" : "light");
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.ready = true;
    });

    // Reduced motion, skip repeating the animation. Accessibility wise this is nicer for users that want less motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.allLetters.forEach((el, idx) => {
        el.classList.remove('nbr');
        el.textContent = this.letters[idx] || '';
      });
      return;
    } else {
      const container = this.$refs.scrambleContainer;
      if (!container) return;

      this.allLetters = Array.from(container.querySelectorAll(".ltr"));
      this.startAnimation();

      this.repeatIntervalId = setInterval(() => {
        this.startAnimation();
      }, this.repeatDelay);
    }

    console.log("%cHi, thanks for checking out my site! :)", "background: red; color: yellow; font-size: x-large");
  },
  beforeUnmount() {
    this.cleanupTimers();
    this.isAnimating = false;
  },
  methods: {
    cleanupTimers() {
      if (this.repeatIntervalId !== null) {
        clearInterval(this.repeatIntervalId);
        this.repeatIntervalId = null;
      }
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    randomDigit() {
      return Math.floor(Math.random() * 10);
    },
    resetState() {
      this.allLetters.forEach((el, idx) => {
        el.classList.add("nbr");
        el.dataset.ticks = "0";
        el.dataset.settleAfter = String(8 + Math.floor(Math.random() * 18));
        el.textContent = `${this.randomDigit()}`;
        if (this.letters[idx] === undefined) {
          el.dataset.settleAfter = "8";
        }
      });
    },
    step() {
      const container = this.$refs.scrambleContainer;
      if (!container) return;

      const activeNbr = Array.from(container.querySelectorAll(".nbr"));

      if (activeNbr.length === 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isAnimating = false;
        return;
      }

      activeNbr.forEach((el) => {
        const ticks = parseInt(el.dataset.ticks || "0", 10) + 1;
        const settleAfter = parseInt(el.dataset.settleAfter || "10", 10);
        el.dataset.ticks = String(ticks);

        if (ticks >= settleAfter) {
          const index = this.allLetters.indexOf(el);
          if (index !== -1 && index < this.letters.length) {
            el.textContent = this.letters[index] === " " ? "\u00A0" : this.letters[index];
          }
          el.classList.remove("nbr");
        } else {
          el.textContent = `${this.randomDigit()}`;
        }
      });
    },
    startAnimation() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.resetState();
      this.intervalId = setInterval(this.step, this.timer);
    }
  }
};
</script>
<style lang="scss">
@use "sass:color";

$dark: #171717;
$mode-toggle-dark: #262626;
$mode-toggle-light: #FFF;

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  background-color: #FFF;
  margin: 0;

  a {
    color: #000;
  }

  &.darkmode {
    background-color: color.adjust($dark, $lightness: 5%);

    a {
      color: #FFF;
    }
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.companyBadge {
  color: #FFF;
  padding: 0 4px;
  text-decoration: none;

  &.brico { background: #931F4C; }
  &.mt { background: #F70219; }
  &.tillo { background: #7063F3; }
}

.pageContainer {
  transition: background-color 0.2s ease, color 0.2s ease;
  background-color: #FFF;
  min-height: 100vh;
  width: 100%;

  .boxGrid .box {
    border: 3px solid $dark;
  }

  &.darkmode {
    color: #FFF;
    background-color: color.adjust($dark, $lightness: 5%);

    .boxGrid .box {
      border: 3px solid #FFF;
    }
  }

  &.init,
  &.init * {
    transition: none !important;
  }
}

.boxGrid {
  display: grid;
  grid-template-columns: calc(85vw - 12px);
  justify-content: center;
  column-gap: 12px;
  row-gap: 12px;
  padding-top: 65px;
  padding-bottom: 64px;

  @media (min-width: 1024px) {
    grid-template-columns: calc(100vw / 2.5) calc(100vw / 2.5);
    padding-top: 0;
    padding-bottom: 0;
    align-content: center;
    min-height: 100vh;
  }

  @media (min-width: 1280px) {
    grid-template-columns: calc(100vw / 4) calc(100vw / 4) calc(100vw / 4);
  }

  @media (min-width: 1440px) {
    grid-template-columns: calc(100vw / 4.5) calc(100vw / 4.5) calc(100vw / 4.5);
  }

  @media (min-width: 1920px) {
    grid-template-columns: calc(100vw / 6.5) calc(100vw / 6.5) calc(100vw / 6.5);
  }

  @media (min-width: 1024px) and (max-height: 820px) {
    align-content: start;
    padding-top: 64px;
    padding-bottom: 48px;
  }

  .box:first-of-type {
    @media only screen and (min-width: 1200px) {
      &:hover {
        background-image: url('/Jake.jpg');
        background-position: center;
        background-size: cover;
        .scrambleContainer {
          opacity: 0;
        }
      }
    }
  }

  .box {
    width: 100%;
    display: flex;
    padding: 25px;
    line-height: 1.5;

    h2 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .withMarginTop {
      margin-top: 15px;
    }

    &.column {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

.scrambleContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 100%;
  font-weight: bold;

  .ltr {
    display: inline-block;
    padding-left: 6px;
    padding-right: 6px;
  }
}

.mode-toggle {
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 2px;
  width: 44px;
  height: 24px;
  background-color: $mode-toggle-dark;
  border: 0;
  border-radius: 24px;
  cursor: pointer;
  z-index: 10;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.3s ease;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  &.darkmode {
    background-color: $mode-toggle-light;
  }

  @media (min-width: 1024px) {
    right: 25px;
    top: 25px;
  }

  .toggle {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #a5abba;
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.3s ease;

    &.is-right {
      transform: translateX(20px);
      background-color: $dark;
    }
  }
}
</style>
