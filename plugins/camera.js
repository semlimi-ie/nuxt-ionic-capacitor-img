import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;

export default function ({ app }, inject) {
    inject('CapacitorCamera', Camera);
  }