<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AnimatedLogo',
  components: {},
  emits: [],
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="animatedlogo">
    <div class="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-check-circle animate"
      >
        <path class="circle" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline class="check" points="22 4 12 14.01 9 11.01" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animatedlogo {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .svg {
    height: 100%;
    width:  100%;
  }
  svg {
    
    width: 100%;
    height: 100%;

    &.animate {
      .circle {
        stroke-dasharray: 531.2621459960938;
        stroke-dashoffset: -531.2621459960938;
        animation: circle 2.5s cubic-bezier(0.12, -0.01, 0.81, 1.42) forwards;
      }
      .check {
        stroke-dasharray: 18.391849517822266;
        stroke-dashoffset: -18.391849517822266;
        animation: check 0.4s cubic-bezier(0.55, 0.09, 0.59, 0.96) 2s forwards;
      }
    }
  }

  .repeat {
    background-color: #3d84a8;
    color: white;
    padding: 0.5em 2em;
    border-radius: 1em;
    margin-top: 2em;
    transition: 0.3s cubic-bezier(0.12, -0.01, 0.81, 1.42);

    &:hover {
      cursor: pointer;
      background-color: lighten(#3d84a8, 10%);
      transform: scale(1.1);
      transition: transform 0.3s cubic-bezier(0.36, 0.04, 0.68, 1.75),
        background-color 0.2s ease;
    }
  }
}
@keyframes circle {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes check {
  to {
    stroke-dashoffset: 0;
  }
}
</style>