<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Container from './components/container.vue';
import Test from './components/test/test-rel.vue'

</script>

<template>
  <Test></Test>
  <!-- <Container></Container> -->
</template>

<script>
 export default{
    data() {
        return {};
    },
    components: { Container }
}
</script>

<style scoped>

</style>
