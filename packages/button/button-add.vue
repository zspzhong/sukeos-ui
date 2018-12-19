<template>
  <button class="sk-button sk-bt-add" @click="click">
    <span>+</span>
  </button>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
