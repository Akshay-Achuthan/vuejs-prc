<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "( Favourite )" : "" }}</h2>

    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>{{ mobile }}</strong>
      </li>
      <li>
        <strong>{{ city }}</strong>
      </li>
      <li>
        <strong>{{ emailAddress }}</strong>
      </li>

      <li>
        <strong>{{ isFavourite }}</strong>
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "mobile", "place", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0" || value === "2";
      // },
    },
  },

  emits: ["toggle-favorite", "delete"],

  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   },
  // },

  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavourite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
