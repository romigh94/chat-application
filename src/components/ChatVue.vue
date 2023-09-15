<template>
    <input v-model="name" type="text" class="text" placeholder="Name">
    <input v-model="message" type="text" class="text" placeholder="Message">
    <button @click="sendMessage">Send</button>
</template>

<script>
import axios from 'axios'

export default {
  data() { 
    return { 
      name: "",
      message: "",
      messages: []
    }
  },
  methods: {
    async sendMessage() {
      const msg = {
        name: this.name,
        message: this.message
      }

console.log(msg)
      try {
        const response = await axios.post('http://localhost:5000/messages', msg)
        console.log(response)
      } catch(err) {
        console.log(err)
      }
    },
    }
  }
  
</script>


