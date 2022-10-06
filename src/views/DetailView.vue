<template lang="pug">
.container
  .section
    .section__head
      .left-side
        router-link.arrow-left(
          to='/'
          data-cy='todo-back-button'
        )
          img(
            src='@/assets/arrowLeft.svg'
          )
        input-component(
          v-if='isEditable'
          :value='nameActivity'
          @changeEditable='changeEditable'
          @changeActivityName='changeNameActivity'
        )
        h1(
          v-else
          data-cy='todo-title'
        ) {{ nameActivity }}
        span.pencil(
          data-cy='todo-title-edit-button'
          @click='changeEditable()'
        )
          img(
            src='@/assets/pencilIcon.svg'
          )
      .right-side
        skeleton-button-component(
          v-if='isLoading'
        )
        .data-loaded(
          v-else
        )
          .sort
            button(
              data-cy='todo-sort-button'
              @click='showSortBox()'
            )
              img(
                src='@/assets/upSideDownIcon.svg'
              )
            .sort__box.hidden#box
              sort-box
          button.add(
            data-cy="todo-add-button"
            @click="addActivity()"
          )
            img(
              src='@/assets/plusIcon.svg'
            )
            |  Tambah

    .section__loading(
      v-if='isLoading'
    )
      the-spinner
    .section__content(
      v-else
    )
      .todo(
        v-if='detailActivity.todo_items.length > 0'
      )
        todo-card
      .no-todo(
        v-else
        data-cy='todo-empty-state'
      )
        no-todo

</template>

<script setup>
import SkeletonButtonComponent from '@/components/SkeletonButtonComponent.vue'
import TheSpinner from '@/components/TheSpinner.vue'
import NoTodo from '@/components/detailActivity/NoTodo.vue'
import TodoCard from '@/components/detailActivity/TodoCard.vue'
import SortBox from '@/components/detailActivity/SortBox.vue'
import InputComponent from '@/components/detailActivity/InputComponent.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// Variable
const isLoading = ref(true)
const route = useRoute()
const store = useStore()
const isEditable = ref(false)
const id = route.params.id
const nameActivity = ref('')
const detailActivity = computed(() => store.getters['activity/getDetailActivity'])
// --------

// Function
const getDetailActivity = () => {
  store.dispatch('activity/getDetailActivity', id)
    .then((res) => {
      nameActivity.value = res.data.title
      isLoading.value = false
    })
    .catch(err => console.log(err))
}

const changeNameActivity = (val) => {
  nameActivity.value = val
}

const showSortBox = () => {
  const box = document.getElementById('box')

  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden')
  } else {
    box.classList.add('hidden')
  }
}

const changeEditable = (val) => {
  if (val === false) {
    isEditable.value = val
  } else if (isEditable.value) {
    // disini ges
    isEditable.value = !isEditable.value
    isLoading.value = true
    store.dispatch('activity/changeNameActivity', { id, title: nameActivity.value })
      .then(() => {
        getDetailActivity()
      })
      .catch(err => console.log(err))
  } else {
    isEditable.value = !isEditable.value
    setTimeout(() => {
      document.querySelector('input').focus()
    }, [100])
  }
}
// --------

// First load instance
getDetailActivity()
// --------

</script>

<style lang="sass" scoped>
.container
  margin-top: 135px
  display: flex
  justify-content: center
  height: 100%

  .section
    width: 100%
    height: 100%
    max-width: 1000px


    &__head
      display: flex
      justify-content: space-between
      align-items: center

      .left-side
        display: flex
        align-items: center

        .arrow-left
          display: flex
          align-items: center
          margin-right: 35px

        h1
          font-size: 36px
          line-height: 54px
          font-weight: 700

        .pencil
          margin-left: 10px
          cursor: pointer

      .right-side

        .data-loaded
          display: flex
          gap: 15px


          .sort


            button
              width: 54px
              height: 54px
              border: 1px solid #E5E5E5
              border-radius: 45px
              background: transparent
              display: flex
              justify-content: center
              align-items: center
              cursor: pointer


            &__box
              position: absolute
              margin-top: 10px
              width: 235px
              height: 260px
              background-color: #FFF
              border-radius: 6px
              box-shadow: 8px 4px 8px 0 rgb(0 0 0 / 10%)
              visibility: visible
              opacity: 1
              transition: all .3s

              &.hidden
                opacity: 0
                visibility: hidden
                transition: all .2s

          .add
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


      .todo
        display: flex
        flex-direction: column
        gap: 15px
        padding: 20px 0


      .no-todo
        display: flex
        justify-content: center

    &__loading
      width: 100%
      height: calc( 100vh -  280px)
      display: flex
      justify-content: center
      align-items: center
</style>
