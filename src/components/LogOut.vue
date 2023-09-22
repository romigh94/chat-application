<template>

    <div class="logout-container">

        <button @click="handleClick"> Log Out </button>
        
    </div>
  
</template>

<script>
export default {

    methods: {
        handleClick() {
            localStorage.clear()
            this.$router.push('/login')
        }
    }

}
</script>

<style scoped>

button {
    background-color: #997af0;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
}

</style>