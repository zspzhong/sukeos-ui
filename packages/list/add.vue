<template>
  <div class="sk-list sk-list-add">
    <div class="input-search">
      <input type="text" :value="showValue" :placeholder="placeholder" @input="input">
      <i></i>
    </div>
    <div class="items-search" :class="{'hidden': searchItems.length === 0}">
      <div v-for="(item, index) in searchItems" :key="index" @click="select(item.value, item.name)">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    showValue () {
      return this.value
    },
    searchItems () {
      let items = []
      const value = this.value
      if (value === '') return []
      for (let i = 0; i < this.data.length; i++) {
        const str = this.data[i].name ? this.data[i].name : ''
        if (str.indexOf(value) != -1) {
          items.push(this.data[i])
        }
      }
      return items
    }
  },
  methods: {
    select (value, name) {
      this.$emit('select', value, name)
    },
    input (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>
