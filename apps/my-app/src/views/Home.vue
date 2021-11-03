<template>
  <div class="home">
    <Books />
  </div>
</template>

<script>
import Vue from 'vue';
import Books from '../components/Books.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Books,
  },
});
</script>
