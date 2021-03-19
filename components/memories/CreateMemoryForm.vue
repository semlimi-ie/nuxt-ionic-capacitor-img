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
        <ion-label position="floating">Image URL</ion-label>
        <ion-input
          type="url"
          required
          :value="enteredImageUrl"
          @input="enteredImageUrl = $event.target.value"
        ></ion-input>
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
export default {
  emits: ['save-memory'],
  data() {
    return {
      enteredTitle: '',
      enteredImageUrl: '',
      enteredDescription: '',
    }
  },
  methods: {
    checking() {
      console.log('enteredTitle', this.enteredTitle)
      console.log('enteredImageUrl', this.enteredImageUrl)
      console.log('enteredDescription', this.enteredDescription)
    },
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.enteredImageUrl,
        description: this.enteredDescription,
      }
      console.log('memoryData in submitForm', memoryData)
      this.$emit('save-memory', memoryData)
    },
  },
}
</script>

<style lang="scss" scoped></style>
