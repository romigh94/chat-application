<template>

<!-- Find one gif loader because the images are slow to load -->
  <div class="avatar-container">
    <div class="title-container">
      <h1>Pick an avatar as your profile pic</h1>
    </div>

    <div class="error-container">
      {{errormsg}}
    </div>

    <div class="avatars">
      <div v-for="(avatar, index) in avatars" :key="index" class="avatar">
        <div :class="{ selected: index === selectedAvatar }">
        <img :src="'data:image/svg+xml;base64,' + avatar" alt="Avatar" @click="handleProfilePic(index)" />
        </div>
      </div>
    </div>

    <button @click="setProfilePicture" class="profilepic-submit-btn" >Set as Profile Picture</button>

  </div>
</template>

<script>
const api = "https://api.multiavatar.com/45678945";
import axios from "axios";
import {Buffer} from 'buffer'

export default {
  data() {
    return {
      avatars: [],
      isLoading: true,
      selectedAvatar: undefined,
      errormsg: ''
    };
  },
  methods: {
    async handleProfilePic(index) {
      this.selectedAvatar = index
    },
    async setProfilePicture() {
      if (this.selectedAvatar === undefined) {
        this.errormsg = "Please select an avatar"
      } 
    }
  },
  async mounted() {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)
      const buffer = new Buffer(response.data)
      data.push(buffer.toString("base64"))
    }
    this.avatars = data;
    this.isLoading = false;
  },
};
</script>

<style>

</style>