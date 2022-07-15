<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HiComponent from './components/HiComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
</script>

<template>
  <NavbarComponent />
  <div class="page-content">
    <div id="content">
      <HiComponent />
      <AboutComponent />
      <ServicesComponent />
      <SkillsComponent />
      <PortfolioComponent />
      <ExperienceComponent />
    </div>
  </div>
  <FooterComponent />

</template>

<style>
</style>
