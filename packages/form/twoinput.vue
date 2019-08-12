<template>
  <div class="sk-twoInput">
    <input type="text" :value="one" :placeholder="placeholder" @input="inputOne">
    <div>~</div>
    <input type="text" :value="two" :placeholder="placeholder" @input="inputTwo">
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
      type: [Array],
      default: []
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
    one () {
      return this.value[0]
    },
    two () {
      return this.value[1]
    },
    showValue () {
      return this.value
    }
  },
  methods: {
    inputOne (event) {
      const value = event.target.value
      let arr = this.showValue
      arr[0] = value
      this.$emit('input', arr, this.keyname)
    },
    inputTwo (event) {
      const value = event.target.value
      let arr = this.showValue
      arr[1] = value
      this.$emit('input', arr, this.keyname)
    }
  }
}
</script>
