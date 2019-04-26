<template>
  <div class="sk-input-buttom sk-input-select" :style="{'padding-left': width}">
    <select :style="{'width': width}" :name="name" :value="selectValue" @input="changeSelect">
      <option :value="item.value" v-for="(item, key) in data.option" :key="key">{{item.name}}</option>   
    </select>
    <input type="text" :value="showValue" :placeholder="placeholder" @input="input">
    <i @click="click"></i>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100px'
    },
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
    changeSelect (event) {
      const value = event.target.value
      this.$emit('select', value, this.keyname)
    },
    click () {
      this.$emit('click', this.value)
    }
  }
}
</script>
