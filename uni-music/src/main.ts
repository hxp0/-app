<<<<<<< HEAD
import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
=======
import { createSSRApp } from "vue";
import App from "./App.vue";
import './font/iconfont.css'
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
