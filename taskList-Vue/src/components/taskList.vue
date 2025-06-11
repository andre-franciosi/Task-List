<template>
  <section v-show="tasks.length">
    <h2>{{ title }}</h2>
    <task-tag :tags="tags" :current-tag="currentTag" @update:currentTag="currentTag = $event" />
    <ul>
      <task-item
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @update-task="updateTask"
      />
    </ul>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import taskItem from './taskItem.vue'
import taskTag from './taskTag.vue'

const props = defineProps({
  tasks: Array,
  title: String,
})

function updateTask(updatedTask) {
  const index = tasks.value.findIndex((t) => t.id === updatedTask.id)
  if (index !== -1) {
    tasks.value[index] = updatedTask
  }
}

defineEmits(['delete-task'])

const currentTag = ref('all')

const tags = computed(() => {
  return props.tasks.map((task) => task.tag)
})

const filteredTasks = computed(() => {
  if (currentTag.value === 'all') {
    return props.tasks
  }
  return props.tasks.filter((task) => task.tag === currentTag.value)
})
</script>
