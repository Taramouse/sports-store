<template>
  <div class="home">
    <store />
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/components/Store.vue'

export default {
  name: 'Home',
  components: {
    Store
  }
}
</script>
