<template>
  <div class="sk-radio">
    <div v-for="(item, key) in data.option" :key="key" :class="{'active': item.value === temp}" @click="input(item.value)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
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
    temp () {
      return this.value
    }
  },
  methods: {
    input (value) {
      this.$emit('input', value, this.keyname)
    }
  }
}
</script>
