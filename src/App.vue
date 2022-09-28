<template>
  <v-app>
    <v-app-bar
      app
      color="pink"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <h1 class="white--color">
            U Random
          </h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/favourites">
        <span class="mr-2">My favourites {{favouritesCount}}</span>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',

  async mounted(){
    try {
      await this.fetchUsers();
    } catch (error) {
      console.error('Error', error);
    }
  },

  methods: { 
    ...mapActions('user', ['fetchUsers',])
  },

  computed: { 
    ...mapGetters('user', ['favouritesCount'])
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: white !important;
}

.own-container {
  max-width: 1200px;
  margin: auto;
}
@media screen and (max-width:1200px) {
  .own-container {
    padding: 0px 20px;
  }
}
</style>