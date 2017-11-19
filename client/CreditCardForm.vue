<template>
  <div class="panel panel-primary">
    <div class="panel-body">
      <div class="form-group">
        <label for="number">Card Number</label>
        <input id="number" class="form-control" v-model="number" />
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-8">
            <label for="cvc">Expiration Date</label>
            <input id="cvc" class="form-control" v-model="expDate" />
          </div>
          <div class="col-xs-4">
            <label for="exp-month">Security Code</label>
            <input id="exp-month" class="form-control" v-model="cvc" />
          </div>
        </div>
      </div>
      <button class="btn btn-primary">Pay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credit-card-form',
  data() {
    return {
      number: null,
      expDate: null,
      cvc: null
    }
  }
}
</script>
