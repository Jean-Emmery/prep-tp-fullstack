<template>
    <div>
        <form>
            
        </form>
    </div>
</template>
<script>

export default {
mounted(){
     return Vue.axios
        .get("/api/books")
        .then((res) => {

            console.table(res)
        })
        .catch((err) => {
          console.error(err.toJSON());
        })
}
}
</script>
<style>
    
</style>