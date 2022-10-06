<template lang="pug">
.activity-card(
  data-cy='activity-item'
)
  .activity
    .activity__title(
      @click='changeRoute(props.data.id)'
    )
      h4(
        data-cy='activity-item-title'
      ) {{ props.data.title }}
    .activity__footer
      span(
        data-cy='activity-item-date'
      ) {{ formatDate(props.data.created_at) }}
      img(
        src='@/assets/trashIcon.svg'
        data-cy='activity-item-delete-button'
        @click='deleteActivity({ id: props.data.id,  title: props.data.title})'
      )
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

// Variable
const store = useStore()
const router = useRouter()
const emit = defineEmits(['setData'])
// --------

const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
})

// Function
const formatDate = (val) => {
  const date = new Date(val)
  const day = date.toLocaleDateString('default', { day: '2-digit' })
  const month = date.toLocaleDateString('default', { month: 'long' })
  const year = date.toLocaleDateString('default', { year: 'numeric' })

  return `${day} ${month} ${year}`
}

const deleteActivity = (val) => {
  emit('setData', val)
  store.dispatch('changeStatusModalDelete', true)
}

const changeRoute = (id) => {
  router.push(`/detail/${id}`)
}
// -------

</script>

<style lang="sass" scoped>
.activity-card
  width: 23%
  margin-top: 2.5%
  height: 235px
  background-color: #FFF
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1)
  border-radius: 12px

  .activity
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 22px 27px

    &__title
      width: 100%
      height: 80%
      cursor: pointer

      h4
        width: 100%
        height: 100%
        font-size: 18px
        font-weight: 700


    &__footer
      width: 100%
      height: 20%
      display: flex
      justify-content: space-between

      span
        font-size: 14px
        font-weight: 500
        line-height: 21px
        color: #888888

      img
        width: 16px
        height: 18px
        cursor: pointer
</style>
