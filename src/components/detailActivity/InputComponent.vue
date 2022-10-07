<template lang="pug">
input(
  id='editActivityName'
  type='text'
  autocomplete='off'
  data-cy='todo-title'
  v-model='detailActivity.title'
)
</template>

<script setup>
import { computed, defineEmits } from 'vue'
import { useStore } from 'vuex'

// Variable
const store = useStore()
const emit = defineEmits(['changeEditable', 'changeActivityName'])
const detailActivity = computed(() => store.getters['activity/getDetailActivity'])
// --------

// First load instance
setTimeout(() => {
  window.onclick = function(event) {
    if (event.target.id != 'editActivityName') {
      emit('changeEditable')
    }
  }
}, [100])
// ------------


setTimeout(() => {
  document.querySelector('input').focus()
}, [100])

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
