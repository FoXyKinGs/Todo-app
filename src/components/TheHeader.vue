<template lang="pug">
.container(
  data-cy='header-background'
)
  .section
    h2(
      data-cy="header-title"
    ) TO DO LIST APP
</template>

<style lang="sass" scoped>
.container
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)
  z-index: 10
  position: fixed
  top: 0
  background-color: #16ABF8
  width: 100%
  height: 105px
  color: #FFF
  display: flex
  justify-content: center


  .section
    width: 100%
    height: 100%
    max-width: 1000px
    display: flex
    align-items: center

</style>
