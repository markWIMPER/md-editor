<script setup lang="ts">
import { computed, ref } from "vue";
import { renderMarkdown } from "@md-editor/core";

const text = ref("");

const html = computed(() => renderMarkdown(text.value));
</script>

<template>
  <div v-html="html"></div>

  <textarea
    name="textarea"
    id="editor"
    cols="30"
    rows="10"
    v-model="text"
  ></textarea>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
