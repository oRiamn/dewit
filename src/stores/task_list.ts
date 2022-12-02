import { defineStore } from 'pinia'

export const usetaskListStore = defineStore({
  id: 'taskList',
  state: () => ({
    tasks: [
      { id: 1, label: 'Do a very important task' },
      { id: 2, label: 'Another important task' },
      { id: 3, label: 'Not so important task' }
    ] as { id: number, label: string }[]
  }),
  actions: {
    addTask(label: string) {
      this.$patch(state => {
        state.tasks.push({
          id: state.tasks.length,
          label
        })
      })
    }
  }
})
