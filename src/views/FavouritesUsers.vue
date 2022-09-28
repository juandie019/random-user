<template>
  <v-container fluid class="mt-10 own-container">
    <v-row no-gutters class="mt-10">
      <download-csv
          v-if="favouritesCount > 0"
          class="export-button"
          :data="simplifiedData" name="favouritesUsers.csv">
          Export to CSV
      </download-csv>
    </v-row>
    <v-row>
      <v-col  cols="12" sm="6"  md="4" lg="3" v-for="(user, index) in favouritesUsers" :key="index">
        <user-card :data="user"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DownloadCsv from 'vue-json-csv'

  import UserCard from '../components/UserCard'

  export default {
    name: 'FavouritesUsers',

    components: {
      UserCard,
      DownloadCsv
    },

    methods: {
      updateGender(newValue){
        this.filters.gender = newValue;
      },

      updateNationality(newValue){
        this.filters.nationality = newValue;
      },

      updateAge(newValue){
        this.filters.age = newValue;
      }
    },

    computed: {
      ...mapGetters('user', ['favouritesUsers', 'favouritesCount']),

      simplifiedData(){
        return this.favouritesUsers.map(user => {
          return {
            first_name: user.name.first,
            last_name: user.name.last,
            phone: user.phone,
            country: user.location.country,
            state: user.location.state,
            cp: user.location.postcode,
            street_name: user.location.street.name,
            house_number: user.location.street.number,
            email: user.email,
            cell: user.cell,
            gender: user.gender,
            age: user.dob.age,
          }
        })
      }
    }
  }
</script>
<style scoped>
.export-button {
 background: pink;
 padding: 10px 20px;
 color: white;
 cursor: pointer;
}
</style>