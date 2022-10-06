<template lang="pug">
.todo-card(
  data-cy='todo-item'
)
  .todo
    .left-side
      input(
        type='checkbox'
        data-cy='todo-item-checkbox'
        v-model='status'
        @click='changeStatus()'
      )
      .dot(
        data-cy='todo-item-priority-indicator'
        :class='props.data.priority'
      )
      span(
        data-cy='todo-item-title'
        :class='status ? "true" : "false"'
      ) {{ props.data.title }}
      .edit-icon(
        data-cy='todo-item-edit-button'
        @click='editTodo({ id: props.data.id  })'
      )
        img(
          src='@/assets/pencilIcon.svg'
        )
    .right-side
      .trash-icon(
        data-cy='todo-item-delete-button'
      )
        img(
          src='@/assets/trashIcon.svg'
          @click='deleteTodo({ id: props.data.id, title: props.data.title })'
        )
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, defineEmits, ref, watch } from 'vue'

// Variable
const store = useStore()
const emit = defineEmits(['deleteTodo', 'editTodo'])
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  },
  sorting: {
    type: String,
    default: ''
  }
})
const status = ref(false)
// --------

// Function
const changeStatus = () => {
  if (status.value) {
    store.dispatch('activity/changeTodoStatus', { id: props.data.id, is_active: 1, title: props.data.title })
  } else {
    store.dispatch('activity/changeTodoStatus', { id: props.data.id, is_active: 0, title: props.data.title })
  }
}

const deleteTodo = (val) => {
  emit('deleteTodo', val)
  store.dispatch('changeStatusModalDeleteTodo', true)
}

const editTodo = (val) => {
  emit('editTodo', val)
  store.dispatch('changeStatusModalEditTodo', true)
}
// --------

// First Load Instance
status.value = props.data.is_active === 1 ? false : true
</script>

<style lang="sass" scoped>
.todo-card
  width: 100%
  height: 80px
  background: #FFFFFF
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1)
  border-radius: 12px

  .todo
    display: flex
    justify-content: space-between
    align-items: center
    padding: 27px

    .left-side
      display: flex
      justify-content: flex-start
      align-items: center

      input[type=checkbox]
        -ms-transform: scale(1.5)
        -moz-transform: scale(1.5)
        -webkit-transform: scale(1.5)
        -o-transform: scale(1.5)
        transform: scale(1.5)
        color: pink
        padding: 10px
        margin-right: 27px

      .dot
        width: 10px
        height: 10px
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

      span
        font-size: 18px
        font-weight: 500

        &.true
          text-decoration: line-through
          color: #888888

      .edit-icon
        margin-left: 15px
        cursor: pointer

    .right-side


      .trash-icon
        cursor: pointer
</style>
