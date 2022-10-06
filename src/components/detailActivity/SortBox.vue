<template lang="pug">
ul
  li(
    data-cy='sort-selection'
  )
    img(
      src='@/assets/newestIcon.svg'
    )
    | Terbaru
  li(
    data-cy='sort-selection'
  )
    img(
      src='@/assets/oldestIcon.svg'
    )
    | Terlama
  li(
    data-cy='sort-selection'
  )
    img(
      src='@/assets/sortAZIcon.svg'
    )
    | A-Z
  li(
    data-cy='sort-selection'
  )
    img(
      src='@/assets/sortZAIcon.svg'
    )
    | Z-A
  li(
    data-cy='sort-selection'
  )
    img(
      src='@/assets/unfinishedIcon.svg'
    )
    | Belum Selesai
</template>

<style lang="sass" scoped>
ul
  list-style: none
  padding: 0
  margin: 0

  li
    width: 100%
    height: calc( 260px / 5 )
    border-bottom: 1px solid #E5E5E5
    display: flex
    justify-content: flex-start
    align-items: center
    padding: 0 20px
    box-sizing: border-box
    cursor: pointer
    gap: 15px
    font-size: 16px
    font-weight: 400

  li:hover
    background-color: #E9ECEF
    border-radius: 6px

  li:last-child
    border: none

</style>
