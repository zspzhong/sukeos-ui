<template>
  <div class="sk-switch" @click="click(status)" :class="{'active': status === 'true'}">
    <input type="checkbox">
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    data: {
      type: Object,
      default: () => {
        return {
          false: false,
          true: true
        }
      }
    }
  },
  computed: {
    status () {
      let active
      for (let key in this.data) {
        if (this.data[key] === this.value) {
          active = key
        }
      }
      return active
    }
  },
  methods: {
    click (status) {
      const map = {
        false: 'true',
        true: 'false'
      }
      const value = this.data[map[status]]
      this.$emit('input', value)
    }
  }
}
</script>
