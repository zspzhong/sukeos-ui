<template>
  <button class="sk-button" @click="click">
    <span><slot></slot></span>
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
