<template>
  <div class="sk-button-screening">
    <div v-for="(item, index) in config" :key="index">
      <div class="sk-button-screening-label">{{item.label}}</div>
      <div class="sk-button-screening-bt-list">
        <div :class="{'active': showData[item.key] === bt.value}" v-for="(bt, key) in item.data" :key="key" @click="click(bt.value, item.key)">{{bt.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    config: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    showData () {
      return this.value
    }
  },
  methods: {
    click (value, key) {
      let data = this.value
      data[key] = value
      this.$emit('input', data)
      this.$emit('change')
    }
  }
}
</script>
