<template>
  <form class="register-form" @submit="handleSubmit">
    <div class="inner-register-form">
    <div class="brand">
      <img src="../assets/chat-logo.svg" alt="" />
      <h1>Chat App</h1>
    </div>
    <div class="message-container">
      <div class="error-container">
        {{errormessage}}
      </div>
      <div class="success-container">
        {{successmessage}}
      </div>
    </div>
    <input
      v-model="username"
      type="text"
      placeholder="Username"
      name="username"
      @change="handleChange"
      />
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      name="email"
      @change="handleChange"
      />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      name="password"
      @change="handleChange"
      />
    <input
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      name="confirmPassword"
      @change="handleChange"
      />
      <button type="submit">Create User</button>
      <span>Already have an account? <router-link to="/login">Login here</router-link></span>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
data() {
  return {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errormessage: '',
    successmessage: ''
  }
},



methods: {
  async handleSubmit(e) {
    e.preventDefault()

    const formValues = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
    }

    if(this.password !== this.confirmPassword) {
      this.errormessage = "Passwords do not match!"
    } else if (!this.email || !this.username || !this.password || !this.confirmPassword) {
      this.errormessage = "All fields are required!"
    } else {
      console.log(formValues)
      this.successmessage = "You have successfully registered!"
      await axios.post("http://localhost:5000/register", formValues)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


  },
  handleChange(e) {
    e.preventDefault()
    this.errormessage = ""
    this.successmessage =""
  }
}


}
</script>

<style>

</style>