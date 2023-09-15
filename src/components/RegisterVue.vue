<template>
  <form class="register-form" @submit="handleSubmit">
    <div class="inner-register-form">
    <div class="brand">
      <img src="../assets/chat-logo.svg" alt="" />
      <h1>Chat App</h1>
    </div>
    <input
      type="text"
      placeholder="Username"
      name="username"
      @change="handleChange"
      />
    <input
      type="email"
      placeholder="Email"
      name="email"
      @change="handleChange"
      />
    <input
      type="password"
      placeholder="Password"
      name="password"
      @change="handleChange"
      />
    <input
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
export default {

methods: {
  handleSubmit(e) {
    e.preventDefault()

  },
  handleChange(e) {
    e.preventDefault()
  }
}


}
</script>

<style>

</style>