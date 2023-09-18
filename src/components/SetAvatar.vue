<template>
  <div class="avatar-container">
    <div class="title-container">
      <h1>Pick an avatar as your profile pic</h1>
    </div>

    <div class="avatars">
      <div v-for="(avatar, index) in avatars" :key="index" class="avatar-item">
        <img :src="'data:image/svg+xml;base64' + avatar" alt="Avatar" @click="handleProfilePic(index)" />
      </div>
    </div>
  </div>
</template>

<script>
const api = "https://api.multiavatar.com/45678945";
import axios from "axios";

export default {
  data() {
    return {
      avatars: [],
      isLoading: true,
      selectedAvatar: undefined,
    };
  },
  methods: {
    async handleProfilePic(index) {
      this.selectedAvatar = this.avatars[index];
      // Perform any other actions you want based on the selected avatar
    },
  },
  async mounted() {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
      data.push(response.data);
    }
    this.avatars = data;
    this.isLoading = false;
  },
};
</script>

<style>

</style>