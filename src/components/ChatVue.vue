<template>
  <div class="chat-container">
    <div class="chat-inner-container">

      HELLO

      <ContactsVue :contacts="contacts" :currentUser="currentUser" />

      <!--
      <input v-model="name" type="text" class="text" placeholder="Name">
      <input v-model="message" type="text" class="text" placeholder="Message">
      <button @click="sendMessage">Send</button>


      <button @click="handleLogOut">Log Out</button>
      -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ContactsVue from './ContactsVue.vue'

export default {
  data() { 
    return { 
      contacts: [],
      currentUser: {}
    }
  },
  components: {
    ContactsVue
  },
  methods: {
      handleLogOut() {
        localStorage.removeItem("chat-app-user")
        this.$router.push('/login')
      }
    },
    async mounted() {
      if (!localStorage.getItem("chat-app-user")) {
        this.$router.push('/login')
      } else {
        this.currentUser = await JSON.parse(localStorage.getItem("chat-app-user"))
      }

      if (this.currentUser) {
        if (this.currentUser.isAvatarImageSet) {
          const data = await axios.get(`http://localhost:5000/allusers/${this.currentUser._id}`)
          this.contacts = data.data
        } else {
          this.$router.push('/setavatar')
        }
      }


    }
  }
  
</script>


