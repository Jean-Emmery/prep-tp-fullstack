<template>
    <div>
        <p>toto</p>
        <form>
            <input type="text" v-model="username"/>
            <button type="button" @click="createUser()">Submit</button>
        </form>
    </div>
</template>
<script>

import Vue from 'vue'

export default {
data() {
    return {
        username: '',
    }
},
mounted() {
    // this.getAllBooks(),
    // this.createUser()
},
watch: {
    username() {
        console.log(this.username)
    }
},
methods: {
    getAllBooks() {
     return Vue.axios
        .get("/api/books")
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
    },
    createUser() {
    return Vue.axios
        .post("http://localhost:3333/api/createUser", {
            username: this.username
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
    }
}
}
</script>
<style>
    
</style>