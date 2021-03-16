import Vue from 'vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

// import Ionic from '@ionic/vue';
// import '@ionic/core/css/ionic.bundle.css';


Vue.use(Ionic);
Vue.config.ignoredElements = [
  /^ion-/,
];