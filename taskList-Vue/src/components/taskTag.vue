<template>
  <div class="tags">
    <button
      v-for="tag in allTags"
      :key="tag"
      :class="{ active: tag === currentTag }"
      @click="$emit('update:currentTag', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  currentTag: {
    type: String,
    default: '',
  },
})

defineEmits(['update:currentTag'])

const allTags = computed(() => {
  return ['all', ...new Set(props.tags)]
})
</script>
