<template>
  <div class="sk-tags">
    <div class="sk-tag-item" v-for="(item, index) in showValue" :key="index">
      <div>{{item}}</div>
      <div class="sk-tag-del" @click="del(index)">删除</div>
    </div>
    <div class="sk-tag-input">
      <input type="text" :placeholder="placeholder" v-model="addValue">
      <div class="sk-tag-input-bt-add" @click="add">+</div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [Array, Object],
      default: ''
    },
    keyname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      addValue: ''
    }
  },
  computed: {
    showValue () {
      return this.value
    }
  },
  methods: {
    add () {
      const value = this.addValue
      let arr = this.showValue
      arr.push(value)
      this.$emit('input', arr, this.keyname)
      this.addValue = ''
    },
    del (index) {
      let arr = this.showValue
      arr.splice(index, 1)
      this.$emit('input', arr, this.keyname)
    }
  }
}
</script>
