import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase'
import './style.css'
import App from './App.vue'

const app  = createApp(App);

app.use(VueFire, {
    firebaseApp,
});

app.mount('#app');
