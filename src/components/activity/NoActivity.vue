<template lang="pug">
img(
  src='@/assets/addActivityIllustrator.svg'
  @click='addActivity()'
)
</template>

<script setup>
import { defineEmits } from 'vue'

// Variable
const emit = defineEmits(['addData'])
// --------

// Function
const addActivity = () => {
  emit('addData')
}
// --------

</script>
