<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <a href="https://github.com/sonofflynn89/project_3_cs_260">
    Like what you see? Check out my repository!
    </a>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
 export default {
     name: 'App',
     components: { AppHeader }
 }
</script>

<style>
#app {
}

body {
background-color: #ECECEC;
}

a {
color: black;
text-align: center;
padding-left: 40%;
width: 33%
}
</style>
