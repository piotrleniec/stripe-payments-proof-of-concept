<template>
  <h1 id="message">{{ message }}</h1>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { message: 'Hello!' }
  }
}
</script>

<style>
#message {
  color: blue;
}
</style>
