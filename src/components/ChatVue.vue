<template>
  <div class="chat-container">
    <div class="chat-inner-container">

      <ContactsVue 
        :contacts="contacts" 
        :currentUser="currentUser" 
        :changeChat="handleChatChange" 
      />

      <div v-if="currentChat === undefined">
        <WelcomeVue 
          :currentUser="currentUser"
        />
      </div>

      <div v-else>
        <ChatContainer :currentChat="currentChat" />
      </div>

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
import WelcomeVue from './WelcomeVue.vue'
import ChatContainer from './ChatContainer.vue'

export default {
  data() { 
    return { 
      contacts: [],
      currentUser: {},
      currentChat: undefined
    }
  },
  components: {
    ContactsVue, WelcomeVue, ChatContainer
  },
  methods: {
      handleLogOut() {
        localStorage.removeItem("chat-app-user")
        this.$router.push('/login')
      },
      handleChatChange(chat) {
        this.currentChat = chat
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


