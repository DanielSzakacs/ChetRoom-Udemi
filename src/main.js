import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { projectAuth } from "./firebase/config";

let app;
// this function runs in the first time to get the user
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    // we dont re mount app every time, otherwise we would not get the current user
    app = createApp(App).use(router).mount("#app");
  }
});
