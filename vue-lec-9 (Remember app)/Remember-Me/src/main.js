import { createApp, h } from 'vue';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseDialoge from './components/UI/BaseDialoge.vue';

const app = createApp({
  render: () => h(App),
});

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialoge', BaseDialoge);
app.mount('#app');
