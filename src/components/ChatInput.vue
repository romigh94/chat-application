<template>

<div class="chatinput-container">

    <div class="button-container">
        <div class="emoji">
            <!--<div @click="handleEmoji">emoji</div>
            <div v-if="showEmoji"> 
            </div>-->
        </div>
    </div>
    <form class="input-container" @submit="sendChat">
        <input type="text" placeholder="Type your message here" v-model="message">
        <button class="submit">
            <img src="../assets/send-icon.svg" />
        </button>
    </form>

</div>
  
</template>

<script>
export default {
    props: {
        handleSendMsg: Function
    },
    data() {
        return {
            showEmoji: false,
            message: ''
        }
    },
    methods: {
        sendChat(event) {
            event.preventDefault();
            console.log(this.message)
            if (this.message.length > 0) {
                this.handleSendMsg(this.message);
                this.message = ''; // Clear the input field after sending the message
            }
        }
    }
    /*,
    methods: {
        
        handleEmoji() {
            this.showEmoji = !this.showEmoji
        },
        handleEmojiClick(event, emoji) {
            let msg = this.message
            msg += emoji.emoji
            this.message(msg)

            style : position: absolute, top: -350px.
            backgroud-color: #080420 box-shadow: 0 5px 10px purple;
            border-color: purple,

            .emoji-categories: button: filter: contrast(0),

            .emoji-search:
            background-color: transparent;
            border-color: purple color

            .emoji-group::before
            background-color: #080420

            .emoji-scroll-wrapper::-webkit-scroll
            background-color: ##080420;
            background: purple one;


        }
    }
    */
}
</script>

<style>

</style>