<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <router-link to="/Left">youbian</router-link>
  <router-link to="/List">list</router-link>
  <router-link to="/Rigit">Rigit</router-link>
  <RouterView></RouterView>
</template>

<script>
 export default{
  data() {
    return {
    }
  },
 }
</script>



<style scoped>

</style>
