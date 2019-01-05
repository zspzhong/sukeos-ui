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
      if (!active) {
        this.$emit('input', this.data.false)
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
      status = map[status]
      const value = this.data[status]
      this.$emit('input', value)
      this.$emit('change')
      if (status === 'true') {
        this.$emit('true')
      } else if (status === 'false') {
        this.$emit('false')
      }
    }
  }
}
</script>
