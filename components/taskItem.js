export default {
  props: {
    task: {
      task: Object,
    },
  },
  template: `
    <div class="task">
      <label>
        <input type="checkbox" v-model="task.completed" />
        <span class="taskName">{{ task.name }}</span> 
      </label>
      <i class="fa-solid fa-trash trashIcon" @click=deleteTask></i>
    </div>
  `,
  methods: {
    deleteTask() {
      this.$emit("delete-task", this.task.id);
    },
  },
};
