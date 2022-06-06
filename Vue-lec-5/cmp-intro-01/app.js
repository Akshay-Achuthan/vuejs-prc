const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@local.com",
        },
        {
          id: "Lopez Hena",
          phone: "01234 4678 991",
          email: "Lopez@local.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
  <h2>{{friend.id}}</h2>
  <button @click="toggleDetails()">
    {{detailsAreVisible ? 'Hide' : 'Show'}} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>
  
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Akshay Achuthan",
        phone: "01234 4678 991",
        email: "Lopez@local.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
