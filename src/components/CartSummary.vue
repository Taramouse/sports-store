<template>
  <div class="float-right">
    <div class="cart-summary mt-2">
      <small>
        Your cart:
        <span v-if="itemCount > 0">
          {{ itemCount }} item(s) {{ totalPrice | currency }}
        </span>
        <span v-else>
          (empty)
        </span>
      </small>
      <router-link to="/cart"
                   class="btn btn-sm bg-dark text-white"
                   v-bind:disabled="itemCount == 0">
        <i class="fa fa-shopping-cart"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      itemCount: 'cart/itemCount',
      totalPrice: 'cart/totalPrice'
    })
  }
}
</script>
<style>
.cart-summary {
  display: inline-block;
}
.cart-summary small {
  margin-top: 2px;
}
.cart-summary a {
  padding-top: 0px;
}
</style>
