<template>
  <section class="container">
    <div>
      <h1 class="title">
        users! Hello
      </h1>
      <h2 class="subtitle">
        A web application to see users
      </h2>
    </div>
    <div>
        <h2>Users</h2>
        <ul class="users">
          <li v-for="user in users" :key="user.id">
            <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>
  import axios from 'axios';
  export default {
    computed: {
      users() {
        return this.$store.state.users.list;
      },
    },
    async fetch({ store }) {
      return store.dispatch('users/fetchUsers');
    },
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links {
    padding-top: 15px;
  }
  .users {
    list-style-type: none;
  }
  .users li a {
    display: inline-block;
    width: 200px;
    border: 1px #ddd solid;
    padding: 10px;
    text-align: left;
    color: #222;
    text-decoration: none;
  }
  .users li a:hover {
    color: orange;
  }
</style>