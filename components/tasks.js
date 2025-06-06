import taskList from "./taskList.js";

export default {
  components: { taskList },
  template: `
      <section>
        <taskList :tasks="filters.inProgress" title="In Progress" @delete-task="deleteTask"></taskList>
        <taskList :tasks="filters.completed" title="Completed" @delete-task="deleteTask"></taskList>
        <div class="button-div" @click="addTask">
          <button class="button-add">Add new Task</button>
        </div>
      </section>
    `,
  data() {
    return {
      tasks: [
        {
          name: "Completed task",
          completed: true,
          id: 1,
        },
        {
          name: "In Progress task",
          completed: false,
          id: 2,
        },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.tasks.filter((task) => !task.completed),
        completed: this.tasks.filter((task) => task.completed),
      };
    },
  },
  methods: {
    addTask() {
      let newTaskName = window.prompt("What's your next task?");
      if (newTaskName) {
        this.tasks.push({
          name: newTaskName,
          completed: false,
          id: this.tasks.length + 1,
        });
      }
    },
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
