<template>
  <div v-if="currentUser.username && currentUser.avatarImage" class="contact-container">
    <div class="brand">
      <img src="../assets/chat-logo.svg" />
      <h3>Chat app</h3>
    </div>
    <div class="contacts">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        @click="handleChatChange(index)"
        class="contact"
        :class="{ selectedUser: index === currentSelected }"
      >
        <div class="avatar">
          <img :src="'data:image/svg+xml;base64,' + contact.avatarImage" />
        </div>
        <div class="username">
          <h4>{{ contact.username }}</h4>
        </div>
      </div>
    </div>
    <div class="current-user">
      <div class="avatar">
        <img :src="'data:image/svg+xml;base64,' + currentUser.avatarImage" />
      </div>
      <div class="username">
        <h3>{{ currentUser.username }}</h3>
      </div>
    </div>
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
    },
    changeChat: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      currentSelected: undefined
    };
  },
  methods: {
    handleChatChange(index) {
      this.currentSelected = index;
      this.changeChat(this.contacts[index]);
    }
  }
};
</script>
