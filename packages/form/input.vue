<template>
  <div class="sk-input">
    <input type="text" :value="temp" :placeholder="placeholder" @input="input">
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
      type: [String, Number],
      default: ''
    },
    keyname: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    temp () {
      return this.value
    }
  },
  methods: {
    input (event) {
      const value = event.target.value
      this.$emit('input', value, this.keyname)
    }
  }
}
</script>
