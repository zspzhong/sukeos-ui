<template>
	<div class="sk-layout-menu">
    <div class="sk-layout-menu-body">
      <div v-for="(item, key) in menu"
       :key="key"
       @click="openUrl(item.path)"
       :class="{'active': path === item.path}">
         <i :class="item.icon"></i>
         <div>{{item.name}}</div>
       </div>
       <div class="logout" @click="logout">
        <i class="logout"></i>
        <div>退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    },
    logout () {

    }
  }
}
</script>
