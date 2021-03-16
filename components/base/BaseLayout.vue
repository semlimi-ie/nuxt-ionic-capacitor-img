<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> {{ pageTitle }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- <ion-content class="content"> -->
    <!-- <h2>These are my memories - list to be added</h2> -->
    <!-- </ion-content> -->
    <div class="list">
      <ion-content>
          <slot />

      </ion-content>
    </div>
  </ion-page>
</template>

<script>
export default {
    props: ['pageTitle']
}
</script>

<style scoped>
.list {
  height: 100vh;
}
</style>
