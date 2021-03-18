<template>
  <!-- Add some ionic markup... -->
  <ion-page>
    <ion-header class="">
      <ion-toolbar class="toolbar-md-primary">
        <!-- <div class="flex justify-between"> -->
        <ion-title>Ionic Nuxt App</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <div class="flex justify-center">
          <nuxt-link to="/ionic-nuxt-app/memories-page">
            <ion-title> Go To Memories Page </ion-title>
          </nuxt-link>
          <nuxt-link to="/memories-page">
            <ion-nav> Navigate to memories page </ion-nav>
          </nuxt-link>
        </div>
      </ion-toolbar>
    </ion-header>
    <Logo />
    <ion-content class="content">
      <ion-card>
        <ion-card-subtitle>Ololo</ion-card-subtitle>
        <ion-card-title>Trololo</ion-card-title>
        <ion-card-content>
          <h1>Hololo!</h1>
        </ion-card-content>
      </ion-card>
    </ion-content>
    <base-layout />
  </ion-page>
</template>

<script>
// import BaseLayout from '~/components/base/BaseLayout.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
    // BaseLayout,
  },
}
</script>

<style scoped>
@import '@/assets/styles/core.css';
ion-nav {
  color: hotpink;
}
</style>
