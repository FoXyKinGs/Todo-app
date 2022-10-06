<template lang="pug">
the-header
router-view
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap')

*
  font-family: 'Poppins', sans-serif
  padding: 0
  margin: 0
  box-sizing: border-box

body
  background-color: #F4F4F4

.container
  padding: 15px 220px


</style>
