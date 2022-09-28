<template>
  <div>
      <v-card width="100%" :to="'/user/' + data.login.username">
        <v-img
          height="120px"
          src="https://picsum.photos/id/1080/500?blur"
        >
          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                :src="data.picture.thumbnail"
              >
            </v-avatar>
            <p class="ml-3">
              {{ data.name.first }}
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Contact Info
          </div>

          <v-timeline
            align-top
            dense
          >
            <time-line-item color="pink" :title="data.location.city + ', '+ data.location.state" :subtitle="data.location.country" />
            <time-line-item color="blue" :title="data.email" :subtitle="data.phone" />
          </v-timeline>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
import TimeLineItem from './TimeLineItem.vue'
  export default {
  components: { TimeLineItem },
    name: 'UserCard',

    props: {
      data: {
        type: Object,
        required: true,
      }
    },
  }
</script>
