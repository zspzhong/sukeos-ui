<template>
  <div class="x-textarea">
    <textarea type="text" :rows="data.rows" :value="temp" :placeholder="placeholder" @input="input"></textarea>
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
    },
    data: {
      type: Object,
      default: () => {
        return { rows: 5 }
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
