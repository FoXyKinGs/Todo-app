<template lang="pug">
button
  .lds
    .child
    .child
    .child
</template>

<style lang="sass" scoped>
button
  width: 160px
  height: 55px
  border: none
  border-radius: 45px
  background-color: #16ABF8
  position: relative
  display: flex
  justify-content: center


  .lds
    display: inline-block
    position: relative
    width: 80px
    height: 100%

    .child
      display: inline-block
      position: absolute
      left: 8px
      width: 16px
      background: #fff
      animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite

      &:nth-child(1)
        left: 8px
        animation-delay: -0.24s

      &:nth-child(2)
        left: 32px
        animation-delay: -0.12s

      &:nth-child(3)
        left: 56px
        animation-delay: 0

  @keyframes lds-facebook
    0%
      top: 8px
      height: 60%

    50%, 100%
      top: 24px
      height: 20%
</style>
