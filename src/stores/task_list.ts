import { defineStore } from 'pinia'


export type TaskDefinition = { id: number, label: string, checked: boolean }

export const usetaskListStore = defineStore({
  id: 'taskList',
  state: () => ({
    tasks: [
      { id: 1, checked: true, label: 'Do a very important task' },
      { id: 2, checked: true, label: 'Another important task' },
      { id: 3, checked: true, label: 'Not so important task' }
    ] as TaskDefinition[]
  }),
  actions: {
    addTask(label: string) {
      this.$patch(state => {
        state.tasks.push({
          id: state.tasks.length,
          label,
          checked: false
        })
      })
    }
  }
})
