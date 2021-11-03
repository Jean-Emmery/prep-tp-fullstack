<template>
    <div>
        <h1>Ajouter</h1>
        <hr>
        <form>
            <input type="text" v-model="username"/>
            <button class="btn red" type="button" @click="createUser()">Submit</button>
        </form>
            <div v-for="user in users" v-bind:key="user.id">
                <hr>
                <p>{{ user }}</p>
                <button class="btn blue" @click="editUser(user.id, user.name)"><i class="mdi mdi-eye"></i></button>
                <button class="btn red" @click="deleteUser(user.id)"><i class="mdi mdi-delete"></i></button>
            </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
data() {
    return {
        username: '',
        users: [],
        newUsername: '',
        editId: null
    }
},
mounted() {
    this.getAllBooks()
},
methods: {
    getAllBooks() {
     return Vue.axios
        .get("/api/books")
        .then((res) => {
            this.users = res.data
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
    },
    createUser() {
    return Vue.axios
        .post("/api/user/create", {
            username: this.username
        })
        .then((res) => {
            console.log(res.status)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
        .finally(() => this.getAllBooks())
    },
    editUser(userId, username) {
        this.$router.push({path: '/user/'+ userId + '/' + username})
    },
    deleteUser(userId) {
    return Vue.axios
        .delete("/api/user/"+ userId)
        .then((res) => {
            console.log(res.status)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
        .finally(() => this.getAllBooks())
    }
    }
    
}
</script>
<style>
    
</style>