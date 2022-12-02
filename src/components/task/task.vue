<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Task',
  components: {},
  props: {
    label: { type: String, default: 'A task' }
  },
  emits: [],
  setup() {
    return {}
  }
})
</script>

<template>
  <label class="task">
    <input class="task__state" type="checkbox" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 200 25"
      class="task__icon"
    >
      <use xlink:href="#task__line" class="task__line"></use>
      <use xlink:href="#task__box" class="task__box"></use>
      <use xlink:href="#task__check" class="task__check"></use>
      <use xlink:href="#task__circle" class="task__circle"></use>
    </svg>

    <div class="task__text">{{ label }}</div>
  </label>
</template>

<style lang="scss" scoped>
$duration: 0.8s;
.task {
  display: block;
  position: relative;
  padding: 1em 1em 1em 16%;
  margin: 0 auto;
  cursor: pointer;
  border-bottom: solid 1px #ddd;

  display: flex;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
}

.task__state {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.task__text {
  color: saturate(#1b4a4e, 15%);
  transition: all calc($duration/2) linear calc($duration/2);
}

.task__icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  fill: none;
  stroke: #27fdc7;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.task__line,
.task__box,
.task__check {
  transition: stroke-dashoffset $duration cubic-bezier(0.9, 0, 0.5, 1);
}
.task__circle {
  stroke: #27fdc7;
  stroke-dasharray: 1 6;
  stroke-width: 0;

  transform-origin: 13.5px 12.5px;
  transform: scale(0.4) rotate(0deg);
  animation: none $duration linear; //cubic-bezier(.08,.56,.04,.98);

  @keyframes explode {
    //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
    30% {
      stroke-width: 3;
      stroke-opacity: 1;
      transform: scale(0.8) rotate(40deg);
      //animation-timing-function: cubic-bezier(.89,.01,.95,.51);
    }
    100% {
      stroke-width: 0;
      stroke-opacity: 0;
      transform: scale(1.1) rotate(60deg);
      //animation-timing-function: cubic-bezier(.08,.56,.04,.98);
    }
  }
}
.task__box {
  stroke-dasharray: 56.1053, 56.1053;
  stroke-dashoffset: 0;
  transition-delay: $duration * 0.2;
}
.task__check {
  stroke: #27fdc7;
  stroke-dasharray: 9.8995, 9.8995;
  stroke-dashoffset: 9.8995;
  transition-duration: $duration * 0.4;
}
.task__line {
  stroke-dasharray: 168, 1684;
  stroke-dashoffset: 168;
}
.task__circle {
  animation-delay: $duration * 0.7;
  animation-duration: $duration * 0.7;
}
.task__state:checked {
  ~ .task__text {
    transition-delay: 0s;
    color: #5ebec1;
    opacity: 0.6;
  }

  ~ .task__icon .task__box {
    stroke-dashoffset: 56.1053;
    transition-delay: 0s;
  }
  ~ .task__icon .task__line {
    stroke-dashoffset: -8;
  }
  ~ .task__icon .task__check {
    stroke-dashoffset: 0;
    transition-delay: $duration * 0.6;
  }
  ~ .task__icon .task__circle {
    animation-name: explode;
  }
}
</style>