<template>
  <v-timeline-item
    :color="color"
    small
  >
    <div>
      <div class="font-weight-normal">
        <strong>{{ title }} </strong> 
      </div>
      <div>{{ subtitle }}</div>
    </div>
  </v-timeline-item>
</template>

<script>
  export default {
    name: 'TimeLineItem',

    props: {
      title: {
        type: String,
        default: 'black',
      },

      subtitle: {
        type: String,
        default: 'black',
      },

      color: {
        type: String,
        default: 'black',
      }
    },
  }
</script>
