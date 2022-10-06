<template lang="pug">
.wrapper(
  data-cy='todo-modal-delete'
)
  .background#modal-delete-todo
  .modal
    .modal__header
      img(
        src='@/assets/dangerIcon.svg'
        data-cy='modal-delete-icon'
      )
      h4(
        data-cy='modal-delete-title'
      )
    .modal__body
      p
        | Apakah anda yakin menghapus List Item
        strong  "{{ props.data.title }}"
        |  ?
    .modal__footer
      button.cancel(
        data-cy='modal-delete-cancel-button'
        @click='closeModal()'
      ) Batal
      button.confirm(
        data-cy='modal-delete-confirm-button'
        @click='confirmDelete()'
      ) Hapus
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { useStore } from 'vuex'

// Variable
const store = useStore()
const emit = defineEmits(['confirmDelete'])
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
})
// --------


// Function
const closeModal = () => {
  store.dispatch('changeStatusModalDeleteTodo', false)
}

window.onclick = function(event) {
  if (event.target.id == "modal-delete-todo") {
    closeModal()
  }
}

const confirmDelete = () => {
  store.dispatch('activity/deleteTodo', props.data.id)
    .then(() => {
      closeModal()
      emit('confirmDelete')
    })
    .catch(err => console.log(err))
}
// ----------
</script>

<style lang="sass" scoped>
</style>

<style lang="sass" scoped>
.wrapper
  z-index: 11
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100%
  display: flex
  justify-content: center
  align-items: center


  .background
    background: rgba(0,0,0, 0.4)
    width: 100vw
    height: 100%
    z-index: 12
    overflow: hidden
    position: absolute
    top: 0
    left: 0


  .modal
    z-index: 13
    position: relative
    width: 490px
    height: 355px
    background-color: #FFF
    border-radius: 15px
    border: 1px solid rgba(0,0,0,.2)
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    padding: 25px 40px

    &__body


      p
        text-align: center
        font-size: 18px
        line-height: 27px
        font-weight: 500


    &__footer
      display: flex
      gap: 15px


      button
        width: 150px
        height: 55px
        border: none
        border-radius: 45px
        font-size: 18px
        line-height: 27px
        font-weight: 600
        cursor: pointer

        &.confirm
          background: #ED4C5C
          color: #FFF


        &.cancel
          background: #F4F4F4
          color: #4A4A4A
</style>
