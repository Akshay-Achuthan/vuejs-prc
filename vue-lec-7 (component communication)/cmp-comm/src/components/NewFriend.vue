<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>

    <div>
      <label>Mobile</label>
      <input type="number" v-model="enteredPhone" />
    </div>

    <div>
      <label>City</label>
      <input type="text" v-model="enteredCity" />
    </div>

    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>

    <button>Add contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredCity: "",
      enteredEmail: "",
    };
  },

  methods: {
    submitForm() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredCity,
        this.enteredEmail
      );
    },
  },
};
</script>

<style></style>
