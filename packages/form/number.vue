<template>
  <div class="sk-number">
    <div class="sk-number-input">
      <div class="reduce" @click="reduce()">-</div>
      <input type="number" :value="showValue" :placeholder="placeholder" @input="input">
      <div class="increase" @click="increase()">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    keyname: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    placeholder: {
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
      this.$emit('input', value, this.keyname)
    },
    reduce () {
      let value = this.showValue
      if (this.data.min && value === this.data.min) {
        return
      }
      this.reduceFn(value)
    },
    reduceFn (value) {
      value--
      if (this.disable(value)) {
        this.reduceFn(value)
      } else {
        this.$emit('input', value, this.keyname)
      }
    },
    increase () {
      let value = this.showValue
      if (this.data.max && value === this.data.max) {
        return
      }
      this.increaseFn(value)   
    },
    increaseFn (value) {
      value++
      if (this.disable(value)) {
        this.increaseFn(value)
      } else {
        this.$emit('input', value, this.keyname)
      }
    },
    disable (value) {
      if (!this.data.disable) return value
      let statu = false
      for (let i = 0; i < this.data.disable.length; i++) {
        let dis = this.data.disable[i]
        if (value === dis) {
          statu = true
          break
        }
      }
      return statu
    }
  }
}
</script>