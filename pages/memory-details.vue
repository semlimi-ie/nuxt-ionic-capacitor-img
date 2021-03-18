<template>
  <base-layout :page-title="chosenMemory ? chosenMemory.title : '...Loading'">
    <h2 v-if="!chosenMemory">
      Couldn't find the info. for the page you're looking for
    </h2>
    <memory-overview
      v-else
      :title="chosenMemory.title"
      :image="chosenMemory.image"
      :description="chosenMemory.description"
    ></memory-overview>
    <!-- <p>{{ $route.query.id }}</p> -->
  </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue'
export default {
  components: {
    MemoryOverview,
  },
  //   beforeRouteLeave(to, from, next) {
  //     console.log('to', to)
  //     console.log('from', from)
  //     console.log('next', next)
  //     console.log('this.$route.query', this.$route.query)

  //     next()
  //   },
  data() {
    return {}
  },
  computed: {
    chosenMemory() {
      return this.$store.getters.getSingleMemory(this.$route.query.id)
      // return this.$store.state.memories.find(eachMemory => eachMemory.id === this.$route.query.id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
