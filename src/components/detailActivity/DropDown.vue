<template lang="pug">
.custom-dropdown(
  @click='openList()'
)
  .title(
    data-cy='modal-add-priority-item'
  )
    .dot(
      :class='data.class'
    )
    |  {{ data.value }}
  .chevron-down-icon
    img(
      src='@/assets/chevronDownIcon.svg'
    )
  .select-box-list.hidden#box-list
    ul
      li(
        @click='changeValue({ class: "very-high", value: "Very High" })'
      )
        .dot.very-high
        |  Very High
        span.verify(
          v-if='data.value === "Very High"'
        )
          img(
            src='@/assets/checkIcon.svg'
          )
      li(
        @click='changeValue({ class: "high", value: "High" })'
      )
        .dot.high
        |  High
        span.verify(
          v-if='data.value === "High"'
        )
          img(
            src='@/assets/checkIcon.svg'
          )
      li(
        @click='changeValue({ class: "normal", value: "Medium" })'
      )
        .dot.normal
        |  Medium
        span.verify(
          v-if='data.value === "Medium"'
        )
          img(
            src='@/assets/checkIcon.svg'
          )
      li(
        @click='changeValue({ class: "low", value: "Low" })'
      )
        .dot.low
        |  Low
        span.verify(
          v-if='data.value === "Low"'
        )
          img(
            src='@/assets/checkIcon.svg'
          )
      li(
        @click='changeValue({ class: "very-low", value: "Very Low" })'
      )
        .dot.very-low
        |  Very Low
        span.verify(
          v-if='data.value === "Very Low"'
        )
          img(
            src='@/assets/checkIcon.svg'
          )
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

// Variable
const data = reactive({
  class: 'very-high',
  value: 'Very High'
})
const emit = defineEmits(['changePriority'])
// -------

// Function
const openList = () => {
  const box = document.getElementById('box-list')

  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden')
  } else {
    box.classList.add('hidden')
  }
}

const changeValue = (val) =>{
  data.class = val.class
  data.value = val.value
  emit('changePriority', val.class)
}
// --------

// First Load Instance
emit('changePriority', data.class)
</script>

<style lang="sass" scoped>
.custom-dropdown
  margin: 10px 0
  width: 205px
  height: 52px
  background: #FFFFFF
  border: 1px solid #E5E5E5
  border-radius: 6px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: space-between
  padding: 15px
  position: relative

  .title
    display: flex
    align-items: center

    .dot
      width: 14px
      height: 14px
      margin-right: 15px
      border-radius: 50%

      &.very-high
        border: 1px solid #ED4C5C
        background: #ED4C5C

      &.high
        border: 1px solid #F8A541
        background: #F8A541

      &.normal
        border: 1px solid #00A790
        background: #00A790

      &.low
        border: 1px solid #428BC1
        background: #428BC1

      &.very-low
        border: 1px solid #8942C1
        background: #8942C1

  .chevron-down-icon
    display: flex
    align-items: center

  .select-box-list
    visibility: visible
    position: absolute
    top: 47px
    left: -1px
    z-index: 16
    background: #FFF
    height: 220px
    width: 205px
    border: 1px solid #E5E5E5
    border-radius: 0 0 6px 6px

    ul
      list-style: none
      width: 100%
      height: 100%
      overflow: auto

      li
        position: relative
        width: 100%
        height: 20%
        display: flex
        align-items: center
        padding: 15px
        border-bottom: 1px solid #E5E5E5

        &:last-child
          border: none


        &:hover
          background: #16ABF81A
          border-radius: 6px

        .verify
          position: absolute
          top: 12.5px
          right: 20px

        .dot
          width: 14px
          height: 14px
          margin-right: 15px
          border-radius: 50%

          &.very-high
            border: 1px solid #ED4C5C
            background: #ED4C5C

          &.high
            border: 1px solid #F8A541
            background: #F8A541

          &.normal
            border: 1px solid #00A790
            background: #00A790

          &.low
            border: 1px solid #428BC1
            background: #428BC1

          &.very-low
            border: 1px solid #8942C1
            background: #8942C1

    &.hidden
      visibility: hidden
</style>
