<template>
  <div class="row mt-2">
    <div class="col form-group">
      <select class="form-control"
              v-on:change="changePageSize">
        <option value="4">4 products</option>
        <option value="8">8 products</option>
        <option value="12">12 products</option>
      </select>
    </div>
    <div class="col text-right">
      <div class="btn-group mx-2">
        <button v-for="i in pageNumbers"
                v-bind:key="i"
                class="btn"
                v-bind:class="{ 'btn-primary': i == currentPage }"
                v-on:click="setCurrentPage(i)">
          {{ i }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['pageCount']),
    pageNumbers () {
      return [...Array(this.pageCount + 1).keys()].slice(1)
    }
  },
  methods: {
    ...mapMutations(['setCurrentPage', 'setPageSize']),
    changePageSize ($event) {
      this.setPageSize(Number($event.target.value))
    }
  }
}
</script>
