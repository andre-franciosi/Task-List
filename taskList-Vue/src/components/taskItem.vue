<script setup>
const task = defineModel('task')
const emit = defineEmits(['delete-task'])

function deleteTask() {
  emit('delete-task', task.value.id)
}
</script>

<template>
  <div class="task">
    <label>
      <input type="checkbox" v-model="task.completed" />
      <span class="taskName">{{ task.name }}</span>
    </label>
    <i class="fa-solid fa-trash trashIcon" @click="deleteTask"></i>
  </div>
</template>
