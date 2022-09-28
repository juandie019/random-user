<template>

  <div class="" v-if="user">
    <div>
      <div class="user-background">
        <v-img
          height="220px"
          src="https://picsum.photos/id/1080/500?blur"
        />

      </div>
    </div>
    <div class="own-container">
      <v-row class="mt-5">
        <div>
          <img class="user-image" width="200px" :alt="user.name.first" :src="user.picture.large">
        </div>
        <div class="ml-5">
          <h1>{{user.name.first}}, {{user.name.last}}</h1>
          
          <div class="font-weight-normal">
            <strong>{{ user.email }} </strong> 
          </div>
          <a :href="'Tel:' + user.celll" rel="tel">{{ user.cell }}</a>
          <br >
          <v-btn class="mt-10" @click="modifyFavourites()">{{ buttonText }}</v-btn>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserView',

  data() {
    return {
      user: null,
    }
  },

  async mounted(){
    try {
      const userId = this.$route.params.id;
      this.user = await this.findUser(userId);
    } catch (error) {
      console.log(error)  
    }
  },

  methods: {
    ...mapActions('user', ['findUser', 'updateFavourites']),

    modifyFavourites(){
      this.updateFavourites({data: this.user, add: !this.isFav})
    }
  },

  computed: {
    ...mapGetters('user', ['favouritesUsers']),

    isFav(){
      const indexOfUser = this.favouritesUsers.findIndex(user => {
          return user.login.username == this.user.login.username;
      })

      return indexOfUser >= 0;
    },

    buttonText(){
      return this.isFav ? 'Remove from favourites' : 'Add to favourites'
    }
  }
}
</script>

<style scoped>
.user-image {
  border-radius: 10px;
}

a {
  color: blue !important;
}
</style>