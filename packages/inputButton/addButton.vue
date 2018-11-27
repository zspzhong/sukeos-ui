<template>
  <div class="sk-input-buttom add-buttom">
    <input type="text" :value="showStatus" :placeholder="placeholder" @input="input">
    <div @click="click">+</div>
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
    showStatus () {
      return this.value
    }
  },
  methods: {
    input (event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    click () {
      this.$emit('add', this.value)
    }
  }
}
</script>
