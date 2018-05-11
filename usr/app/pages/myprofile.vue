<template>
  <section class="container">
    <div>
        <h2>My profile</h2>
        <div v-if="profile.fetched">
            {{ profile.profile }}
        </div>
        <div v-else>
            ... Loading
        </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
        'profile'
    ]),
    mounted() {
        this.$store.dispatch('profile/fetchProfile');
    }
    // async fetch({ store }) { // 3.5s
    //   return store.dispatch('profile/fetchProfile');
    // },
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>