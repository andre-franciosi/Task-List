import taskItem from "./taskItem.js";
import taskTag from "./taskTag.js";

export default {
  components: {
    taskItem,
    taskTag,
  },
  data() {
    return {
      currentTag: "all",
    };
  },
  template: `
        <section v-show="tasks.length">
            <h2>{{ title }}</h2>
            <task-tag
              :tags="tags"
              :current-tag="currentTag"
              @update:currentTag="currentTag = $event"></task-tag>
            <ul>
                <taskItem
                v-for="task in filteredTasks"
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
  computed: {
    tags() {
      return this.tasks.map((a) => a.tag);
    },
    filteredTasks() {
      if (this.currentTag === "all") {
        return this.tasks;
      }
      return this.tasks.filter((a) => a.tag === this.currentTag);
    },
  },
};
