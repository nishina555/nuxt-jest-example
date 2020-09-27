<template>
  <div class="container">
    <h2>
      user list
    </h2>
    <div v-for="user in users" :key="user.id" >
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.get(`http://localhost:4001/users`)
    return { users: data }
  },
}
</script>

<style scoped>
.container {
  text-align: center;
  width: 50%;
}
</style>