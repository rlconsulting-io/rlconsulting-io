<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HiComponent from './components/HiComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
import axios from 'axios';
</script>

<template>
  <NavbarComponent />
  <div class="page-content">
    <div id="content">
      <HiComponent :data=data />
      <AboutComponent :data=data />
      <ServicesComponent />
      <SkillsComponent :data=data />
      <PortfolioComponent />
      <ExperienceComponent />
    </div>
  </div>
  <FooterComponent :data=data />

</template>

<style>
</style>
<script>
export default {
  data() {
    return {
      data: ""
    }
  },
  mounted() {
    axios
      .get('https://gist.githubusercontent.com/rlconsul/6505c56378da4a802fa79862c4f22ec1/raw/rlconsulting-io.json')
      .then(response => {
        this.data = response.data
        console.log(this.data)
      })
  }
}
</script>
