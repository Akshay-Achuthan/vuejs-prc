<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>

      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  margin-bottom: 1.5rem;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  border-bottom: 1px solid #5c940d;
  color: #74b816;
}

a:hover,
a:active {
  color: #5c940d;
}
</style>
