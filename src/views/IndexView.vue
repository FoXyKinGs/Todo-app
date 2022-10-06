<template lang="pug">
.container
  .section
    .section__head
      h1(
        data-cy='activity-title'
      ) Activity
      skeleton-button-component(
        v-if='isLoading'
      )
      button(
        v-else
        data-cy="activity-add-button"
        @click="addActivity()"
      )
        img(
          src='@/assets/plusIcon.svg'
        )
        |  Tambah
    .section__loading(
      v-if='isLoading'
    )
      the-spinner(
        :color='"#16ABF8"'
      )
    .section__content(
      v-else
    )
      .activity(
        v-if='listActivity.length > 0'
      )
        activity-card(
          v-for='activity in listActivity'
          :key='activity.id'
          :data='activity'
          @setData='setData'
        )
      .empty-item(
        v-else
        data-cy='activity-empty-state'
      )
        no-activity(
          @addData='addActivity()'
        )

  //- Modal
  modal-delete(
    v-if='isModalDeleteOPen'
    :selectedData='selectedData'
    @openModal='openModalConfirmed'
  )

  modal-confirmed(
    v-if='isModalConfirmedOPen'
  )
</template>

<script setup>
import NoActivity from '@/components/activity/NoActivity.vue'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import TheSpinner from '@/components/TheSpinner.vue'
import SkeletonButtonComponent from '@/components/SkeletonButtonComponent.vue'
import ModalDelete from '@/components/modals/ModalDelete.vue'
import ModalConfirmed from '@/components/modals/ModalConfirmed.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

// Variable
const store = useStore()
const isLoading = ref(true)
const selectedData = ref({})
const listActivity = computed(() => store.getters['activity/getListActivity'])
const isModalDeleteOPen = computed(() => store.getters.getIsModalDeleteOpen)
const isModalConfirmedOPen = computed(() => store.getters.getIsModalConfirmedOpen)
// --------


// Function
const getListActivity = () => {
  store.dispatch('activity/getListActivity')
    .then(() => {
      isLoading.value = false
    })
    .catch(err => console.log(err))
}

const addActivity = () => {
  isLoading.value = true
  store.dispatch('activity/addActivity')
    .then(() => {
      getListActivity()
    })
    .catch(err => console.log(err))
}

const openModalConfirmed = () => {
  isLoading.value = true
  store.dispatch('changeStatusModalDelete', false)
  store.dispatch('activity/getListActivity')
    .then(() => {
      store.dispatch('changeStatusModalConfirmed', true)
      isLoading.value = false
    })
    .catch(err => console.log(err))
}

const setData = (val) => {
  selectedData.value = val
}
// --------

// First load instance
getListActivity()
// --------

</script>

<style lang="sass" scoped>
.container
  margin-top: 135px
  display: flex
  justify-content: center
  height: 100%

  .section
    overflow: hidden
    width: 100%
    height: 100%
    max-width: 1000px

    &__head
      display: flex
      justify-content: space-between
      align-items: center

      h1
        font-size: 36px
        font-weight: 700

      button
        width: 160px
        height: 55px
        border: none
        border-radius: 45px
        background-color: #16ABF8
        color: #FFF
        display: flex
        justify-content: center
        align-items: center
        font-size: 18px
        font-weight: 600
        gap: 12px
        cursor: pointer


    &__content
      padding: 30px 0


      .activity
        display: flex
        flex-wrap: wrap
        gap: 2.5%


      .empty-item
        display: flex
        justify-content: center


    &__loading
      width: 100%
      height: calc( 100vh -  280px)
      display: flex
      justify-content: center
      align-items: center
</style>
