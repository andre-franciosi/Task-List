import taskItem from "./taskItem.js";

export default {
  components: {
    taskItem,
  },
  template: `
        <section v-show="tasks.length">
            <h2>{{ title }}</h2>
            <ul>
                <taskItem v-for="task in tasks" :key="task.id" :task="task" @delete-task=deleteTask></taskItem>
            </ul>
        </section>
    `,
  methods: {
    deleteTask(id) {
      alert(this.tasks[id]);
      delete this.tasks[id];
    },
  },
  props: {
    tasks: Array,
    title: String,
  },
};
