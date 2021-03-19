import Vue from 'vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core


// import {IonicVue} from '@ionic/vue';
// import '@ionic/core/css/ionic.bundle.css';

// import {Ionic} from '@ionic/core';


Vue.use(Ionic);
Vue.config.ignoredElements = [
  /^ion-/,
];