<template lang="pug">
img(
  src='@/assets/addTodoIllustrator.svg'
  @click='addTodo()'
)
</template>

<script setup>
import { defineEmits } from 'vue'

// Variable
const emit = defineEmits(['addTodo'])
// -------


// Function
const addTodo = () => {
  emit('addTodo')
}
//
</script>
