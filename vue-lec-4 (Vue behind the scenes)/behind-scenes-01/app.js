const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.log(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("unMount()");
  },
  unmounted() {
    console.log("unmount()");
  },
});
app.mount("#app");
setTimeout(function () {
  app.unmount();
}, 3000);

// secoond app

// const app2 = Vue.createApp({
//   template: `
//   <p>{{favouriteMeal}}</p>`,
//   data() {
//     return {
//       favouriteMeal: "pizza",
//     };
//   },
// });

// app2.mount("#app2");

// .... js

// let message = "hello";
// let longMessage = message + "world";
// console.log(longMessage);
// message = "hello!!!";
// console.log(longMessage);

// proxies in js

// const data = {
//   message: "hello!",
//   longMessage: "helloWorld",
// };

// const handler = {
//   set(target, key, value) {
//     // console.log(target);
//     // console.log(key);
//     // console.log(value);
//     if (key === "message") {
//       target.longMessage = value + "world";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);
// proxy.message = "Hello!!!";
// console.log(proxy.longMessage);
