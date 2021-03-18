<template>
  <ion-page>
    <ion-header>
      <!-- <div class="flex justify-start"> -->
      <ion-toolbar>
        <button @click="goBack">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>

        <button @click="goForward">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>

        <button
          @click="goHome"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span v-if="hover"> Go back to main page </span>
        </button>

        <ion-title> {{ pageTitle }} </ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end" />
        </ion-buttons>
      </ion-toolbar>
      <!-- </div> -->
    </ion-header>
    <div class="list">
      <ion-content>
        <slot />
      </ion-content>
    </div>
  </ion-page>
</template>

<script>
export default {
  props: ['pageTitle'],
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    },
    goHome() {
      this.$router.push('/')
      // this.$router.push({name: 'memory-details'});
    },
  },
}
</script>

<style scoped>
.list {
  height: 100vh;
}
</style>
