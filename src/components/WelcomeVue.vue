<template>

    <div class="welcome-container">
        
        <img src="../assets/robot.gif" />
        <h1>Welcome, <span>{{currentUser.username}}!</span></h1>
        <h3>Please select a user you want to chat with</h3>

    </div>
  
</template>

<script>
export default {

    props: {
        currentUser: {
        type: Object,
        required: true
        }
    }
}
</script>

