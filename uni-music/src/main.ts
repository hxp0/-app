import { createSSRApp } from "vue";
import App from "./App.vue";
import './font/iconfont.css'
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
