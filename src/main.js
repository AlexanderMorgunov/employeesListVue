import { createApp } from 'vue'
import App from './App.vue'
import components from "./components/UI"

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
})
// import Vue from 'vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// // Vue.use(BootstrapVue);
// // Vue.use(IconsPlugin);
app.mount('#app')

