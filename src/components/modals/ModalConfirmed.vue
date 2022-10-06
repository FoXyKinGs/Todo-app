<template lang="pug">
.wrapper(
  data-cy='todo-modal-delete'
)
  .background#modal-confirmed
  .modal
    .modal__body
      img(
        src='@/assets/informationIcon.svg'
        data-cy='modal-information-icon'
      )
      p(
        data-cy='modal-information-title'
      ) Activity berhasil dihapus
</template>

<script setup>
import { useStore } from 'vuex'
import { defineEmits } from 'vue'

// Variable
const store = useStore()
// --------

// Function
window.onclick = function(event) {
  if (event.target.id == 'modal-confirmed') {
    store.dispatch('changeStatusModalConfirmed', false)
  }
}
// ----------
</script>

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
    height: 60px
    background-color: #FFF
    border-radius: 15px
    border: 1px solid rgba(0,0,0,.2)
    padding: 20px

    &__body
      display: flex
      align-items: center
      gap: 20px

      p
        font-size: 14px
        line-height: 21px
        font-weight: 500
</style>
