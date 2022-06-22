<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');

header {
  font-family: 'Beau Rivage', cursive;
  font-size: 1.3rem;
  width: 100%;
  height: 5rem;
  margin-top: 0.5rem;
  background-color: #5c940d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  letter-spacing: 5px;
  margin: 0;
}
</style>
