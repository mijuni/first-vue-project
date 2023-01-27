import { createApp } from "vue";
import App from "./App.vue";

import "./assets/base.css";
// importieren
import HeadingComponent from "@/components/HeadingComponent";

// component use globally - registrieren über app component ("Name im template", Name der Component), aber nicht mehr importieren
const app = createApp(App);
app.component("HeadingComponent", HeadingComponent);
app.mount("#app");
