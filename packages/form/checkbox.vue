<template>
  <div class="sk-checkbox">
    <div v-for="(item, key) in data.option" :key="key" :class="{'active': temp[item.value]}" @click="input(item.value)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: []
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
    temp () {
      const option = this.data.option
      const arr = this.value
      let json = {}
      for (let i = 0; i < option.length; i++) {
        const data = option[i]
        json[data.value] = false
      }
      for (let i = 0; i < arr.length; i++) {
        const data = arr[i]
        json[data] = true
      }
      return json
    }
  },
  methods: {
    input (value) {
      let json = this.temp
      json[value] = json[value] ? false : true
      let arr = []
      for (let key in json) {
        if (json[key]) {
          arr.push(key)
        }
      }
      this.$emit('input', arr, this.keyname)
    }
  }
}
</script>
