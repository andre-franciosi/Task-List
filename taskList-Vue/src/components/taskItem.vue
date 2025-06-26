<script setup>
const task = defineModel('task')
</script>

<template>
  <div class="task">
    <label>
      <input type="checkbox" v-model="task.completed" />
      <span class="taskName">{{ task.name }}</span>
    </label>
  </div>
</template>
