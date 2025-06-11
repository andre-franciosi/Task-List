export default {
  template: `
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
    `,
  emits: ["update:currentTag"],
  computed: {
    allTags() {
      return ["all", ...new Set(this.tags)];
    },
  },
  props: {
    tags: {
      type: Array,
    },
    currentTag: {
      type: String,
    },
  },
};
