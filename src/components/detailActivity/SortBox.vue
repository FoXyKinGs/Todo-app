<template lang="pug">
ul
  li(
    data-cy='sort-selection'
    @click='changeSorting("terbaru")'
  )
    div(
      :data-cy='sorting === "terbaru" ? "sort-selection-selected" : "false"'
    )
      img(
        src='@/assets/newestIcon.svg'
        data-cy="sort-selection-icon"
      )
      p(
        data-cy="sort-selection-title"
      ) Terbaru
    span(
      v-if='sorting === "terbaru"'
    )
      img(
        src='@/assets/checkIcon.svg'
        data-cy="sort-selection-icon"
      )
  li(
    data-cy='sort-selection'
    @click='changeSorting("terlama")'
  )
    div(
      :data-cy='sorting === "terlama" ? "sort-selection-selected" : "false"'
    )
      img(
        src='@/assets/oldestIcon.svg'
        data-cy="sort-selection-icon"
      )
      p(
        data-cy="sort-selection-title"
      ) Terlama
    span(
      v-if='sorting === "terlama"'
    )
      img(
        src='@/assets/checkIcon.svg'
      )
  li(
    data-cy='sort-selection'
    @click='changeSorting("az")'
  )
    div(
      :data-cy='sorting === "az" ? "sort-selection-selected" : "false"'
    )
      img(
        src='@/assets/sortAZIcon.svg'
        data-cy="sort-selection-icon"
      )
      p(
        data-cy="sort-selection-title"
      ) A-Z
    span(
      v-if='sorting === "az"'
    )
      img(
        src='@/assets/checkIcon.svg'
      )
  li(
    data-cy='sort-selection'
    @click='changeSorting("za")'
  )
    div(
      :data-cy='sorting === "za" ? "sort-selection-selected" : "false"'
    )
      img(
        src='@/assets/sortZAIcon.svg'
        data-cy="sort-selection-icon"
      )
      p(
        data-cy="sort-selection-title"
      ) Z-A
    span(
      v-if='sorting === "za"'
    )
      img(
        src='@/assets/checkIcon.svg'
      )
  li(
    data-cy='sort-selection'
    @click='changeSorting("belum selesai")'
  )
    div(
      :data-cy='sorting === "belum selesai" ? "sort-selection-selected" : "false"'
    )
      img(
        src='@/assets/unfinishedIcon.svg'
        data-cy="sort-selection-icon"
      )
      p(
        data-cy="sort-selection-title"
      ) Belum Selesai
    span(
      v-if='sorting === "belum selesai"'
    )
      img(
        src='@/assets/checkIcon.svg'
      )
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Variable
const sorting = ref('terbaru')
const emit = defineEmits(['sorting'])
// -------

// Function
const changeSorting = (val) => {
  if (val === sorting.value) {
    return emit('sorting')
  }
  sorting.value = val
  emit('sorting', val)
}
// --------
</script>

<style lang="sass" scoped>
ul
  list-style: none
  padding: 0
  margin: 0

  li
    position: relative
    width: 100%
    height: calc( 260px / 5 )
    border-bottom: 1px solid #E5E5E5
    padding: 0 20px
    box-sizing: border-box
    cursor: pointer
    font-size: 16px
    font-weight: 400

    div
      padding: 10px 0
      display: flex
      align-items: center
      gap: 15px

    &:hover
      background-color: #E9ECEF
      border-radius: 6px

    &:last-child
      border: none

    span
      position: absolute
      right: 20px
      top: 15px
</style>
