<template>
  <div class="chatcontainer-container">

    <div class="chat-header">
        <div class="user-details">
            <div class="avatar">
                <img :src="'data:image/svg+xml;base64,' + currentChat.avatarImage" />
            </div>
            <div class="username">
                <h3>{{currentChat.username}}</h3>
            </div>
        </div>
        <LogOut />
    </div>
    <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
            {{ message.text }}
        <!-- Add any additional message information or formatting here -->
        </div>
    </div>
        <ChatInput :handleSendMsg="handleSendMsg" />

  </div>
</template>

<script>
import LogOut from './LogOut.vue'
import ChatInput from './ChatInput.vue'
//import MessagesVue from './MessagesVue.vue'
import axios from 'axios'


export default {

    props: {
        currentChat: {
            type: Object,
            required: true
        },
        currentUser: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            messages: []
        }
    },
    components: {
        LogOut, ChatInput
    }, 
    methods: {
        async handleSendMsg(msg) {
            await axios.post('http://localhost:5000/addmessage', {
                from: this.currentUser._id,
                to: this.currentChat._id,
                message: msg
            })
        }
    },
    async mounted() {
        const response = await axios.post('http://localhost:5000/getallmessages', {
                from: this.currentUser._id,
                to: this.currentChat._id
            })

        this.messages = response.data
    }
}
</script>