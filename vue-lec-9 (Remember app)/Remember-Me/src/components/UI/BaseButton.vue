<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #5c940d;
  border: none;
  color: white;
  cursor: pointer;
}

/* button:hover,
button:active {
  background-color: #74b816; 
}*/

.flat {
  background-color: transparent;
  color: #5c940d;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #d8f5a2;
}

button:nth-child(1) {
  margin: 0 2rem;
}
</style>
