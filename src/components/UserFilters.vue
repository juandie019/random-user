<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="4" lg="3">
      <v-radio-group v-model="genderChoosen">
        <v-row no-gutters>
          <v-radio
            class="mr-2"
            v-for="gender in genders"
            :key="gender.value"
            :label="gender.name"
            :value="gender.value"
          />
        </v-row>
      </v-radio-group>
    </v-col>
    
    <v-col cols="12" sm="6" md="3" lg="2">
      <v-select
        v-model="nationalityChoosen"
        :items="nationalities"
        label="Nationality"
        dense
      ></v-select>
    </v-col>

    <v-col cols="12" sm="6" md="3" lg="1">
      <v-select
        v-model="ageChoosen"
        :items="['ALL', ...Array.from({length: 100}, (_, i) => i + 1)]"
        label="Edad"
        dense
      ></v-select>
    </v-col>

  </v-row>
</template>

<script>
  export default {
    name: 'TimeLineItem',

    props: {
      
    },

    data(){
      return{
        currentAge: 'ALL',
        currentGender: 'all',
        genders: [
          {name: 'All', value: 'all'},
          {name: 'Male', value: 'male'},
          {name: 'Female', value: 'female'},
        ],

        currentNationality: 'ALL',
        nationalities: ['ALL', 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI',
                        'FR', 'US','MX',]
      }
    },

    computed: {
      genderChoosen: {
        set(newValue){
          this.$emit('onGenderChange', newValue);
          this.currentGender = newValue;
        },

        get(){
          return this.currentGender;
        }
      },

      nationalityChoosen: {
        set(newValue){
          this.$emit('onNationalityChange', newValue);
          this.currentNationality = newValue;
        },

        get(){
          return this.currentNationality;
        }
      },

      ageChoosen: {
        set(newValue){
          const emitValue = newValue == 'ALL' ? '0' : newValue
          this.$emit('onAgeChange', emitValue);
          this.currentAge = newValue;
        },

        get(){
          return this.currentAge;
        }
      }
    }
  }
</script>
