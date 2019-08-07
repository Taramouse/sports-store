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
        <category-controls />
      </div>
      <div class="col-sm-12 col-md-9 p-2">
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from '@/components/ProductList'
import CategoryControls from '@/components/CategoryControls'
import CartSummary from '@/components/CartSummary'

export default {
  name: 'Store',
  components: { ProductList, CategoryControls, CartSummary },
  data () {
    return {}
  }
}
</script>
