<script lang="ts">
import { defineComponent } from 'vue'
import Task from '@/components/task/task.vue'
import Button from '@/components/button/button.vue'
import { usetaskListStore } from '@/stores/task_list'

export default defineComponent({
  name: 'TaskList',
  components: {
    Task,
    Button
  },
  emits: [],
  setup() {
    const tstore = usetaskListStore()
    return {
      tstore,
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tstore.addTask(this.newTask)
        this.newTask = ''
      }
    }
  }
})
</script>

<template>
  <svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0">
    <defs>
      <linearGradient
        id="boxGradient"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="25"
        y2="25"
      >
        <stop offset="0%" stop-color="var(--color-gradient-to)" />
        <stop offset="100%" stop-color="#0FC0F5" />
      </linearGradient>

      <linearGradient id="lineGradient">
        <stop offset="0%" stop-color="#0FC0F5" />
        <stop offset="100%" stop-color="var(--color-gradient-to)" />
      </linearGradient>

      <path
        id="task__line"
        stroke="url(#lineGradient)"
        d="M21 12.3h168v0.1z"
      ></path>
      <path
        id="task__box"
        stroke="url(#boxGradient)"
        d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
      ></path>
      <path
        id="task__check"
        stroke="url(#boxGradient)"
        d="M10 13l2 2 5-5"
      ></path>
      <circle id="task__circle" cx="13.5" cy="12.5" r="10"></circle>
    </defs>
  </svg>
  <div class="task-list">
    <div class="tasks">
      <Task v-for="item in tstore.tasks" :key="item.id" :label="item.label" />
    </div>
    <div class="add">
      <input
        type="text"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="A new task"
      />
      <Button :text="'+'" v-on:click="addTask" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  .tasks,
  .add {
    display: flex;
    width: 100%;
  }

  background: var(--color-background);

  .tasks {
    font-size: 20px;
    margin: auto;
    flex-direction: columns;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }
  .add {
    flex: 0;
    padding: 0 1em;
    margin: 1em 0;
    input {
      display: flex;
      flex: 1;
      padding: 1em;
      margin: 0 1em 0 0;
      color: var(--color-text);
      border-style: solid;
      border-image-slice: 1;
      border-width: 4px;
      border-image-source: linear-gradient(
        to left,
        var(--color-gradient-from),
        var(--color-gradient-to)
      );
      background: var(--color-background);
      -webkit-appearance: none;
      outline: none;
    }
  }
}
</style>
