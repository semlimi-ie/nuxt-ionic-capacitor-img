<template>
  <base-layout page-title="Add a memory">
  <create-memory-form @save-memory="saveMemory"></create-memory-form>

  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';
export default {
    components: {
        CreateMemoryForm
    },
    methods: {
        saveMemory(memoryData) {
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/memories-page');
        }

    }
}
</script>

<style lang="scss" scoped></style>
