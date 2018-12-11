<template>
  <div class="sk-layout-sub-menu">
    <div class="title">{{name}}</div>
    <div v-for="(item, index) in menu"
    :key="index"
    :class="{'active': path === item.path}"
    @click="openUrl(item.path)">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    menu: {
      type: Array,
      default: () => {
        return []
      }
    },
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    openUrl (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
