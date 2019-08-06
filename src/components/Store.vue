<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SPORTS STORE</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <category-controls />
      </div>
      <div class="col-9 p-2">
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from '@/components/ProductList'
import CategoryControls from '@/components/CategoryControls'

export default {
  name: 'Store',
  components: { ProductList, CategoryControls },
  data () {
    return {}
  }
}
</script>
