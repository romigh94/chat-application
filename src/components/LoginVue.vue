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
    </div>
    <input
      v-model="username"
      type="text"
      placeholder="Username"
      name="username"
      @change="handleChange"
      />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      name="password"
      @change="handleChange"
      />
      <button type="submit">Login</button>
      <span>Don't have an account? <router-link to="/">Register here</router-link></span>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
data() {
  return {
    username: '',
    password: '',
    errormessage: ''
  }
},



methods: {
  async handleSubmit(e) {


  try {
    e.preventDefault()


    const formValues = {
        username: this.username,
        password: this.password
   }

    const {data} = await axios.post("http://localhost:5000/login", formValues)
    console.log(data)


     if (!this.username || !this.password) {
        this.errormessage = "All fields are required!"
        return false
    } else if (data.status === false) {
        this.errormessage = data.msg
    } else if (data.status === true) {
        this.$router.push('/chat') 
    }

  } catch (err) {
    console.log(err)
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