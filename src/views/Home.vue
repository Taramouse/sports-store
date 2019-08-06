<template>
  <div class="home">
    <store />
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/components/Store.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Store
  },
  methods: {
    ...mapActions(['getData'])
  },
  created () {
    this.getData()
  }
}
</script>
