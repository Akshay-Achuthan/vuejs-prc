const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course an learn Vue!",
      courseGoalB: "Master vue and build amazing apps",
      // courseGoalB: "<h2>Master vue and build amazing apps</h2>",
      vueLink: "https://www.google.co.in/",
      myWeb: "https://akshayachuthan97.netlify.app/",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
