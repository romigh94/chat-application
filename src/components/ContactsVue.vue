<template>
  
  <div>
    <h2>User: {{ currentUser.username }}</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.username">{{ contact.username }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },

}
</script>

<style>

</style>