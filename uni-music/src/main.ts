import { createSSRApp } from "vue";
import App from "./App.vue";
import './font/iconfont.css'
import { createPinia } from "pinia";
const Pinia = createPinia()
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia)
  return {
    app,
  };
}
