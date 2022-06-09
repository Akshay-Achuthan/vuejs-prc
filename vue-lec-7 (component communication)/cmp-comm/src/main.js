import { createApp } from "vue";

//* Default Export
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);
app.mount("#app");
