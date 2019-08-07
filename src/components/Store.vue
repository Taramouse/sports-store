<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SPORTS STORE</a>
        <cart-summary />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-3 bg-info p-2">
        <category-controls class="mb-5" />
        <button class="btn btn-block btn-warning mt-5"
                v-on:click="setShowSearch(true)">
          Search
        </button>
      </div>
      <div class="col-sm-12 col-md-9 p-2">
        <search />
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import ProductList from '@/components/ProductList'
import CategoryControls from '@/components/CategoryControls'
import CartSummary from '@/components/CartSummary'
import Search from '@/components/Search'

export default {
  name: 'Store',
  components: { ProductList, CategoryControls, CartSummary, Search },
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['setShowSearch'])
  }
}
</script>
