<script setup>
import HomePage from './components/HomePage.vue';
</script>

<template>
  <header class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
      <div class="container"><a class="link-dark navbar-brand site-title mb-0" href="#">Régis Tremblay Lefrançois</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-2">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
            <!--<li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <HomePage />
</template>

<style>
@import './assets/css/font-awesome/css/all.min.css';
@import './assets/css/bootstrap-icons/bootstrap-icons.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/aos.css';
@import './assets/css/main.css';
</style>
