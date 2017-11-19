<template>
  <div>
    <h1 id="message">{{ message }}</h1>

    <div class="col-xs-offset-4 col-xs-4">
      <credit-card-form />
    </div>
  </div>
</template>

<script>
import CreditCardForm from './CreditCardForm.vue'

export default {
  name: 'app',
  data() {
    return { message: 'Hello!' }
  },
  components: {
    'credit-card-form': CreditCardForm
  }
}
</script>

<style>
#message {
  color: blue;
}
</style>
