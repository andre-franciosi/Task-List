import taskItem from "./taskItem.js";

export default {
  components: {
    taskItem,
  },
  template: `
        <section v-show="tasks.length">
            <h2>{{ title }}</h2>
            <ul>
                <taskItem
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @delete-task="$emit('delete-task', task.id)"
              />
            </ul>
        </section>
    `,
  props: {
    tasks: Array,
    title: String,
  },
};
