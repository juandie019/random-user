<template>
  <v-container fluid class="mt-10 own-container">
    <user-filters @onGenderChange="updateGender" @onNationalityChange="updateNationality" @onAgeChange="updateAge"/>
    <v-row>
      <v-col  cols="12" sm="6"  md="4" lg="3" v-for="(user, index) in usersFiltered" :key="index">
        <user-card :data="user"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import UserCard from '../components/UserCard'
  import UserFilters from '../components/UserFilters'
  
  export default {
    name: 'HomeView',

    components: {
      UserCard,
      UserFilters
    },

    data(){
      return {
        filters: {
          gender: 'all',
          nationality: 'ALL',
          age: 0,
        }
      }
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
      ...mapGetters('user', ['users', 'usersExists']),

      usersFiltered(){
        if(this.filters.gender == 'all' && this.filters.nationality == 'ALL' && this.filters.age <= 0){
          return this.users;
        } else {
          return this.users.filter(user => {
            if(this.filters.gender != 'all' && user.gender != this.filters.gender){
              return false
            }
            else if(this.filters.nationality != 'ALL' && user.nat != this.filters.nationality){
              return false
            }
            else if(this.filters.age > 0 && user.dob.age != this.filters.age){
              return false
            }

            return true;
          })
        }
      }
    }
  }
</script>
