<template lang="pug">
.wrapper(
  data-cy='todo-modal-delete'
)
  .background#modal-add-todo
  .modal
    .modal__header
      h4(
        data-cy='modal-add-title'
      ) Tambah Item List
      img(
        data-cy='modal-add-close-button'
        src='@/assets/closeIcon.svg'
        @click='closeModal()'
      )
    .modal__body
      section
        label(
          data-cy='modal-add-name-title'
          for='listItem'
        ) NAMA LIST ITEM
        input(
          data-cy='modal-add-name-input'
          id='listItem'
          type='text'
          placeholder='Tambahkan nama list item'
          autocomplete='off'
          v-model='data.title'
        )
      section.custom-select
        label(
          data-cy='modal-add-priority-title'
        ) PRIORITY
        drop-down(
          data-cy='modal-add-priority-dropdown'
          @changePriority='changePriority'
        )
    .modal__footer
      button(
        data-cy='modal-add-save-button'
        :disabled='data.priority === "" || data.title === "" ? true : false'
        @click='createTodo()'
      ) Simpan
</template>

<script setup>
import DropDown from './DropDown.vue'
import { reactive, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// Variable
const store = useStore()
const route = useRoute()
const emit = defineEmits(['refreshData'])
const id = route.params.id
const data = reactive({
  priority: '',
  title: ''
})
// --------


// Function
const changePriority = (e) => {
  data.priority = e
}

const createTodo = () => {
  store.dispatch('activity/addTodo', { activity_group_id: id, priority: data.priority, title: data.title })
    .then(() => {
      emit('refreshData')
      closeModal()
    })
    .catch(err => console.log(err))
}

const closeModal = () => {
  store.dispatch('changeStatusModalAddTodo', false)
}

window.onclick = function(event) {
  if (event.target.id == "modal-add-todo") {
    closeModal()
  }
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
    width: 830px
    height: 410px
    background-color: #FFF
    border-radius: 15px
    border: 1px solid rgba(0,0,0,.2)
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around

    &__header
      width: 100%
      height: 20%
      border-bottom: 1px solid #E5E5E5
      display: flex
      justify-content: space-between
      align-items: center
      padding: 30px

      h4
        font-size: 18px
        font-weight: 600
        line-height: 27px

      img
        width: 12px
        height: 12px
        cursor: pointer

    &__body
      width: 100%
      height: 60%
      display: flex
      flex-direction: column
      justify-content: center
      padding: 30px

      section
        display: flex
        flex-direction: column

        label
          font-size: 12px
          font-weight: 600
          line-height: 18px

        input
          margin: 10px 0 20px 0
          width: 100%
          height: 52px
          border: 1px solid #E5E5E5
          border-radius: 6px
          padding: 0 20px
          font-size: 16px
          line-height: 24px
          font-weight: 400

        input:focus
          outline: none
          border: 1px solid #16ABF8


    &__footer
      width: 100%
      height: 20%
      border-top: 1px solid #E5E5E5
      display: flex
      justify-content: flex-end
      align-items: center
      padding: 30px

      button
        width: 150px
        height: 55px
        border: none
        background-color: #16ABF8
        color: #FFF
        border-radius: 45px
        font-size: 18px
        line-height: 27px
        font-weight: 600
        cursor: pointer

        &:disabled,
        &[disabled]
          cursor: not-allowed
          background: #16ABF84A
</style>
