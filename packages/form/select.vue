<template>
  <div class="sk-select">
    <select :name="name" :value="showValue" @input="input">
      <option :value="item.value" v-for="(item, key) in data.option" :key="key">{{item.name}}</option>   
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    keyname: {
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
    showValue () {
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
