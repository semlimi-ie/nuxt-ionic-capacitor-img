<template>
    <ion-item>
      <nuxt-link :to="`/memory-details?id=${singleMemory.id}`">
        <div class="flex m-1">
          <ion-thumbnail slot="start">
            <ion-img
              :src="singleMemory.image"
              :alt="singleMemory.title"
            ></ion-img>
          </ion-thumbnail>

          <ion-label>
            {{ singleMemory.title }}
          </ion-label>
        </div>
      </nuxt-link>
    </ion-item>
</template>

<script>
export default {
  props: ['singleMemory'],
  components: {},
}
</script>

<style scoped>
@import '@/assets/styles/core.css';
</style>
