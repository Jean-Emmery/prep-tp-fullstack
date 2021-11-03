<template>
    <div>
        <p>{{ username }}</p>
                <form>
                    <input type="text" v-model="newUsername"/>
                    <button type="button" @click="editUser(userId)">Modify</button>
                </form>
    </div>
</template>
<script>

import Vue from 'vue'

export default {
    data() {
        return {
            userId: this.$route.params.id,
            newUsername: '',
            username: this.$route.params.name
        }
    },
methods: {
        editUser(userId) {
        return Vue.axios
        .put("/api/user/", {
            id: userId,
            name: this.newUsername
        })
        .then((res) => {
            console.log(res.status)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
        .finally(() => this.$router.push({path: '/'}))
    },
},
}
</script>
<style>
    
</style>