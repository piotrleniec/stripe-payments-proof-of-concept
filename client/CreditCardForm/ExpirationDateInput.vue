<template>
  <input
    id="exp-date"
    class="form-control"
    v-model="inputValue"
    @focus="selectFirstCharacter"
    @input="selectNextCharacter"
    @keydown="allowToInputOnlyFourCharacters"
  />
</template>

<script>
export default {
  name: 'expiration-date-input',
  props: ['value'],
  computed: {
    inputValue: {
      get: function() {
        return `${this.value.month.padEnd(2, '_')}/${this.value.year.padEnd(2, '_')}`
      },
      set: function(newInputValue) {
        const [month, year] = newInputValue.split('/')

        this.$emit('input', { month, year })
      }
    }
  },
  methods: {
    selectFirstCharacter: function(event) {
      event.target.setSelectionRange(0, 1)
    },
    selectNextCharacter: function(event) {
      const { selectionStart } = event.target

      event.target.setSelectionRange(
        selectionStart + (selectionStart === 2 ? 1 : 0),
        selectionStart + (selectionStart === 2 ? 2 : 1)
      )
    },
    allowToInputOnlyFourCharacters: function(event) {
      const { selectionStart, selectionEnd } = event.target

      if (selectionStart === 5 || selectionEnd - selectionStart != 1) {
        event.preventDefault()
      }
    }
  }
}
</script>
