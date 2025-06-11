<template>
  <section>
    <task-list :tasks="filters.inProgress" title="In Progress" @delete-task="deleteTask" />
    <task-list :tasks="filters.completed" title="Completed" @delete-task="deleteTask" />
    <div class="button-div" @click="addTask">
      <button class="button-add">Add new Task</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import taskList from './taskList.vue'

const tasks = ref([])

const filters = computed(() => ({
  inProgress: tasks.value.filter((task) => !task.completed),
  completed: tasks.value.filter((task) => task.completed),
}))

function addTask() {
  const newTaskName = window.prompt("What's your next task?")
  if (newTaskName) {
    tasks.value.push({
      name: newTaskName,
      completed: false,
      id: tasks.value.length + 1,
    })
  }
}

function deleteTask(id) {
  const index = tasks.value.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

onMounted(() => {
  axios.get('http://localhost:3001/tasks').then((response) => {
    tasks.value = response.data
  })
})
</script>
