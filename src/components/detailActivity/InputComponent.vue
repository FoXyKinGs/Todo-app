<template lang="pug">
input(
  id='editActivityName'
  type='text'
  autocomplete='off'
  v-model='activityName'
  @keyup='changeValue()'
)
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'

// Variable
const emit = defineEmits(['changeEditable', 'changeActivityName'])
const props = defineProps({
  value: {
    type: String,
    default: () => null
  }
})
const activityName = ref(props.value)
// --------

const changeValue = () => {
  emit('changeActivityName', activityName.value)
}

// First load instance
setTimeout(() => {
  window.onclick = function(event) {
    if (event.target.id != 'editActivityName') {
      emit('changeEditable', false)
    }
  }
}, [200])
// ------------

</script>

<style lang="sass" scoped>
input
  width: 450px
  height: 45px
  font-size: 36px
  font-weight: 700
  border: none
  background: transparent
  border-bottom: 1px solid black
  padding: 10px 5px 10px 0

input:focus
  outline: none
</style>
