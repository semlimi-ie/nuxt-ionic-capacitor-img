<template>
  <form class="ion-padding" @change="checking" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input
          type="text"
          required
          :value="enteredTitle"
          @input="enteredTitle = $event.target.value"
        ></ion-input>
      </ion-item>

      <!-- <label for="title">Title</label> -->
      <!-- <input type="text" id="title" required v-model="enteredTitle" /> -->

      <ion-item>
        <!-- <ion-label position="floating">Image URL</ion-label>
        <ion-input
          type="url"
          required
          :value="enteredImageUrl"
          @input="enteredImageUrl = $event.target.value"
        ></ion-input> -->
        <ion-thumbnail slot="start">
          <img :src="previewImageUrl" alt="" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          Take Photo
        </ion-button>
      </ion-item>

      <!-- <label for="image">Image</label> -->
      <!-- <input type="text" id="image" required v-model="enteredImageUrl" /> -->

      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea
          rows="5"
          :value="enteredDescription"
          @input="enteredDescription = $event.target.value"
        ></ion-textarea>

        <!-- <label for="description">Description</label> -->
        <!-- <textarea id="description" rows="10" v-model="enteredDescription"></textarea> -->
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block"> Save </ion-button>
  </form>
</template>

<script>
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core'
const { Camera } = Plugins

export default {
  emits: ['save-memory'],
  data() {
    return {
      enteredTitle: '',
      enteredImageUrl: '',
      enteredDescription: '',
      previewImageUrl: null,
    }
  },
  methods: {
    checking() {
      console.log('enteredTitle', this.enteredTitle)
      console.log('enteredImageUrl', this.enteredImageUrl)
      console.log('enteredDescription', this.enteredDescription)
    },
    async takePhoto() {
      try {
        // const photo = await this.$CapacitorCamera.getPhoto({
        // const photo = await Camera.getPhoto({
        //   quality: 60,
        //   allowEditing: true,
        //   resultType: CameraResultType.Uri,
        //   source: CameraSource.Camera,
        // });

        const photo = await Camera.getPhoto({
          quality: 60,
          allowEditing: true,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt,
        });

        console.log('photo', photo);
        
        // this.previewImageUrl = photo.webPath
        this.previewImageUrl = photo.dataUrl;

        console.log('photo after', photo)
        console.log('previewImageUrl', this.previewImageUrl)
      } catch (e) {
        console.error('camera error', e)
      }
    },
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        // imageUrl: this.enteredImageUrl,
        imageUrl: this.previewImageUrl,
        description: this.enteredDescription,
      }
      console.log('memoryData in submitForm', memoryData)
      this.$emit('save-memory', memoryData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
