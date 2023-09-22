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
    <MessagesVue />
    <ChatInput handleSendMsg="handleSendMsg" />

  </div>
</template>

<script>
import LogOut from './LogOut.vue'
import ChatInput from './ChatInput.vue'
import MessagesVue from './MessagesVue.vue'
export default {

    props: {
        currentChat: {
        type: Object,
        required: true
        }
    },
    components: {
        LogOut, ChatInput, MessagesVue
    }, 
    methods: {
        async handleSendMsg() {
            console.log("hello")
        }
    }
}
</script>