<template>
  <div class="sk-input-buttom sk-input-select">
    <select :name="name" :value="selectValue" @input="select">
      <option :value="item.value" v-for="(item, key) in data.option" :key="key">{{item.name}}</option>   
    </select>
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
    },
    select: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {
        return { option: [] }
      }
    }
  },
  computed: {
    selectValue () {
      return this.select
    },
    showValue () {
      return this.value
    }
  },
  methods: {
    input (event) {
      const value = event.target.value
      this.$emit('input', value)
    },
    select (event) {
      const value = event.target.value
      this.$emit('select', value, this.keyname)
    },
    click () {
      this.$emit('click', this.value)
    }
  }
}
</script>
