<template>
  <input
    id="card-number"
    class="form-control"
    v-model="inputValue"
    @focus="selectFirstCharacter"
    @keydown="allowToInputOnlySixteenCharacters"
  />
</template>

<script>
import { chunk } from 'lodash-es'

export default {
  name: 'card-number-input',
  props: ['value'],
  computed: {
    inputValue: {
      get: function() {
        return chunk(this.value.padEnd(16, '_').split(''), 4).map(array => array.join('')).join(' ')
      },
      set: function(newInputValue) {
        this.$emit('input', newInputValue.replace(/( |_)/g, ''))
      }
    }
  },
  methods: {
    selectFirstCharacter: function(event) {
      event.target.setSelectionRange(0, 1)
    },
    allowToInputOnlySixteenCharacters: function(event) {
      if (event.keyCode === 37 || event.keyCode === 39) return

      const { selectionStart, selectionEnd } = event.target

      if (selectionStart === 19) {
        event.preventDefault();
        return
      }

      if (selectionEnd - selectionStart !== 1) {
        event.target.setSelectionRange(
          selectionStart + (selectionStart % 5 === 4 ? 1 : 0),
          selectionStart + (selectionStart % 5 === 4 ? 2 : 1)
        )

        return
      }

      if (event.keyCode >= 48 && event.keyCode <= 57) {
        return
      }

      event.preventDefault()
    }
  }
}
</script>
