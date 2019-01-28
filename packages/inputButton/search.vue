<template>
  <div class="sk-input-buttom sk-input-search">
    <input type="text" :value="showValue" :placeholder="placeholder" @input="input">
    <i @click="click"></i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    showValue () {
      return this.value
    }
  },
  methods: {
    input (event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    click () {
      this.$emit('click', this.value)
    }
  }
}
</script>
