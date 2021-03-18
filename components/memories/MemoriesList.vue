<template>
  <ion-list>
    <memory-list-item
      v-for="eachMemory in allMemories"
      :key="eachMemory.id"
      :singleMemory="eachMemory"
    >
    </memory-list-item>
  </ion-list>
</template>

<script>
import MemoryListItem from './MemoryListItem.vue'
export default {
  props: ['allMemories'],
  components: {
    MemoryListItem,
  },
}
</script>

<style scoped>
@import '@/assets/styles/core.css';
</style>
